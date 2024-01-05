import { Box, Heading, Image, Flex, VStack } from '@chakra-ui/react';
import React from 'react';

function GameDevDSScreen( { selectedGame }) {

  if (!selectedGame) {
    return <Box>Select a project to see details.</Box>;
  }

  return (

    <Box align="center" justify="center" width={'600px'}>
      <Box borderWidth="2px" borderRadius="md" overflow="hidden" boxShadow="lg">
        {/* Top Screen (YouTube Video) */}
        <Box height="315px" width="560px" m={5}>
          <Box dangerouslySetInnerHTML={{__html: selectedGame.video}} />
        </Box>
        
        {/* Bottom Screen (Other Information) */}
        <VStack m="10" p={'4'} spacing="4" align="flex-start" overflowY={'scroll'} maxHeight="275px" maxW={'100%'}>
          <Heading size="md">{selectedGame.title}</Heading>
          <Box>{selectedGame.genre}</Box>
          <Image src={selectedGame.icon} boxSize="100px" objectFit="contain" />
          <Box>{selectedGame.summary}</Box>
        </VStack>
      </Box>
    </Box>

    // <Box>
    //   <Heading size="md">{selectedGame.title}</Heading>
    //   <Image src={selectedGame.icon} />
    //   <Box>{selectedGame.summary}</Box>
    //   <Box>{selectedGame.genre}</Box>
    //   <Box dangerouslySetInnerHTML={{__html: selectedGame.video}} />
    // </Box>
  )
}

export default GameDevDSScreen;