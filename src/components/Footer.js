import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/layout"
import Socials from "../pages/Socials";
import colors from "../theme/Color";

function Footer() {
  return(
    <Box
      bg={colors.bgSecondary}
      p={'1%'}
    >
      <Flex
        minWidth='max-content'
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