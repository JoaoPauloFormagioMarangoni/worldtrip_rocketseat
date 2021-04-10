import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Cities } from "../../components/Cities";
import { Header } from "../../components/Header";
import { InformationContinent } from "../../components/InformationContinent";
import { api } from "../../services/api";

interface InformationProps {
  description: string;
  countries: number;
  tongues: number;
  citiesTop: number;
}

interface CitiesProps {
  image: string;
  name: string;
  country: string;
  flag: string;
}

interface ContinentProps {
  id: number;
  continent: string;
  image: string;
  informations: InformationProps;
  cities: CitiesProps[];
}

interface ServerProps {
  continentInformations: ContinentProps;
}

export default function Continente({ continentInformations }: ServerProps) {
    return (
      <Flex direction="column" overflowX="hidden">
        <Header />
        <Box
          position="relative"
          w="100vw"
          h={["150px", "500px"]}
        >
          <Image
            src={continentInformations.image}
            alt={continentInformations.continent}
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
            {continentInformations.continent}
          </Text>
        </Box>
        <InformationContinent informations={continentInformations.informations} />
        <Box
          w="1160px"
          mx="auto"
          mb="35px"
        >
          <Text fontSize="2.25rem" fontWeight="500" color="green.800" mb="40px">Cidades +100</Text>
          <Cities cities={continentInformations.cities} />
        </Box>
      </Flex>
    )
  }

  export const getServerSideProps = async({req, params}) => {
    const { slug } = params;

    const response = await api.get(`/continent/${slug}`);

    const continentInformations = response.data;

    return {
      props: {
        continentInformations
      }
    }
  }