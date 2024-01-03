import React from 'react';
import { Box, Heading, Image, Text, Flex, Link, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
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
    <Card align={'center'}>
      <CardHeader>
        <Heading size={'lg'}>{title}</Heading>
        <Link href={link} isExternal>
          <ExternalLinkIcon />
        </Link>
      </CardHeader>
      
      <CardBody>
        <Image src={icon} boxSize={'20rem'} />
        <Text>{summary}</Text>
        <Text>{description}</Text>
      </CardBody>

      <CardFooter>
        <Flex>
          {skills.map((skill, index) => (
            <SkillItemCard key={index} title={skill.title} img={skill.img} />
          ))}
        </Flex>
      </CardFooter>
      
    </Card>
  )
}

export default SWEProjectCard;