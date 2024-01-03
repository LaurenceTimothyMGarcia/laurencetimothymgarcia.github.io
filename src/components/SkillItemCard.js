import React from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';

function SkillItemCard( { img, title }) {
  return (
    <Box >
      <Image 
        src={img}
        boxSize={'2rem'}
      />
      <Heading size={'md'}>{title}</Heading>
    </Box>
  )
}

export default SkillItemCard;