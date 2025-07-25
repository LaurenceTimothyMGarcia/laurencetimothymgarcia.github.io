import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { Box, Heading, Image, ListItem, UnorderedList, Flex, Center, Button, Grid, IconButton, Link, VStack, Spacer, HStack } from '@chakra-ui/react';
import React from 'react';
import SocialIcon from '../../components/SocialIcon';
import colors from '../../theme/Color';

function GameDevDSScreen( { selectedGame, mobile=false }) {

  const dsBaseColor = '#3A3A3A'
  const dsButtonColor = '#53E6E3'

  let title = 'Select a game to learn more!'
  let icon = ''
  let summary = ''
  let genre = ''
  let contribution = []
  let link = ''
  let topScreen = <Box>Select a game to learn more!</Box>;

  if (selectedGame) {
    title = selectedGame.title
    icon = selectedGame.icon
    summary = selectedGame.summary
    genre = selectedGame.genre
    contribution = selectedGame.contribution
    link = selectedGame.link
    topScreen = TopDisplay(selectedGame.topScreen);
  }

  const hoverStyles = {
    transform: 'rotateX(0deg)',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
  }

  if (mobile) {
    return (
      <VStack>
        <Box 
          bg={dsBaseColor}
          borderRadius={'5%'}
          h={'200px'}

          borderWidth={0}
          borderColor={'black'}
        >
          <Center w={'100%'} h={'100%'}>
            <Box
              bg={'black'}
              w={'80%'}
              h={'90%'}
            >
              {topScreen}
            </Box>
          </Center>
          
        </Box>

        <Box
          w={'350px'}
          h={'500px'}
        >
          <Center
            w={'100%'}
            h={'100%'}
          >
            <Box
              bg={'black'}
              w={'95%'}
              h={'95%'}
              overflowY={'auto'}
            >
              <Center><Heading size="md" color={colors.secondary}>{title}</Heading></Center>
              <Center><Heading size='sm' mb={'1rem'} color={colors.accent}>{genre}</Heading></Center>

              <Center>
                <SocialIcon link={link} img={'/logos/SocialLogos/ItchIORed.png'} />
              </Center>
              
              <Center><Heading size='sm' mt={'1rem'} color={colors.accent}>Summary</Heading></Center>
              <Box textColor={colors.contrast}>{summary}</Box>

              <Center><Heading size='sm' mt={'1rem'} color={colors.accent}>Contributions</Heading></Center>
              <Box textColor={colors.contrast}>
                <UnorderedList>
                  {contribution.map((task, index) =>
                    <ListItem key={index}>{task}</ListItem>
                  )}
                </UnorderedList>
              </Box>

            </Box>
          </Center>
        </Box>
        
      </VStack>
      
    )
  }

  return (

    <Box 
      h={'48vw'}
      w={'48vw'}

      // Transition stuff
      // cursor={'pointer'}
      // transition={'transform 0.6s, box-shadow 0.6s'}
      // transform={'rotateX(15deg) translateY(-50px) translateZ(-100px)'}
      // _hover={hoverStyles}
    >
      <Flex direction={'column'} h={'100%'}>
        {/* Top Screen */}
        <Box 
          bg={dsBaseColor}
          borderRadius={'5%'}
          h={'47.5%'}

          borderWidth={2}
          borderColor={'black'}
        >
          <Center w={'100%'} h={'100%'}>
            <Box
              bg={'black'}
              w={'80%'}
              h={'90%'}
            >
              {topScreen}
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
          h={'47.5%'}
          borderWidth={2}
          borderColor={'black'}
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
                  borderTopRadius={'10%'}
                  gridColumn={'2'}
                  gridRow={'1'}
                />

                <IconButton
                  bg={dsButtonColor}
                  icon={<ChevronLeftIcon />}
                  borderRadius={0}
                  borderLeftRadius={'10%'}
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
                  borderRightRadius={'10%'}
                  gridColumn={'3'}
                  gridRow={'2'}
                />

                <IconButton
                  bg={dsButtonColor}
                  icon={<ChevronDownIcon />}
                  borderRadius={0}
                  borderBottomRadius={'10%'}
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
                  overflowY={'auto'}
                >
                  <Heading size="md" color={colors.secondary}>{title}</Heading>
                  <Heading size='sm' mb={'1rem'} color={colors.accent}>{genre}</Heading>

                  <Center>
                    <SocialIcon link={link} img={'/logos/SocialLogos/ItchIORed.png'} />
                  </Center>
                  
                  <Heading size='sm' mt={'1rem'} color={colors.accent}>Summary</Heading>
                  <Box color={colors.contrast}>{summary}</Box>

                  <Heading size='sm' mt={'1rem'} color={colors.accent}>Contributions</Heading>
                  <Box color={colors.contrast}>
                    <UnorderedList>
                      {contribution.map((task, index) =>
                        <ListItem key={index}>{task}</ListItem>
                      )}
                    </UnorderedList>
                  </Box>

                </Box>
              </Center>
              
            </Box>

            {/* ABXY Buttons */}
            <VStack
              bg={dsBaseColor}
              borderRightRadius={'15%'}
              w={'100%'}
              h={'100%'}
              pr={1}
              flex={1}
              justifyContent={'space-evenly'}
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

              <SocialIcon 
                link={'https://emergencyplayer.itch.io/'} 
                img={'/logos/SocialLogos/ItchIORed.png'} 

              />

              <SocialIcon 
                link={'https://github.com/LaurenceTimothyMGarcia'} 
                img={'/logos/SocialLogos/GithubLogoPurple.png'} 
              />
            </VStack>
          </Flex>
        </Box>
      </Flex>
    </Box>

  )
}

function TopDisplay(topScreen) {
  // Depending on if the top display is a video or img changes the code

  if (topScreen.includes('youtube')) {
    return <Box h={'100%'} w={'100%'} dangerouslySetInnerHTML={{__html: topScreen}} />;
  } else {
    return <Image src={topScreen} w={'100%'} h={'100%'} objectFit={'cover'}/>;
  }
}

export default GameDevDSScreen;