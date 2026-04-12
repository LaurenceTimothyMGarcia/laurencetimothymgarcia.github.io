import React from 'react';
import { Box, Center, Heading, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import colors from '../../theme/Color';

// Intro section

function IntroSection() {
  return (
    <Box>
      <Center><Heading color={colors.secondary}>Introduction</Heading></Center>
      {/* <Text>{Intro}</Text> */}
      <Text>Hi there! I am Laurence Garcia, an Associate Software Engineer at Ingram Micro.</Text>
      <UnorderedList>

        <ListItem>
          I am a software engineer who enjoys building practical systems, creative tools, and proudcts that enables teams to succeed in their goals.
        </ListItem>

        <ListItem>
          I graduated from Cal Poly Pomona with my Bachelors in Computer Science.
        </ListItem>

        <ListItem>
          I am currently at Ingram Micro, where I utilize my technical skills develop tools and 
          offer technical support to assist associates of various teams at the company.
        </ListItem>

        <ListItem>
          On my freetime, I work as a marketing director, software engineer, and level designer for my game dev studio, PIE Dev Studios. We are currently working on 
          a multiplayer parkour racing game called Absolute Momentum, available to wishlist on Steam now!
        </ListItem>

        <ListItem>
          Additionally, I am an indie animator on YouTube where I utilize my custom Python Blender tools to assist my animation process such as lip syncing and fixing shaders.
        </ListItem>

        <ListItem>
          I interned at Nickelodeon Animation Studios, where I developed 
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