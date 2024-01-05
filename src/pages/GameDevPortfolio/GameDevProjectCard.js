import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';

// Look like a ds card

function GameDevProjectCard( { title, img, onSelect } ) {

  const cardColor = '#606060';

  return (
    <Box
      bg={cardColor} // DS cartridge color
      borderRadius="10px" // Rounded corners
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.5)" // Shadow effect
      width="80%" // Set width
      maxWidth="250px" // Set width
      height={''}
      maxHeight={'325px'}
      p="10px" // Padding
      position="relative" // Positioning for inner elements
      overflow="hidden" // Hide overflow content
      onClick={onSelect}
    >
      <Box
        bg="#FFFFFF" // White background for title
        textAlign="center"
        py="8px" // Padding for title
        borderBottom="2px solid black" // Border for top section
      >
        <Heading size="md" color="black">{title}</Heading>
      </Box>
      
      <Box
        position="relative" // Maintain positioning for the image
        mt="10px" // Margin top for the image
      >
        <Image
          src={img}
          width="100%" // Set image width to fill container
        />
        <Box
          position="absolute" // Position for the cartridge sticker
          bottom="-25px" // Adjust positioning from bottom
          left="-25px" // Adjust positioning from right
          bg={cardColor} // Cartridge sticker color
          width="50px" // Width of the sticker
          height="50px" // Height of the sticker
          transform="rotate(45deg)" // Rotate the sticker
          zIndex="1" // Ensure it's above the image
        />
      </Box>
    </Box>
  )
}

export default GameDevProjectCard;