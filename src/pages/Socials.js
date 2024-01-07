import { Box, Text, VStack, Wrap, Heading, Center } from '@chakra-ui/react'
import React from 'react'
import SocialIcon from '../components/SocialIcon';
import colors from '../theme/Color';

function Socials({ footer=false }) {

  if (footer) {
    return(
      <Wrap>
        <Box>
          <SocialIcon 
            link={'https://github.com/LaurenceTimothyMGarcia'} 
            img={'/logos/SocialLogos/GithubLogoPurple.png'} 
          />
        </Box>

        <Box>
          <SocialIcon 
            link={'https://www.linkedin.com/in/laurencetimothymanalogarcia/'} 
            img={'/logos/SocialLogos/LinkedInBlue.png'} 
          />
        </Box>

        <Box>
          <SocialIcon 
            link={'mailto: laurencetimg@gmail.com'} 
            img={'/logos/SocialLogos/Email.png'} 
          />
        </Box>

        <Box>
          <SocialIcon 
            link={'https://emergencyplayer.itch.io/'} 
            img={'/logos/SocialLogos/ItchIORed.png'} 
          />
        </Box>

        <Box>
          <SocialIcon 
            link={'https://www.instagram.com/emergencyartist/'} 
            img={'/logos/SocialLogos/Instagram Black.png'} 
          />
        </Box>
      </Wrap>
    )
  }

  return(
    <Box>
      <Center mb={'2rem'}>
        <Heading color={colors.primary}>Connect with Me!</Heading>
      </Center>
      
      <Wrap justify={'space-evenly'} w={'100%'} h={'25vh'}>
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
            img={'/logos/SocialLogos/Instagram Black.png'} 
          />
          <Text>@EmergencyArtist</Text>
        </VStack>

      </Wrap>
    </Box>
    
  )
}

export default Socials;