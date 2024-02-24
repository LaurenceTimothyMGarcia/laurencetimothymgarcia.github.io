import { Box, Heading, Center } from '@chakra-ui/react'
import React from 'react'
import ECExp from '../../data/ExtracurricularData';
import WorkExpItem from "../../components/WorkExpItem";
import WorkExpCanvas from './WorkExpCanvas';
import colors from "../../theme/Color";
import GDCLogo from '../../models/GDCLogo';

function ExtracurricularsDesktop() {
  return(
    <Box>
      <Center><Heading color={colors.primary} mb={'1rem'} mt={'3rem'}>Extracurriculars</Heading></Center>

      <WorkExpItem 
        workExp={ECExp[0]} 
        scene={<WorkExpCanvas item={<GDCLogo/>} pos={[0, 0, 15]} rot={[0, 0, 0]}/>}/>
      <WorkExpItem alt={true} 
        workExp={ECExp[1]} 
        scene={<WorkExpCanvas item={<GDCLogo/>} pos={[0, 0, 15]} rot={[0, 0, 0]}/>}/>
    </Box>
  )
}

export default ExtracurricularsDesktop;