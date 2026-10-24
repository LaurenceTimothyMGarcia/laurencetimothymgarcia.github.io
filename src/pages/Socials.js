import { Box, Wrap, WrapItem, Heading, Center, HStack } from '@chakra-ui/react'
import React from 'react'
import SocialIcon from '../components/SocialIcon';
import colors from '../theme/Color';

const socials = [
  {
    label: '@EmergencyPlayer',
    link: 'https://www.instagram.com/emergencyplayer/',
    img: '/logos/SocialLogos/InstagramBlack.png',
    footer: true,
  },
  {
    label: '@EmergencyPlayer',
    link: 'https://www.youtube.com/@EmergencyPlayer',
    img: '/logos/SocialLogos/YouTubeLogo.png',
    footer: true,
  },
  {
    label: '@LaurenceTimothyMGarcia',
    link: 'https://github.com/LaurenceTimothyMGarcia',
    img: '/logos/SocialLogos/GithubLogoPurple.png',
    footer: true,
  },
  {
    label: '@LaurenceTimothyMGarcia',
    link: 'https://www.linkedin.com/in/laurencetimothymanalogarcia/',
    img: '/logos/SocialLogos/LinkedInBlue.png',
    footer: true,
  },
  {
    label: 'laurencetimg@gmail.com',
    link: 'mailto:laurencetimg@gmail.com',
    img: '/logos/SocialLogos/Email.png',
    footer: true,
  },
  {
    label: 'emergencyplayer.itch.io',
    link: 'https://emergencyplayer.itch.io/',
    img: '/logos/SocialLogos/ItchIORed.png',
    footer: true,
  }
];

function Socials({ footer = false, mobile = false }) {

  if (footer) {
    return (
      <HStack justify={'right'} spacing={0}>
        {socials.filter((s) => s.footer).map((s) => (
          <Box key={s.link} transform="scale(0.5)">
            <SocialIcon link={s.link} img={s.img} />
          </Box>
        ))}
      </HStack>
    );
  }

  // Desktop + mobile share the same centered icon row
  return (
    <Box pt={'2rem'} pb={'2rem'}>
      <Center mb={mobile ? '1rem' : '2rem'}>
        <Heading color={colors.primary}>Hi, I'm Laurence!</Heading>
      </Center>

      <Wrap justify={'center'} spacing={mobile ? '1rem' : '2rem'} w={'100%'}>
        {socials.map((s) => (
          <WrapItem key={s.link}>
            <SocialIcon link={s.link} img={s.img} />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
}

export default Socials;