import MovieGrid from "@/components/MovieGrid";
import { getMovieUpcoming } from "@/lib/common/movies";

export default async function PhimLe() {
  const data = await getMovieUpcoming();
  const movieUpcoming = data.data;

  return (
    <main className="bg-black">
      <MovieGrid movies={movieUpcoming} title="Phim sắp chiếu" />

      <MovieGrid movies={movieUpcoming} title="Phim đang chiếu" />

      <MovieGrid movies={movieUpcoming} title="Phim đang chiếu" />
    </main>
  );
}
