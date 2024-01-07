import { Box, Heading, Center } from "@chakra-ui/react";
import React from "react";
import WorkExpItem from "../../components/WorkExpItem";
import WorkExpCanvas from './WorkExpCanvas';
import WorkExp from '../../data/WorkExpData';
import colors from "../../theme/Color";

function WorkExpDesktop() {
  return(
    <Box>
      <Center><Heading color={colors.primary} mb={'1rem'} mt={'3rem'}>Work Experience</Heading></Center>

      <WorkExpItem workExp={WorkExp[0]} scene={<WorkExpCanvas/>}/>
    </Box>
    
  )
}

export default WorkExpDesktop