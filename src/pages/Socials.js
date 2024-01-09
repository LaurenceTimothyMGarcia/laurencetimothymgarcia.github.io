import { Box, Text, VStack, Wrap, Heading, Center, HStack } from '@chakra-ui/react'
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
        
        <Wrap justify={'left'} w={'100%'} h={'100%'}>
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

        </Wrap>
      </Box>
    )
  }

  if (footer) {
    return(
      <Wrap justify={'center'}>
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
            img={'/logos/SocialLogos/InstagramWhite.png'} 
          />
        </Box>
      </Wrap>
    )
  }

  return(
    <Box
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