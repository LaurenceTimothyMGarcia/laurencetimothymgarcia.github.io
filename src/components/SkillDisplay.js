import React from 'react';
import { Box } from '@chakra-ui/react';
import SkillItemCard from './SkillItemCard';

function SkillDisplay() {
  return (
    <Box>
      <SkillItemCard title={'C#'} img={'/logos/CodingLogos/CSharpLogo.png'}/>
    </Box>
  )
}

export default SkillDisplay;