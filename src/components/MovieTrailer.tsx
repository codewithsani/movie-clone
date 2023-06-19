import useTrailers from "../hooks/useTrailers";
interface Props {
  movieId: number;
}
const MovieTrailer = ({ movieId }: Props) => {
  const { data, isLoading, error } = useTrailers(movieId);
  const Base_Video_URL = "https://www.youtube.com/embed/";
  console.log(data);
  if (isLoading) return null;
  if (error) throw error;
  const first = data?.results[0];

  return (
    <iframe
      width="760"
      height="415"
      src={Base_Video_URL + first?.key}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  );
};

export default MovieTrailer;
