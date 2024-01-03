import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import SWEProjectCard from './SWEProjectCard';

function SWEProjectDisplay() {

  const tempDict = [
    {
      title: 'C#',
      img: '/logos/CodingLogos/CSharpLogo.png'
    },
    {
      title: 'Python',
      img: '/logos/CodingLogos/Python_logo.png'
    },
  ]

  return(
    <Box>
      <SWEProjectCard 
        title={'VGBacklogs.com'} 
        icon={'/logos/CodingLogos/vgbl_logo.png'}
        summary={'Full Stack Web Social Platform'} 
        description={'A full stack social platform that allows gamers to build and share their video game catalogs across multiple platforms with other users. Leverages React.js and MUI components for a responsive front-end, with a C# DotNET backend connected to a MongoDB database, deployed through AWS servers. Implemented the user profile system, including account authentication, following users, & saving games to profiles. The system stays up to date with the latest games across all platforms utilizing RAWG.io API. '} 
        link={'http://www.vgbacklogs.com/'} 
        skills={tempDict}
      />
    </Box>
  )
}

export default SWEProjectDisplay;