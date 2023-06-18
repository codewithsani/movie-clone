import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 7 ? "green" : score > 6 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="14px" borderRadius="4px">
      {score.toFixed(1)}
    </Badge>
  );
};

export default CriticScore;
