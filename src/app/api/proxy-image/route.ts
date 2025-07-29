import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get("url");

  console.log("imageUrl", imageUrl);
  if (!imageUrl) {
    return new NextResponse("Missing URL parameter", { status: 400 });
  }

  try {
    // Validate that the URL is valid
    const url = new URL(imageUrl);

    // Create the proxy URL for localhost
    const proxyUrl = `${
      request.nextUrl.origin
    }/api/proxy-image/stream?url=${encodeURIComponent(imageUrl)}`;

    // Return the proxy URL instead of the image buffer
    return NextResponse.json(
      {
        success: true,
        originalUrl: imageUrl,
        proxyUrl: proxyUrl,
      },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  } catch (error) {
    console.error("Error creating proxy URL:", error);
    return new NextResponse("Invalid URL", { status: 400 });
  }
}
