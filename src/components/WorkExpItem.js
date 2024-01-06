import { Flex, Box, Heading, Spacer } from "@chakra-ui/react";
import React from "react";

const WorkExpItem = ({ alt=false, workExp, scene }) => {

  const title = workExp.title
  const company = workExp.company
  const location = workExp.location
  const startDate = workExp.startDate
  const endDate = workExp.endDate
  const skills = workExp.skills
  const jobDesc = workExp.jobDesc

  if (alt) {
    return(
      <Flex
        gap={"1rem"}
      >
        <Box
          // bg='red'
          flex={'3'}
        >
          <Heading>{title}</Heading>
        </Box>

        <Box
          // bg='red'
          flex={'2'}
          aspectRatio={1}
        >
          {scene}
        </Box>
  
      </Flex>
    )
  } else {
    return(
      <Flex
        gap={"1rem"}
      >
        <Box
          // bg='red'
          flex={'2'}
          aspectRatio={1}
        >
          {scene}
        </Box>
  
        <Box
          // bg='red'
          flex={'3'}
        >
          <Heading>{title}</Heading>
        </Box>
      </Flex>
    )
  }

  
}

export default WorkExpItem;