import React from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';
import colors from "../../theme/Color";
import WorkExpItem from "../../components/WorkExpItem";
import WorkExpCanvas from './WorkExpCanvas';
import ECExp from '../../data/ExtracurricularData';
import GDCLogo from '../../models/GDCLogo';

// Work Exp Mobile version

function ExtracurricularsMobile() {
  return(
    <Box
      mt={'1rem'}
      mb={'2rem'}
    >

      <Center><Heading color={colors.primary} mb={'1rem'} mt={'3rem'}>Extracurriculars</Heading></Center>

      <WorkExpItem 
        workExp={ECExp[0]} 
        scene={<WorkExpCanvas item={<GDCLogo/>} pos={[0, 0, 15]} rot={[0, 0, 0]}/>}
        mobile={true}/>
      <WorkExpItem 
        alt={true}
        workExp={ECExp[1]} 
        scene={<WorkExpCanvas item={<GDCLogo/>} pos={[0, 0, 15]} rot={[0, 0, 0]}/>}
        mobile={true}/>

    </Box>
  )
}

export default ExtracurricularsMobile;