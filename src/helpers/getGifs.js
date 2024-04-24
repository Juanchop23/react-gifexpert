export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=gwi07jR202cW7b2jHx5u86n8r7R4pP08&q=${category}&limit=10`;

  const response = await fetch(url);
  const { data } = await response.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
