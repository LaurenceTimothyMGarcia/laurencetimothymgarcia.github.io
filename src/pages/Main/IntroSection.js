import React from 'react';
import {
  Box, Center, Heading, Text, UnorderedList, ListItem, SimpleGrid, VStack
} from '@chakra-ui/react';
import colors from '../../theme/Color';

const stats = [
  { value: '600%', label: 'faster ticket response from an escalation automation' },
  { value: '50%', label: 'less setup time with a ShotGrid tool at Nickelodeon' },
  { value: '1hr → 10min', label: 'lip-sync time with my Blender add-on' },
  { value: '5,000', label: 'developers using my React component library' },
];

function IntroSection() {
  return (
    <Box>
      <Center>
        <Heading color={colors.secondary}>Introduction</Heading>
      </Center>

      <Text mt={3}>
        Hi there! I'm Laurence Garcia, an Associate Software Engineer at Ingram Micro
        who builds <b>pipeline and automation tools</b> that help teams move faster.
      </Text>

      {/* Quick-glance results */}
      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={3} my={5}>
        {stats.map((s) => (
          <VStack
            key={s.value}
            spacing={1}
            p={3}
            align="center"
            textAlign="center"
            bg={colors.bgSecondary}
            border="2px solid"
            borderColor={colors.text}
            borderRadius="md"
          >
            <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" color={colors.primary}>
              {s.value}
            </Text>
            <Text fontSize="xs">{s.label}</Text>
          </VStack>
        ))}
      </SimpleGrid>

      <UnorderedList spacing={2}>
        <ListItem>
          <b>Pipeline tooling:</b> Python and web tools for ShotGrid, Deadline, and Blender,
          plus engineering workflow automation at Ingram Micro.
        </ListItem>

        <ListItem>
          <b>Animation industry:</b> Interned at Nickelodeon Animation Studio building tools
          that sped up artist workflows.
        </ListItem>

        <ListItem>
          <b>Game dev:</b> Marketing Director and Software Engineer at PIE Dev Studios,
          creators of <i>Solar Sweets</i> and the upcoming <i>Absolute Momentum</i>.
        </ListItem>

        <ListItem>
          <b>Emergency Player:</b> Indie 3D animator on YouTube with 100+ videos and
          300,000+ views, powered by my custom Python Blender tools.
        </ListItem>
      </UnorderedList>

      <Text mt={3} fontSize="sm" color={colors.contrast}>
        B.S. Computer Science, Cal Poly Pomona (Summa Cum Laude)
      </Text>
    </Box>
  );
}

export default IntroSection;