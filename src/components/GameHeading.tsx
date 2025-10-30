import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlaform from "../hooks/usePlatform";
import useGameQueryStore from "../store";


const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const platformId = useGameQueryStore(p => p.gameQuery.platformId);

  const platform = usePlaform(platformId);
  const genre = useGenre(genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
