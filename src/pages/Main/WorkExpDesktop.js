import { Box, Heading, Center } from "@chakra-ui/react";
import React from "react";
import WorkExpItem from "../../components/WorkExpItem";
import WorkExpCanvas from './WorkExpCanvas';

function WorkExpDesktop() {
  return(
    <Box>
      <Center><Heading>Work Experience</Heading></Center>

      <WorkExpItem workTitle={'Nickelodeon'} scene={<WorkExpCanvas/>}/>
      <WorkExpItem alt={true} workTitle={'POMONA'} scene={<WorkExpCanvas/>}/>
    </Box>
    
  )
}

export default WorkExpDesktop