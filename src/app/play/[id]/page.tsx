
import { headers } from "next/headers";

async function getData(slug: string) {
    const res = await fetch(`https://ophim1.com/phim/${slug}`)
    const data = await res.json();
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return data?.episodes[0].server_data
}

import VideoPlayer from '@/components/JwLoader/Jwplay';
async function Home() {
    const headersList = headers();

    const header_url = headersList.get('x-url') || "";

    const slugUrl = header_url.replace('https://next-phim-fe.vercel.app/', '')
    // let data = await getData(slugUrl);

    return (
        <div className="flex flex-wrap gap-10 container justify-center items-center mt-4">
            {slugUrl}

        </div>
    )
}
export default Home;