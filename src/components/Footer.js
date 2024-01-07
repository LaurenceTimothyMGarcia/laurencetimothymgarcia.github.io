import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/layout"
import Socials from "../pages/Socials";

function Footer() {
  return(
    <Box>
      <Flex
        minWidth='max-content'
        minHeight='4vh'
        alignItems='center'
        justify={'space-between'}>

        <Box>
          Laurence Timothy M. Garcia 2024
        </Box>

        <Socials footer={true}/>
      </Flex>
    </Box>
  )
}

export default Footer