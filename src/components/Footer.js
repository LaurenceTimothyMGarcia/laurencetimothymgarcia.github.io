import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/layout"

function Footer() {
  return(
    <Box>
      <Flex
        minWidth='max-content'
        minHeight='5vh'
        alignItems='center'>

        <Box>
          <Heading>Laurence Timothy M. Garcia</Heading>
        </Box>

      </Flex>
    </Box>
  )
}

export default Footer