import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useTrailers from "../hooks/useTrailers";
import "../index.css";
interface Props {
  movieId: number;
}
const MovieTrailer = ({ movieId }: Props) => {
  const { data, isLoading, error } = useTrailers(movieId);
  const Base_Video_URL1 = "https://www.youtube.com/embed/";
  const Base_Video_URL2 = "https://www.youtube.com/watch?v=";
  console.log(data);
  if (isLoading) return null;
  if (error) throw error;
  const first = data?.results[0];

  return (
    <>
      <iframe
        width="560"
        height="315"
        src={Base_Video_URL1 + first?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <Link to={Base_Video_URL2 + first?.key} target="block">
        <Button marginTop={5}>Trailer</Button>
      </Link>
    </>
  );
};

export default MovieTrailer;
