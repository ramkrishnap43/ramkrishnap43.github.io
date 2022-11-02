import { Box, Flex, chakra, Img, SimpleGrid, Center, Grid } from '@chakra-ui/react'
import React from 'react'

const Statistics = () => {
  return (
    <Box w={"60%"}  m='auto'>
    <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}
      >
        My Statistics
      </chakra.h1>
    <Center w={'72%'} m='auto'>
        <Grid objectFit={'cover'}>
        <Img w={'100%'} src='https://github-readme-stats.vercel.app/api?username=ramkrishnap43&show_icons=true&locale=en' alt=''/>
        <Img w={'100%'} src='https://github-readme-stats.vercel.app/api/top-langs?username=ramkrishnap43&show_icons=true&locale=en&layout=compact' alt=''/>
        <Img w={'100%'} src='https://github-readme-streak-stats.herokuapp.com/?user=ramkrishnap43&' alt=''/>
        </Grid>
        </Center>
    </Box>
  )
}

export default Statistics
