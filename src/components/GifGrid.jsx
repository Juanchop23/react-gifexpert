import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export function GifGrid({ category }) {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {/* Alternative */}
      {/* <div className="">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div> */}

      {isLoading && <h2>Cargando...</h2>}

      <div className="">
        {images.map((image) => (
          <GifItem key={image.id} title={image.title} url={image.url} />
        ))}
      </div>
    </>
  );
}
