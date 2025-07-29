import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes (formerly cacheTime)
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

export interface FetchOptions extends RequestInit {
  params?: Record<string, string | number | boolean>;
  timeout?: number;
}

export interface ApiResponse<T = unknown> {
  data: T;
  error?: string;
  message?: string;
  status: number;
}

export interface BackendApiResponse<T = unknown> {
  isOk: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export class ApiError extends Error {
  status: number;
  data?: unknown;

  constructor(message: string, status: number, data?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://fe.api-bongda.com";

export async function fetchApi<T = unknown>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<ApiResponse<T>> {
  const { params, timeout = 30000, ...fetchOptions } = options;

  let url = `${API_BASE_URL}${endpoint}`;

  if (params) {
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      searchParams.append(key, String(value));
    });
    url += `?${searchParams.toString()}`;
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        ...fetchOptions.headers,
      },
    });

    clearTimeout(timeoutId);

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      throw new ApiError(
        data?.message || `Request failed with status ${response.status}`,
        response.status,
        data
      );
    }

    return {
      data,
      status: response.status,
      message: data?.message,
    };
  } catch (error) {
    clearTimeout(timeoutId);

    if (error instanceof ApiError) {
      throw error;
    }

    if (error instanceof Error) {
      if (error.name === "AbortError") {
        throw new ApiError("Request timeout", 408);
      }

      throw new ApiError(error.message, 500);
    }

    throw new ApiError("Unknown error occurred", 500);
  }
}

// Convenience methods
export const api = {
  get: <T = unknown>(endpoint: string, options?: FetchOptions) =>
    fetchApi<T>(endpoint, { ...options, method: "GET" }),

  post: <T = unknown>(
    endpoint: string,
    data?: unknown,
    options?: FetchOptions
  ) =>
    fetchApi<T>(endpoint, {
      ...options,
      method: "POST",
      body: JSON.stringify(data),
    }),

  put: <T = unknown>(
    endpoint: string,
    data?: unknown,
    options?: FetchOptions
  ) =>
    fetchApi<T>(endpoint, {
      ...options,
      method: "PUT",
      body: JSON.stringify(data),
    }),

  patch: <T = unknown>(
    endpoint: string,
    data?: unknown,
    options?: FetchOptions
  ) =>
    fetchApi<T>(endpoint, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(data),
    }),

  delete: <T = unknown>(endpoint: string, options?: FetchOptions) =>
    fetchApi<T>(endpoint, { ...options, method: "DELETE" }),
};

// React Query hooks factory
export function createQueryKeys<T extends string>(feature: T) {
  return {
    all: [feature] as const,
    lists: () => [...createQueryKeys(feature).all, "list"] as const,
    list: (filters: unknown) =>
      [...createQueryKeys(feature).lists(), filters] as const,
    details: () => [...createQueryKeys(feature).all, "detail"] as const,
    detail: (id: string | number) =>
      [...createQueryKeys(feature).details(), id] as const,
  };
}
