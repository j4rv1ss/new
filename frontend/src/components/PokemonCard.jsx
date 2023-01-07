import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const PokemonCard = ({ id, name, images, abilities,attacks }) => {
  return (
    <VStack
      w={52}
      p={8}
      shadow={"lg"}
      borderRadius={"lg"}
      m={4}
      transition={"all 0.3s"}
      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Text noOfLines={1}>{id}</Text>
      <Image src={images} w={"10"} h={"10"} alt={"Coins"} />
      <Heading size={"md"} noOfLines={1}>
        {name}
      </Heading>
      <Text noOfLines={1}>{abilities}</Text>
      <Text noOfLines={1}>{attacks}</Text>
    </VStack>
  );
};

export default PokemonCard;
