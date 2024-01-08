import React from 'react';
import { Box, Center, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import colors from '../../theme/Color';

// Intro section

function IntroSection() {
  return (
    <Box>
      <Center><Heading color={colors.secondary}>Introduction</Heading></Center>
      {/* <Text>{Intro}</Text> */}
      <Text>Hi there! I am Laurence Garcia, a newly graduated Computer Science major from Cal Poly Pomona</Text>
      <UnorderedList>

        <ListItem>
          I am on my journey to refine my skill set in the fields of Software Engineering, Game Development, and Technical Art.
        </ListItem>

        <ListItem>
          I recently interned at Nickelodeon Animation Studios, where I developed 
          production-enhancing tools that help assist the various teams. 
        </ListItem>

        <ListItem>
          I was the President of the CPP Game Development Club where I brought together 
          a community of students who are passionate about game development, hosting 
          guest speakers and club projects.
        </ListItem>
      </UnorderedList>
    </Box>
  )
}

export default IntroSection;