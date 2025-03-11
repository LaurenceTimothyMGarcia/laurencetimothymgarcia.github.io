import { Box, Heading, Center } from "@chakra-ui/react";
import React from "react";
import WorkExpItem from "../../components/WorkExpItem";
import WorkExpCanvas from './WorkExpCanvas';
import WorkExp from '../../data/WorkExpData';
import colors from "../../theme/Color";
import NickIsoRoom from '../../models/Nick_IsoRoom'
import IngramMicroLogo from '../../models/IngramMicroLogo'

function WorkExpDesktop() {
  return(
    <Box>
      <Center><Heading color={colors.primary} mb={'1rem'} mt={'3rem'}>Work Experience</Heading></Center>
      
      {/* Ingram Micro */}
      <WorkExpItem 
        workExp={WorkExp[0]} 
        scene={<WorkExpCanvas item={<IngramMicroLogo/>} pos={[-18, 1, 21]} rot={[-6, -35, -3]}/>}/>

      {/* Nickelodeon */}
      <WorkExpItem 
        workExp={WorkExp[1]} 
        scene={<WorkExpCanvas item={<NickIsoRoom/>} pos={[13, 12, 9]} rot={[-45, 45, 35]}/>}
        alt={true}/>
    </Box>
    
  )
}

export default WorkExpDesktop