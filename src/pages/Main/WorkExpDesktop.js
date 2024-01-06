import { Box, Heading, Center } from "@chakra-ui/react";
import React from "react";
import WorkExpItem from "../../components/WorkExpItem";
import WorkExpCanvas from './WorkExpCanvas';
import WorkExp from '../../data/WorkExpData';

function WorkExpDesktop() {
  return(
    <Box>
      <Center><Heading>Work Experience</Heading></Center>

      <WorkExpItem workExp={WorkExp[0]} scene={<WorkExpCanvas/>}/>
    </Box>
    
  )
}

export default WorkExpDesktop