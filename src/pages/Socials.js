import { Box, Text, VStack, Wrap, Heading, Center, HStack, Link } from '@chakra-ui/react'
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

// Text that links to the same place as its icon
function SocialLabel({ link, children }) {
  const isMail = link.startsWith('mailto:');
  return (
    <Link
      href={link}
      isExternal={!isMail}
      color={colors.text}
      _hover={{ color: colors.primary, textDecoration: 'underline' }}
    >
      <Text>{children}</Text>
    </Link>
  );
}

function Socials({ footer = false, mobile = false }) {

  if (mobile) {
    return (
      <Box pt={'2rem'} pb={'2rem'}>
        <Center mb={'1rem'}>
          <Heading color={colors.primary}>Hi, I'm Laurence!</Heading>
        </Center>

        <VStack align={'flex-start'} w={'100%'} h={'100%'}>
          {socials.map((s) => (
            <HStack key={s.link}>
              <SocialIcon link={s.link} img={s.img} />
              <SocialLabel link={s.link}>{s.label}</SocialLabel>
            </HStack>
          ))}
        </VStack>
      </Box>
    );
  }

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

  return (
    <Box pt={'2rem'} pb={'2rem'}>
      <Center mb={'2rem'}>
        <Heading color={colors.primary}>Hi, I'm Laurence!</Heading>
      </Center>

      <Wrap justify={'space-evenly'} w={'100%'} h={'100%'}>
        {socials.map((s) => (
          <VStack key={s.link}>
            <SocialIcon link={s.link} img={s.img} />
            <SocialLabel link={s.link}>{s.label}</SocialLabel>
          </VStack>
        ))}
      </Wrap>
    </Box>
  );
}

export default Socials;