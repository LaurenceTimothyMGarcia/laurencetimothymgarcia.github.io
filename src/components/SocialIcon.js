import { Box, IconButton, Image, Link } from '@chakra-ui/react';
import React from 'react';

function SocialIcon( {link, img} ) {
  return (
    <Box>
      <Link href={link} isExternal>
        <IconButton 
          borderRadius={'50%'}
          borderColor={''}
          w={'10%'} 
          h={'100%'} 
          variant={'outline'} 
          icon={<Image src={img} w={'100%'}/>}  
        />
      </Link>
    </Box>
  )
}

export default SocialIcon;