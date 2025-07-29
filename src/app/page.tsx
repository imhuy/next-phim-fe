import MovieGrid from "@/components/MovieGrid";
import { getMovieUpcoming } from "@/lib/common/movies";

export default async function Home() {
  const data = await getMovieUpcoming();
  const movieUpcoming = data.data;

  return (
    <main className="bg-black">
      {/* Phim sắp chiếu */}
      <MovieGrid movies={movieUpcoming} title="Phim sắp chiếu" />

      {/* ... rest of content ... */}
      <MovieGrid movies={movieUpcoming} title="Phim đang chiếu" />
    </main>
  );
}
