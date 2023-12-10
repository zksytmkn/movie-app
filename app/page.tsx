import { Row } from "../components/row";
import { fetchMovies } from "@/actions/movie";

export default async function Home() {
  const data = await fetchMovies();

  return (
    <>
      <Row title="Only on Netflix" movies={data.NetflixOriginal.results} isLargeRow />
      <Row title="Global Top 20" movies={data.Top.results} />
      <Row title="Action & Adventure" movies={data.Action.results} />
      <Row title="Comedy" movies={data.Comedy.results} />
      <Row title="Horror" movies={data.Horror.results} />
      <Row title="Romantic" movies={data.Romantic.results} />
      <Row title="Documentary" movies={data.Documentary.results} />
    </>
  );
}
