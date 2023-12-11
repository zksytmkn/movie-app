import { Button } from "@nextui-org/react";
import { fetchBanner } from "@/actions/movie";

export const Banner = async () => {
  const base_url = "https://image.tmdb.org/t/p/original";
  const banner = await fetchBanner();

  function truncate(str: any, n: number) {
    if (str !== undefined) {
      return str.length > n ? str?.substr(0, n - 1) + "..." : str;
    }
  }

  return (
    <header
      className="text-white object-cover h-[460px] bg-cover bg-center mb-10"
      style={{
        backgroundImage: `url(${base_url}${banner?.backdrop_path})`,
      }}
    >
      <div className="ml-7 pt-36 h-44">
        <h1 className="text-5xl font-extrabold mb-4">{banner?.title || banner?.name || banner?.orignal_name}</h1>
        <div className="flex gap-1">
          <Button variant="ghost" className="font-bold">
            Play
          </Button>
          <Button variant="ghost" className="font-bold">
            My List
          </Button>
        </div>
        <h1 className="mt-4 max-w-xs font-bold">{truncate(banner?.overview, 160)}</h1>
      </div>
    </header>
  );
};
