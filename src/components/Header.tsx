import { Box, Flex, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { IoIosArrowBack } from 'react-icons/io';

export function Header() {
    const { asPath } = useRouter()

    return (
        <>
            {asPath === "/continent" && (
                <Link href="/" passHref>
                    <Icon
                      as={IoIosArrowBack}
                      fontSize={["16px", "32px"]}
                      position="absolute"
                      top={["17px", "34px"]}
                      left={["16px", "140px"]} 
                      zIndex="1"
                      cursor="pointer"
                    />
                </Link>
            )}
            <Flex
                as="header"
                align="center"
                justify="center"
                h={["50px", "100px"]}
                w="100vw"
                position="relative"
            >
                <Image src="/images/Logo.svg" alt="Worldtrip" w={["81px", "184.06px"]} />
            </Flex>
        </>
    );
}