import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";

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
                <Image mx="auto" src="/images/cocktail.svg" alt="Coquetel" />
                <Text textAlign="center" mt="24px">vida noturna</Text>
            </Box>
            <Box>
                <Image mx="auto" src="/images/surf.svg" alt="Coquetel" />
                <Text textAlign="center" mt="24px">praia</Text>
            </Box>
            <Box>
                <Image mx="auto" src="/images/building.svg" alt="Coquetel" />
                <Text textAlign="center" mt="24px">moderno</Text>
            </Box>
            <Box>
                <Image mx="auto" src="/images/museum.svg" alt="Coquetel" />
                <Text textAlign="center" mt="24px">clássico</Text>
            </Box>
            <Box>
                <Image mx="auto" src="/images/earth.svg" alt="Coquetel" />
                <Text textAlign="center" mt="24px">e mais...</Text>
            </Box>
        </SimpleGrid>
    );
}