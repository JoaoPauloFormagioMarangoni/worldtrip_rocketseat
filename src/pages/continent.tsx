import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { Cities } from "../components/Cities";
import { Header } from "../components/Header";
import { InformationContinent } from "../components/InformationContinent";
import {ContinentsChangeContext} from "../contexts/ContinentsChangeContext";

export default function Continente() {
    const { continentInformations, loadContinent } = useContext(ContinentsChangeContext);

    useEffect(() => {
      loadContinent();
    }, [])
    const { image, continent } = continentInformations

    return (
      <Flex direction="column" overflowX="hidden">
        <Header />
        <Box
          position="relative"
          w="100vw"
          h={["150px", "500px"]}
        >
          <Image
            src={image}
            alt={continent}
            w="100%"
            h="100%"
            objectFit="cover"
            filter="brightness(75%)"
          />
          <Text
            position="absolute"
            bottom={["50%", "59px"]}
            left={["50%", "140px"]}
            transform={["translate(-50%, 50%)", "translate(0)"]}
            fontSize={["1.75rem", "3rem"]}
            fontWeight="600"
            color="gray.50"
          >
            {continent}
          </Text>
        </Box>
        <InformationContinent />
        <Box
          w="1160px"
          mx="auto"
          mb="35px"
        >
          <Text fontSize="2.25rem" fontWeight="500" color="green.800" mb="40px">Cidades +100</Text>
          <Cities />
        </Box>
      </Flex>
    )
  }