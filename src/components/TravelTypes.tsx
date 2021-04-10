import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

export function TravelTypes() {
    return (
        <SimpleGrid
          minChildWidth="158px"
          w="100%"
          maxW="1160px"
          mx="auto"
          mt="80.79px"
          mb="80px"
        >
            <Box>
                <Image mx="auto" src="/images/home/travelTypes/cocktail.svg" alt="Coquetel" />
                <Text textAlign="center" mt="24px">vida noturna</Text>
            </Box>
            <Box>
                <Image mx="auto" src="/images/home/travelTypes/surf.svg" alt="Coquetel" />
                <Text textAlign="center" mt="24px">praia</Text>
            </Box>
            <Box>
                <Image mx="auto" src="/images/home/travelTypes/building.svg" alt="Coquetel" />
                <Text textAlign="center" mt="24px">moderno</Text>
            </Box>
            <Box>
                <Image mx="auto" src="/images/home/travelTypes/museum.svg" alt="Coquetel" />
                <Text textAlign="center" mt="24px">clássico</Text>
            </Box>
            <Box>
                <Image mx="auto" src="/images/home/travelTypes/earth.svg" alt="Coquetel" />
                <Text textAlign="center" mt="24px">e mais...</Text>
            </Box>
        </SimpleGrid>
    );
}