import { Box, IconButton, Image, Link } from '@chakra-ui/react';
import React from 'react';

function SocialIcon( {link, img} ) {
  return (
    <Link href={link} isExternal>
      <Box display="flex" justifyContent="center" alignItems="center">
        <IconButton 
          borderRadius={'50%'}
          borderColor={''}
          w={'10%'} 
          variant={'outline'} 
          icon={<Image src={img} w={'100%'}/>}  
        />
      </Box>
      
    </Link>
  )
}

export default SocialIcon;