export const POST = (request: Request) => {
    const pathname = new URL(request.url).pathname;
    return new Response(`You requested from ${pathname}`, { status: 200 });
};