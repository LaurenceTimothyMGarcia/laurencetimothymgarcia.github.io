import React from 'react';
import { Heading, Image, VStack } from '@chakra-ui/react';

function SkillItemCard( { img, title }) {
  return (
    <VStack >
      <Image 
        src={img}
        boxSize={'2rem'}
      />
      <Heading size={'sm'} textAlign={'center'}>{title}</Heading>
    </VStack>
  )
}

export default SkillItemCard;