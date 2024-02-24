import { Flex, Box, Heading, Spacer, UnorderedList, ListItem, Icon, Image, VStack } from "@chakra-ui/react";
import React from "react";
import SkillItemCard from './SkillItemCard';
import colors from "../theme/Color";

const WorkExpItem = ({ alt=false, workExp, scene, mobile=false }) => {

  let display = DesktopVer(workExp, scene, alt)

  if (mobile) {
    display = MobileVer(workExp, scene, alt)
  }

  console.log(workExp);

  return (display)
  

  // if (alt) {
  //   return(
  //     <Flex
  //       gap={"1rem"}
  //     >
  //       <Box
  //         // bg='red'
  //         flex={'3'}
  //       >
  //         <Heading>{title}</Heading>
  //       </Box>

  //       <Box
  //         // bg='red'
  //         flex={'2'}
  //         aspectRatio={1}
  //       >
  //         {scene}
  //       </Box>
  
  //     </Flex>
  //   )
  // } else {
  //   return(
  //     <Flex
  //       gap={"1rem"}
  //     >
  //       <Box
  //         // bg='red'
  //         flex={'2'}
  //         aspectRatio={1}
  //       >
  //         {scene}
  //       </Box>
  
  //       <Box
  //         // bg='red'
  //         flex={'3'}
  //       >
  //         <Heading>{title}</Heading>
  //       </Box>
  //     </Flex>
  //   )
  // }

  
}

function DesktopVer( workExp, scene, alt ) {

  const title = workExp.title
  const company = workExp.company
  const startDate = workExp.startDate
  const endDate = workExp.endDate
  const skills = workExp.skills
  const jobDesc = workExp.jobDesc

  let itemDisplay = DesktopNoAlt(workExp, scene);

  if (alt) {
    itemDisplay = DesktopAlt(workExp, scene);
  }

  return(
    <Flex
      gap={"1rem"}
      mt={'1rem'}
      mb={'1rem'}
    >
      {itemDisplay}
    </Flex>
  )
}

function DesktopNoAlt( workExp, scene ) {
  
  const title = workExp.title
  const company = workExp.company
  const startDate = workExp.startDate
  const endDate = workExp.endDate
  const skills = workExp.skills
  const jobDesc = workExp.jobDesc

  return (
    <Flex
      gap={"1rem"}
      mt={'1rem'}
      mb={'1rem'}
    >
      {/* Canvas */}
      <Box
        // bg='red'
        flex={'2'}
        // aspectRatio={1}
        border={'1px solid white'}
      >
        {scene}
      </Box>

      {/* General information */}
      <Box
        // bg='red'
        flex={'3'}
      >
        <Heading size={'md'} color={colors.accent}>{startDate} - {endDate}</Heading>
        <Heading size={'xl'} color={colors.secondary}>{title}</Heading>
        <Heading size={'lg'} color={colors.secondary}>{company}</Heading>

        {/* Skills */}
        <Flex w={'100%'} justifyContent={'space-evenly'} padding={'0.5rem'}>
          {skills.map((skill, index) => (
            <SkillItemCard key={index} title={skill.title} img={skill.img} />
          ))}
        </Flex>

        {/* Job Description */}
        <Box p={'0.5rem'}>
          <UnorderedList>
            {jobDesc.map((task, index) => (
              <ListItem key={index}>{task}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>
    </Flex>
  )
}

function DesktopAlt( workExp, scene ) {
  
  const title = workExp.title
  const company = workExp.company
  const startDate = workExp.startDate
  const endDate = workExp.endDate
  const skills = workExp.skills
  const jobDesc = workExp.jobDesc

  return (
    <Flex
      gap={"1rem"}
      mt={'1rem'}
      mb={'1rem'}
    >
      {/* General information */}
      <Box
        // bg='red'
        flex={'3'}
      >
        <Heading size={'md'} color={colors.accent}>{startDate} - {endDate}</Heading>
        <Heading size={'xl'} color={colors.secondary}>{title}</Heading>
        <Heading size={'lg'} color={colors.secondary}>{company}</Heading>

        {/* Skills */}
        <Flex w={'100%'} justifyContent={'space-evenly'} padding={'0.5rem'}>
          {skills.map((skill, index) => (
            <SkillItemCard key={index} title={skill.title} img={skill.img} />
          ))}
        </Flex>

        {/* Job Description */}
        <Box p={'0.5rem'}>
          <UnorderedList>
            {jobDesc.map((task, index) => (
              <ListItem key={index}>{task}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>

      {/* Canvas */}
      <Box
        // bg='red'
        flex={'2'}
        // aspectRatio={1}
        border={'1px solid white'}
      >
        {scene}
      </Box>
    </Flex>
  )
}

function MobileVer( workExp, scene, alt ) {

  const title = workExp.title
  const company = workExp.company
  const startDate = workExp.startDate
  const endDate = workExp.endDate
  const skills = workExp.skills
  const jobDesc = workExp.jobDesc

  return(
    <VStack
      // gap={"1rem"}
      mt={'1rem'}
      mb={'2rem'}
    >
      {/* Canvas */}
      <Box
        // bg='red'
        // aspectRatio={1}
        border={'1px solid white'}

      >
        {scene}
      </Box>

      {/* General information */}
      <Box
        // bg='red'
      >
        <Heading size={'sm'} color={colors.accent}>{startDate} - {endDate}</Heading>
        <Heading size={'lg'} color={colors.secondary}>{title}</Heading>
        <Heading size={'md'} color={colors.secondary}>{company}</Heading>

        {/* Skills */}
        <Flex w={'100%'} justifyContent={'space-evenly'} padding={'0.5rem'}>
          {skills.map((skill, index) => (
            <SkillItemCard key={index} title={skill.title} img={skill.img} />
          ))}
        </Flex>

        {/* Job Description */}
        <Box p={'0.5rem'}>
          <UnorderedList>
            {jobDesc.map((task, index) => (
              <ListItem key={index}>{task}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Box>
    </VStack>
  )
}

export default WorkExpItem;