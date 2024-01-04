import { Box, Center, Card, CardBody, CardFooter, CardHeader, Heading } from '@chakra-ui/react';
import React from 'react';

// Look like a ds screen

function GameDevProjectCard() {
  return (
    <Card bg={'green'}>
      <CardHeader ml={'5%'} mr={'5%'} mt={'2%'} bg={'white'}>
        <Center>
          <Heading>Gunslinger Hilda</Heading>
        </Center>
      </CardHeader>

      <CardBody>
        
      </CardBody>

      <CardFooter></CardFooter>
    </Card>
  )
}

export default GameDevProjectCard;