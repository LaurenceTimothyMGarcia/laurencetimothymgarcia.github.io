import { Flex, Box, Heading, Spacer } from "@chakra-ui/react";
import React from "react";

const WorkExpItem = ({ alt=false, workTitle, scene }) => {

  if (alt) {
    return(
      <Flex
        gap={"1rem"}
      >
        <Box
          // bg='red'
          flex={'3'}
        >
          <Heading>{workTitle}</Heading>
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
          <Heading>{workTitle}</Heading>
        </Box>
      </Flex>
    )
  }

  
}

export default WorkExpItem;