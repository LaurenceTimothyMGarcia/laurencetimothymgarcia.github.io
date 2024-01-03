import React from 'react';
import { Box, Heading, Image, Text, Flex, IconButton, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import SkillItemCard from '../../components/SkillItemCard';

function SWEProjectCard( { title, icon, summary, description, link, skills } ) {

  // Title of project
  // Icon for project
  // Requires Summary of project
  // Description of project
  // tech used for project
  // Direct link to project
  // Screenshots / video

  return(
    <Box>
      <Heading>{title}</Heading>

      <Image src={icon} boxSize={'20rem'} />

      <Link href={link} isExternal>
        <ExternalLinkIcon />
      </Link>
      
      <Text>{summary}</Text>
      <Text>{description}</Text>

      <Flex>
        {skills.map((skill, index) => (
          <SkillItemCard key={index} title={skill.title} img={skill.img} />
        ))}
      </Flex>
    </Box>
  )
}

export default SWEProjectCard;