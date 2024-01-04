import React from 'react';
import { Center, Heading, Image, Text, Flex, Link, Card, CardHeader, CardBody, CardFooter, Accordion, AccordionItem, AccordionButton, AccordionPanel } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import SkillItemCard from '../../components/SkillItemCard';

function SWEProjectCard( { title, icon, summary, description, link, skills } ) {

  // Title of project
  // Icon for project
  // Requires Summary of project
  // Description of project
  // tech used for project
  // Direct link to project
  // Screenshots / video

  return(
    // <Card align={'center'} size={'sm'} maxW={'30vw'}>
    <Card align={'center'} size={'sm'} maxW={'22rem'} minW={'22rem'}>
      <CardHeader align={'center'}>
        <Heading size={'lg'}>{title}</Heading>
        <Link href={link} isExternal>
          <Heading size={'md'}>{summary} <ExternalLinkIcon /></Heading>
        </Link>
        
      </CardHeader>
      
      <Image src={icon} boxSize={'10rem'} />

      <CardBody>
        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton>
              <Heading size={'md'}>Description</Heading>
            </AccordionButton>

            <AccordionPanel>
              <Text>{description}</Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </CardBody>

      {/* Do not use simple grid, find something else to center */}
      <CardFooter minW={'100%'}>
        <Flex minW={'100%'} spacing={'0.5rem'} justifyContent={'space-evenly'}>
          {skills.map((skill, index) => (
            <SkillItemCard key={index} title={skill.title} img={skill.img} />
          ))}
        </Flex>
      </CardFooter>
      
    </Card>
  )
}

export default SWEProjectCard;