import { Box, Flex, HStack, Heading, Spacer, StackDivider, Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return(
    <Box
      pr={'2%'}
      pl={'2%'}
    >
      <Flex
        minWidth='max-content'
        minHeight='10vh'
        alignItems='center'>

        <Box>
        <Link to='/'><Heading>Laurence Timothy M. Garcia</Heading></Link>
        </Box>

        <Spacer/>

        <HStack
          divider={<StackDivider borderColor='gray.200'/>}>
          <Link to='/'><Heading>About</Heading></Link>

          <Menu isLazy>
            <MenuButton><Heading>Portfolios</Heading></MenuButton>
            <MenuList>
              <MenuItem><Link to='/swe-portfolio'>Software Engineering Portfolio</Link></MenuItem>
              <MenuItem><Link to='/gamedev-portfolio'>Game Development Portfolio</Link></MenuItem>
            </MenuList>
          </Menu>
          
          <Button><Heading>Socials</Heading></Button>
        </HStack>

      </Flex>
    </Box>
  )
}

export default NavBar