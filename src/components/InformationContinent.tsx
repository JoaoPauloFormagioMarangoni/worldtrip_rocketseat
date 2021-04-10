import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { AiOutlineExclamationCircle } from 'react-icons/ai';

interface ParamsProps {
  description: string;
  countries: number;
  tongues: number;
  citiesTop: number;
}

interface InformationProps {
  informations: ParamsProps;
}

export function InformationContinent({ informations }: InformationProps) {
    return (
        <Flex
          w="100%"
          maxW={["343px", "1160px"]}
          mx="auto"
          align="center"
          justify="space-between"
          my={["24px", "80px"]}
          direction={["column", "row"]}
        >
            <Text
              w={["100%", "600px"]}
              mx={["16px", "0"]}
              fontWeight="400"
              fontSize={["0.875rem", "1.5rem"]}
              align="justify"
              lineHeight={["21px", "36px"]}
              color="green.800"
            >
                {informations.description}
            </Text>
            <HStack spacing="10">
                <Text
                  fontWeight="600"
                  lineHeight="36px"
                  fontSize="24px"
                  color="green.800"
                >
                    <Box
                      textAlign="center"
                      fontSize="48px"
                      color="yellow.400"
                    >
                        {informations.countries}
                    </Box>
                    países
                </Text>
                <Text
                  fontWeight="600"
                  lineHeight="36px"
                  fontSize="24px"
                  color="green.800"
                >
                    <Box
                      textAlign="center"
                      fontSize="48px"
                      color="yellow.400"
                    >
                        {informations.tongues}
                    </Box>
                    línguas
                </Text>
                <Text
                  fontWeight="600"
                  lineHeight="36px"
                  fontSize="24px"
                  color="green.800"
                >
                    <Box
                      textAlign="center"
                      fontSize="48px"
                      color="yellow.400"
                    >
                        {informations.citiesTop}
                    </Box>
                    <Flex align="center">
                        cidades +100
                        <Icon as={AiOutlineExclamationCircle} fontSize="16px" ml="5px"/>
                    </Flex>
                </Text>
            </HStack>
        </Flex>
    );
}