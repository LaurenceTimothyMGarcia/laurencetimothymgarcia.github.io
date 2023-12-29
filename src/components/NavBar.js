import { Box, Flex, HStack, Heading, Spacer, StackDivider } from "@chakra-ui/layout";
import React from "react";

function NavBar() {
  return(
    <Box>
      <Flex
        minWidth='max-content'
        alignItems='center'>

        <Box>
          <Heading>Laurence Timothy M. Garcia</Heading>
        </Box>

        <Spacer/>

        <HStack
          divider={<StackDivider borderColor='gray.200'/>}>
          <Heading>About</Heading>
          <Heading>Portfolios</Heading>
          <Heading>Socials</Heading>
        </HStack>

      </Flex>
    </Box>
  )
}

export default NavBar