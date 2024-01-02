
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

    const header_url = headersList.get("x-pathname") || '';
    const slugUrl = header_url.replace('/play/', '')

    let data = await getData(slugUrl);
   
    return (
        <main className=" container">
            <a className="flex flex-1 items-center justify-center" href="/">

                <h1 className="ml-10 text-2xl font-semibold mt-4 hover:text-green-600"> Trang chủ</h1>
            </a>


            <div className="flex flex-wrap gap-10   justify-center items-center mt-4">
                {data.map((item: any, i: number) =>
                    <div className=" w-[600px] flex flex-wrap " key={i}>
                        <VideoPlayer video={item.link_m3u8} />
                        <p className="truncate w-44">{item.filename}</p>

                    </div>
                )}
            </div>
        </main>
    )
}
export default Home;