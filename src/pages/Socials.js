import { Box, Text, VStack, Wrap, Heading, Center, HStack, Flex } from '@chakra-ui/react'
import React from 'react'
import SocialIcon from '../components/SocialIcon';
import colors from '../theme/Color';

function Socials({ footer=false, mobile=false }) {

  if (mobile) {
    return(
      <Box
        pb={'2rem'}
      >
        <Center mb={'1rem'}>
          <Heading color={colors.primary}>Connect with Me!</Heading>
        </Center>
        
        <VStack align={'flex-start'} w={'100%'} h={'100%'}>
          <HStack>
            <SocialIcon 
              link={'https://github.com/LaurenceTimothyMGarcia'} 
              img={'/logos/SocialLogos/GithubLogoPurple.png'} 
            />
            <Text>@LaurenceTimothyMGarcia</Text>
          </HStack>

          <HStack>
            <SocialIcon 
              link={'https://www.linkedin.com/in/laurencetimothymanalogarcia/'} 
              img={'/logos/SocialLogos/LinkedInBlue.png'} 
            />
            <Text>@LaurenceTimothyMGarcia</Text>
          </HStack>

          <HStack>
            <SocialIcon 
              link={'mailto: laurencetimg@gmail.com'} 
              img={'/logos/SocialLogos/Email.png'} 
            />
            <Text>laurencetimg@gmail.com</Text>
          </HStack>

          <HStack>
            <SocialIcon 
              link={'https://emergencyplayer.itch.io/'} 
              img={'/logos/SocialLogos/ItchIORed.png'} 
            />
            <Text>emergencyplayer.itch.io</Text>
          </HStack>

          <HStack>
            <SocialIcon 
              link={'https://www.instagram.com/emergencyartist/'} 
              img={'/logos/SocialLogos/InstagramWhite.png'} 
            />
            <Text>@EmergencyArtist</Text>
          </HStack>

        </VStack>
      </Box>
    )
  }

  if (footer) {
    return(
      <HStack justify={'right'} spacing={0}>
        <Box transform="scale(0.5)">
          <SocialIcon 
            link={'https://github.com/LaurenceTimothyMGarcia'} 
            img={'/logos/SocialLogos/GithubLogoPurple.png'} 
          />
        </Box>

        <Box  transform="scale(0.5)">
          <SocialIcon 
            link={'https://www.linkedin.com/in/laurencetimothymanalogarcia/'} 
            img={'/logos/SocialLogos/LinkedInBlue.png'} 
          />
        </Box>

        <Box transform="scale(0.5)">
          <SocialIcon 
            link={'mailto: laurencetimg@gmail.com'} 
            img={'/logos/SocialLogos/Email.png'} 
          />
        </Box>

        <Box transform="scale(0.5)">
          <SocialIcon 
            link={'https://emergencyplayer.itch.io/'} 
            img={'/logos/SocialLogos/ItchIORed.png'} 
          />
        </Box>

        <Box transform="scale(0.5)">
          <SocialIcon 
            link={'https://www.instagram.com/emergencyartist/'} 
            img={'/logos/SocialLogos/InstagramWhite.png'} 
          />
        </Box>
      </HStack>
    )
  }

  return(
    <Box
      pt={'2rem'}
      pb={'2rem'}
    >
      <Center mb={'2rem'}>
        <Heading color={colors.primary}>Connect with Me!</Heading>
      </Center>
      
      <Wrap justify={'space-evenly'} w={'100%'} h={'100%'}>
        <VStack>
          <SocialIcon 
            link={'https://github.com/LaurenceTimothyMGarcia'} 
            img={'/logos/SocialLogos/GithubLogoPurple.png'} 
          />
          <Text>@LaurenceTimothyMGarcia</Text>
        </VStack>

        <VStack>
          <SocialIcon 
            link={'https://www.linkedin.com/in/laurencetimothymanalogarcia/'} 
            img={'/logos/SocialLogos/LinkedInBlue.png'} 
          />
          <Text>@LaurenceTimothyMGarcia</Text>
        </VStack>

        <VStack>
          <SocialIcon 
            link={'mailto: laurencetimg@gmail.com'} 
            img={'/logos/SocialLogos/Email.png'} 
          />
          <Text>laurencetimg@gmail.com</Text>
        </VStack>

        <VStack>
          <SocialIcon 
            link={'https://emergencyplayer.itch.io/'} 
            img={'/logos/SocialLogos/ItchIORed.png'} 
          />
          <Text>emergencyplayer.itch.io</Text>
        </VStack>

        <VStack>
          <SocialIcon 
            link={'https://www.instagram.com/emergencyartist/'} 
            img={'/logos/SocialLogos/InstagramWhite.png'} 
          />
          <Text>@EmergencyArtist</Text>
        </VStack>

      </Wrap>
    </Box>
    
  )
}

export default Socials;