import { Image, Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';

import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '../styles/carousel.module.css';
import { api } from '../services/api'
import { useEffect, useState } from 'react'

interface HomeProps {
  id: number;
  continent: string;
  shortDescription: string;
  image: string;
}


SwiperCore.use([Navigation, Pagination, A11y]);

export default function ContinentsSlide() {
  const [continents, setContinents] = useState<HomeProps[]>([]);

  useEffect(() => {
    async function loadContinents() {
      const response = await api.get('/home');
      setContinents(response.data);
    }

    loadContinents();
  }, [])
  
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className={styles.carousel}
    >
      {continents.map(continent => (
        <SwiperSlide className={styles.item} key={continent.id}>
            <Image objectFit="cover" h="450px" w="100%" src={continent.image} alt={continent.continent} />
            <Link href={`/continent/${continent.id}`} passHref>
              <Flex
                  position="absolute"
                  w="100%"
                  h="100%"
                  color="gray.50"
                  bg="#00000030"
                  align="center"
                  justify="center"
                  left={0}
                  top={0}
                  direction="column"
                  cursor="pointer"
              >
                  <Box fontWeight="700" fontSize={48}>{continent.continent}</Box>
                  <Box fontWeight="700" fontSize={24}>{continent.shortDescription}</Box>
              </Flex>
            </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};