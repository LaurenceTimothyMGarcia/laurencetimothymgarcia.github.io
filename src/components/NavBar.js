import { Box, Flex, HStack, Heading, Spacer, StackDivider, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import colors from "../theme/Color";
import { HamburgerIcon } from "@chakra-ui/icons";

function NavBar( {mobile=false} ) {

  let navDisplay = Desktop()

  // navDisplay = Mobile()
  if (mobile) {
    navDisplay = Mobile()
  }

  return(
    <Box
      bg={colors.bgSecondary}
      p={'2%'}
      // w={'100vw'}
      // position={'fixed'}
      // top={0}
    >
      <Flex
        minWidth='max-content'
        alignItems='center'>

        <Box>
        <Link to='/'><Heading size={'md'} color={colors.primary}>Laurence Timothy M. Garcia</Heading></Link>
        </Box>

        <Spacer/>

        {navDisplay}

      </Flex>
    </Box>
  )
}

function Desktop() {
  return(
    <HStack
      divider={<StackDivider borderColor='gray.200'/>}>
      <Link to='/'><Heading size={'md'} color={colors.primary}>About</Heading></Link>

      <Menu isLazy>
        <MenuButton><Heading size={'md'} color={colors.primary}>Portfolios</Heading></MenuButton>
        <MenuList>
          <MenuItem color={colors.secondary}><Link to='/swe-portfolio'>Software Engineering Portfolio</Link></MenuItem>
          <MenuItem color={colors.secondary}><Link to='/gamedev-portfolio'>Game Development Portfolio</Link></MenuItem>
        </MenuList>
      </Menu>

      <Link to='https://www.laurencetimg.com/LaurenceGarciaResumeSWEPortfolio.pdf'><Heading size={'md'} color={colors.primary}>Resume</Heading></Link>

      {/* <Menu isLazy>
        <MenuButton><Heading size={'md'} color={colors.primary}>Resume</Heading></MenuButton>
        <MenuList>
          <MenuItem color={colors.secondary}><a href='https://www.laurencetimg.com/LaurenceGarciaResumeSWEPortfolio.pdf' target="_blank">Software Engineering Resume</a></MenuItem>
          <MenuItem color={colors.secondary}><a href='https://www.laurencetimg.com/LaurenceGarciaResumeGameDev.pdf' target="_blank">Game Development Resume</a></MenuItem>
        </MenuList>
      </Menu> */}
      
      {/* <Button><Heading>Socials</Heading></Button> */}
    </HStack>
  )
  
}

function Mobile() {
  return (
    <Menu>
      <MenuButton 
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
        color={colors.text}
      />
      <MenuList>
        <MenuItem color={colors.secondary}><Link to='/'>About</Link></MenuItem>
        <MenuItem color={colors.secondary}><Link to='/swe-portfolio'>Software Engineering Portfolio</Link></MenuItem>
        <MenuItem color={colors.secondary}><Link to='/gamedev-portfolio'>Game Development Portfolio</Link></MenuItem>

        <MenuList>
          <MenuItem color={colors.secondary}><a href='https://www.laurencetimg.com/LaurenceGarciaResumeSWE.pdf' target="_blank">Software Engineering Resume</a></MenuItem>
          <MenuItem color={colors.secondary}><a href='https://www.laurencetimg.com/LaurenceGarciaResumeGameDev.pdf' target="_blank">Game Development Resume</a></MenuItem>
        </MenuList>
        
      </MenuList>
    </Menu>
  )
}

export default NavBar