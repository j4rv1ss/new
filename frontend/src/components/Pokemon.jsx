import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../index";
import { Button, Container, HStack } from "@chakra-ui/react";
import PokemonCard from "./PokemonCard";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

 
  const btns = new Array(131).fill(1);
  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const { data } = await axios.get(
          `${URL}/cards?page=${page}&pageSize=10`
        );
        setPokemon(data.data);
        // console.log(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPokemons();
  }, []);
  console.log(pokemon);

  if (error) return <ErrorComponent message={"Error while fetching Coins"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {/* {pokemon.map((i) => i.id)} */}
            <HStack>{array.map((i) => i.name )}</HStack>
          </HStack>
          <HStack w={"full"} overflowX={"auto"} p={8}>
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const array = [
    {
      name: "sdf",
      id: 12,
    },
    {
      name: "fbfg",
      id: 15,
    },
    {
      name: "fgbn",
      id: 3,
    },
    {
      name: "nhmhg",
      id: 11,
    },
  ];


export default Pokemon;
