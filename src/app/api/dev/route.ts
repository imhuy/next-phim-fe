import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const data = {
      message: "Hello from API!",
      timestamp: new Date().toISOString(),
      status: "success",
      data: {
        id: 1,
        name: "Sample Data",
        description: "This is a simple API response"
      }
    };

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
