import React from 'react';
import { Box, Flex, Heading, SimpleGrid, Wrap } from '@chakra-ui/react';
import SWEProjectCard from './SWEProjectCard';
import SWEProjects from '../../data/SWEProjects';

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
      <Wrap justify={'center'}>
        {SWEProjects.map((project, index) => (
          <SWEProjectCard
            key={index}
            title={project.title} 
            icon={project.icon}
            summary={project.summary} 
            description={project.description} 
            link={project.link} 
            skills={project.skills}
          />
        ))}
      </Wrap>

      {/* <SimpleGrid columns={3} spacing={'0.5rem'} justifyContent={'center'}>
        {SWEProjects.map((project, index) => (
          <SWEProjectCard
            key={index}
            title={project.title} 
            icon={project.icon}
            summary={project.summary} 
            description={project.description} 
            link={project.link} 
            skills={project.skills}
          />
        ))}
      </SimpleGrid> */}
      
    </Box>
  )
}

export default SWEProjectDisplay;