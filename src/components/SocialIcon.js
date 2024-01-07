import { Box, IconButton, Image, Link } from '@chakra-ui/react';
import React from 'react';

function SocialIcon( {link, img} ) {

  const buttonClick = () => {
    window.open(link, '_blank')
  }

  return (
    <IconButton 
      borderRadius={'50%'}
      borderColor={''}
      w={'10%'} 
      variant={'outline'} 
      icon={<Image src={img} w={'100%'} h={'100%'}/>}  
      onClick={buttonClick}
    />
  )
}

export default SocialIcon;