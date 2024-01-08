
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
        <div className=" container bg-slate-400">


            <div className=" flex  flex-col ">
                <a className="flex items-center justify-center" href="/">

                    <h1 className="  text-2xl font-semibold mt-4 hover:text-green-600"> Trang chủ</h1>
                </a>

                <div className=" flex   flex-col  flex-wrap   ">
                    {data.map((item: any, i: number) =>
                        <div className=" flex flex-col  items-center   " key={i}>
                            <VideoPlayer video={item.link_m3u8} />
                            <p className="">{item.filename}</p>

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Home;