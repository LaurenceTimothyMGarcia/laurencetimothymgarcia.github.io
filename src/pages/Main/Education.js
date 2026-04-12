import React from 'react';
import { Box, Center, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import colors from '../../theme/Color';

// Intro section

function IntroSection() {
  return (
    <Box>
      <Center><Heading color={colors.secondary}>Education</Heading></Center>
      <Center><Heading size={'md'}>Computer Science B.S</Heading></Center>
      <Center><Heading size={'md'}>Cal Poly Pomona</Heading></Center>

      <Center>
        <UnorderedList>
          <ListItem>Summa Cum Laude</ListItem>
          <ListItem>Dean's & President's List: All Semesters</ListItem>
          <ListItem>CPP Game Development Club</ListItem>
          <UnorderedList>
            <ListItem>President</ListItem>
            <ListItem>Secretary</ListItem>
          </UnorderedList>
        </UnorderedList>
      </Center>
    </Box>
  )
}

export default IntroSection;