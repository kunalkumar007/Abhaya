import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Flex,
} from '@chakra-ui/react';

import React from "react";

function Home() {
  return (
    
    
    <Container maxW={'3xl'}>
    <Stack
      as={Box}
      textAlign={'center'}
      spacing={{ base: 8, md: 14 }}
      py={{ base: 20, md: 36 }}>
      <Heading
        fontWeight={600}
        fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}>
        {/* Listen<br/> & <br/> */}
        <Text  color={'pink.500'}>
          A <br/>
        </Text>
        <Text as={'span'} color={'black.500'}>
          BHAYA.
        </Text>
      </Heading>
      <Text color={'gray.500'}>
      here at your service!
      </Text>
      <Stack
        direction={'column'}
        spacing={5}
        align={'center'}
        alignSelf={'center'}
        position={'relative'}>
         <Button
         
          colorScheme={'green'}
          bg={'pink.600'}
          rounded={'full'}
          px={6}
          _hover={{
            bg: 'pink.300',
          }}
          onClick={() => {
            window.open(process.env.REACT_APP_LOGIN, "_self");
          }}
          >
              <a href="#" >SOS </a>
          
        </Button>
        
       
      </Stack>
    </Stack>
  </Container>
    // </Flex>
  );
}

export default Home;
