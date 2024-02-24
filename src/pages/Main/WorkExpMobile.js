import React from 'react';
import { Box, Center, Heading } from '@chakra-ui/react';
import colors from "../../theme/Color";
import WorkExpItem from "../../components/WorkExpItem";
import WorkExpCanvas from './WorkExpCanvas';
import WorkExp from '../../data/WorkExpData';
import NickIsoRoom from '../../models/Nick_IsoRoom'

// Work Exp Mobile version

function WorkExpMobile() {
  return(
    <Box
      mt={'1rem'}
      mb={'2rem'}
    >

      <Center><Heading color={colors.primary} mb={'1rem'} mt={'3rem'}>Work Experience</Heading></Center>

      <WorkExpItem 
        workExp={WorkExp[0]} 
        scene={<WorkExpCanvas item={<NickIsoRoom/>} pos={[13, 12, 9]} rot={[-45, 45, 35]}/>} 
        mobile={true}/>

    </Box>
  )
}

export default WorkExpMobile;