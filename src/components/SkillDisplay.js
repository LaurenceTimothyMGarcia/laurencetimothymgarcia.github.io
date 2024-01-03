import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import SkillItemCard from './SkillItemCard';

function SkillDisplay({ skillSet }) {
  return (
    <Box>
      <Heading size={'md'}>Programming Languages</Heading>
      {skillSet.map((skill, index) => (
        <SkillItemCard key={index} title={skill.title} img={skill.img} />
      ))}
    </Box>
  )
}

export default SkillDisplay;