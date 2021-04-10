import { Divider, Flex, Image, Text } from "@chakra-ui/react";
import ContinentsSlide from "../components/ContinentsSlide";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
    return (
        <Flex direction="column" overflowX="hidden" align="center">
            <Header />
            <Image src="images/Banner.svg" alt="Continentes" w="100%" />
            <TravelTypes />
            <Divider w="90px" mb="52px"/>
            <Text fontWeight="500" fontSize="2.25rem" lineHeight="54px" color="green.800">Vamos nessa?</Text>
            <Text mb="52px" fontWeight="500" fontSize="2.25rem" color="green.800">Então escolha seu continente</Text>
            <ContinentsSlide />
        </Flex>
    );
}