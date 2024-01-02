import Image from "next/image";


async function getData() {
  const res = await fetch('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1')
  const data = await res.json();
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data
}


async function Home() {
  const data = await getData();

  return (
    <main className=" container mx-auto  ">

      <div className=" grid sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 grid-cols-2 gap-x-8 gap-y-10 mt-8 lg:mt-10">
        {data.items.map((item: any, i: number) =>
          <a href={`play/${item.slug}`} key={i} className="flex flex-col items-center gap-y-3 hover:shadow-xl p-4 rounded-sm  ">
            <Image
              alt='img'
              width={200}
              height={300}
              style={{
                width: "200px",
                height: "300px"
              }}
              src={`https://img.ophim1.com/uploads/movies/${item.thumb_url}`}
            >
            </Image>

            <p className="truncate w-44">{item.name}</p>

          </a>
        )}
      </div>


    </main>
  )
}
export default Home;