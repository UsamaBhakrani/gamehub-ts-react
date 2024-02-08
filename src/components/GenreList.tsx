import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <List>
      {data.map((g) => {
        return (
          <ListItem key={g.id} paddingY="5px">
            <HStack>
              <Image
                margin={1}
                boxSize="30px"
                borderRadius={8}
                src={getCroppedImageUrl(g.image_background)}
              />
              <Text fontSize="large">{g.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
