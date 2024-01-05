import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Box, Heading, Image, Flex, VStack, Center, Button, Grid, IconButton } from '@chakra-ui/react';
import React from 'react';

function GameDevDSScreen( { selectedGame }) {

  const dsBaseColor = '#3A3A3A'
  const dsButtonColor = '#53E6E3'

  if (!selectedGame) {
    return <Box>Select a project to see details.</Box>;
  }

  return (

    <Box 
      // bg={'white'} 
      h={'48vw'}
      w={'48vw'}
    >
      <Flex direction={'column'} h={'100%'}>
        {/* Top Screen */}
        <Box 
          bg={dsBaseColor}
          borderRadius={'5%'}
          h={'47.5%'}
        >
          <Center w={'100%'} h={'100%'}>
            <Box
              bg={'black'}
              w={'80%'}
              h={'90%'}
            >
              <Box 
                h={'100%'}
                w={'100%'}
                dangerouslySetInnerHTML={{__html: selectedGame.video}} 
              />
            </Box>
          </Center>
          
        </Box>

        {/* Middle */}
        <Center h={'5%'}>
          <Box 
            bg={dsBaseColor}
            w={'85%'}
            h={'100%'}
          >
          </Box>
        </Center>
        

        {/* Bottom Screen */}
        <Box 
          // bg={'green'}
          h={'47.5%'}
        >
          <Flex justify={'center'} w={'100%'} h={'100%'}>
            {/* DPad */}
            <Center
              bg={dsBaseColor}
              borderLeftRadius={'15%'}
              w={'100%'}
              h={'100%'}
              pl={1}
              flex={1}
            >
              <Grid
                templateColumns={'repeat(3, 1fr)'}
              >
                <IconButton
                  bg={dsButtonColor}
                  icon={<ChevronUpIcon />}
                  borderRadius={0}
                  gridColumn={'2'}
                  gridRow={'1'}
                />

                <IconButton
                  bg={dsButtonColor}
                  icon={<ChevronLeftIcon />}
                  borderRadius={0}
                  gridColumn={'1'}
                  gridRow={'2'}
                />

                <Box
                  bg={dsButtonColor}
                  borderRadius={0}
                  gridColumn={'2'}
                  gridRow={'2'}
                />

                <IconButton
                  bg={dsButtonColor}
                  icon={<ChevronRightIcon />}
                  borderRadius={0}
                  gridColumn={'3'}
                  gridRow={'2'}
                />

                <IconButton
                  bg={dsButtonColor}
                  icon={<ChevronDownIcon />}
                  borderRadius={0}
                  gridColumn={'2'}
                  gridRow={'3'}
                />

              </Grid>
            </Center>

            {/* Lower Screen */}
            <Box
              bg={dsBaseColor}
              w={'100%'}
              h={'100%'}
              flex={3}
            >
              <Center
                w={'100%'}
                h={'100%'}
              >
                <Box
                  bg={'black'}
                  w={'95%'}
                  h={'95%'}
                  overflowY={'scroll'}
                >
                  <Heading size="md">{selectedGame.title}</Heading>
                  <Box>{selectedGame.genre}</Box>
                  <Image src={selectedGame.icon} boxSize="100px" objectFit="contain" />
                  <Box>{selectedGame.summary}</Box>
                </Box>
              </Center>
              
            </Box>

            {/* ABXY Buttons */}
            <Center
              bg={dsBaseColor}
              borderRightRadius={'15%'}
              w={'100%'}
              h={'100%'}
              pr={1}
              flex={1}
            >
              <Grid
                templateColumns={'repeat(3, 1fr)'}
              >
                <Button
                  bg={dsButtonColor}
                  borderRadius={'50%'}
                  gridColumn={'2'}
                  gridRow={'1'}
                >
                  X
                </Button>

                <Button
                  bg={dsButtonColor}
                  borderRadius={'50%'}
                  gridColumn={'1'}
                  gridRow={'2'}
                >
                  Y
                </Button>

                <Button
                  bg={dsButtonColor}
                  borderRadius={'50%'}
                  gridColumn={'3'}
                  gridRow={'2'}
                >
                  A
                </Button>

                <Button
                  bg={dsButtonColor}
                  borderRadius={'50%'}
                  gridColumn={'2'}
                  gridRow={'3'}
                >
                  B
                </Button>

              </Grid>
            </Center>
          </Flex>
        </Box>
      </Flex>
    </Box>

    // <Box align="center" justify="center" width={'600px'}>
    //   <Box borderWidth="2px" borderRadius="md" overflow="hidden" boxShadow="lg">
    //     {/* Top Screen (YouTube Video) */}
    //     <Box height="315px" width="560px" m={5}>
    //       <Box dangerouslySetInnerHTML={{__html: selectedGame.video}} />
    //     </Box>
        
    //     {/* Bottom Screen (Other Information) */}
    //     <VStack m="10" p={'4'} spacing="4" align="flex-start" overflowY={'scroll'} maxHeight="275px" maxW={'100%'}>
    //       <Heading size="md">{selectedGame.title}</Heading>
    //       <Box>{selectedGame.genre}</Box>
    //       <Image src={selectedGame.icon} boxSize="100px" objectFit="contain" />
    //       <Box>{selectedGame.summary}</Box>
    //     </VStack>
    //   </Box>
    // </Box>

  )
}

export default GameDevDSScreen;