import React from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';
import colors from "../../theme/Color";
import WorkExpItem from "../../components/WorkExpItem";
import WorkExpCanvas from './WorkExpCanvas';
import WorkExp from '../../data/WorkExpData';
import NickIsoRoom from '../../models/Nick_IsoRoom'
import IngramLogo from '../../models/IngramLogo'

// Work Exp Mobile version

function WorkExpMobile() {
  return(
    <Box
      mt={'1rem'}
      mb={'2rem'}
    >

      <Center><Heading color={colors.primary} mb={'1rem'} mt={'3rem'}>Work Experience</Heading></Center>

      {/* Ingram Micro */}
      <WorkExpItem 
        workExp={WorkExp[0]} 
        scene={<WorkExpCanvas item={<IngramLogo/>} pos={[-18, 1, 21]} rot={[-6, -35, -3]}/>}
        mobile={true}/>

      {/* Nickelodeon */}
      <WorkExpItem 
        workExp={WorkExp[1]} 
        scene={<WorkExpCanvas item={<NickIsoRoom/>} pos={[13, 12, 9]} rot={[-45, 45, 35]}/>} 
        mobile={true}/>

    </Box>
  )
}

export default WorkExpMobile;