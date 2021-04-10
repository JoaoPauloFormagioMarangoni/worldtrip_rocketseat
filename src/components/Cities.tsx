import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ContinentsChangeContext } from "../contexts/ContinentsChangeContext";

export function Cities() {
    const { continentInformations } = useContext(ContinentsChangeContext);
    const { cities } = continentInformations;

    return (
        <SimpleGrid
            minChildWidth="256px"
            gap="45px"
        >
            {cities.map(city => (
                <Box
                    borderRadius="0 0 4px 4px"
                    key={city.name}
                    w="256px"
                >
                    <Image src={city.image} borderRadius="4px 4px 0 0"/>
                    <Flex
                        justify="space-between"
                        align="center"
                        p="24px"
                        h="106px"
                        border="1px solid #FFBA08"
                        borderTop="transparent"
                        borderRadius="inherit"
                    >
                        <Flex direction="column">
                            <Text
                                mb="12px"
                                fontSize="1.25rem"
                                fontWeight="600"
                                color="green.800"
                            >
                                {city.name}
                            </Text>
                            <Text
                                fontSize="1rem"
                                fontWeight="500"
                                color="#999999"
                            >
                                {city.country}
                            </Text>
                        </Flex>
                        <Image src={city.flag} w="20px" />
                    </Flex>
                </Box>
            ))}
        </SimpleGrid>
    );
}