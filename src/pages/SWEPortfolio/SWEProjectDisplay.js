import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
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
    </Box>
  )
}

export default SWEProjectDisplay;