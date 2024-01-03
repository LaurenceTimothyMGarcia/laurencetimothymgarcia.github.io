import React from 'react';
import { Box, Center, Heading, SimpleGrid } from '@chakra-ui/react';
import SkillItemCard from './SkillItemCard';

function SkillDisplay({ sectionTitle, skillSet }) {
  return (
    <Box>
      <Center><Heading size={'md'} margin={'0.5rem'}>{sectionTitle}</Heading></Center>

      <SimpleGrid columns={4} spacing={'0.5rem'} justifyContent={'center'}>
        {skillSet.map((skill, index) => (
          <SkillItemCard key={index} title={skill.title} img={skill.img} />
        ))}
      </SimpleGrid>
      
    </Box>
  )
}

export default SkillDisplay;