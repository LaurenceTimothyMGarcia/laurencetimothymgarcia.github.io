import { Flex, Box, Heading, Spacer, UnorderedList, ListItem, Icon, Image } from "@chakra-ui/react";
import React from "react";
import SkillItemCard from './SkillItemCard';

const WorkExpItem = ({ alt=false, workExp, scene }) => {

  const title = workExp.title
  const company = workExp.company
  const startDate = workExp.startDate
  const endDate = workExp.endDate
  const skills = workExp.skills
  const jobDesc = workExp.jobDesc

  return(
    <Flex
      gap={"1rem"}
      mt={'1rem'}
      mb={'1rem'}
    >
      {/* Canvas */}
      <Box
        // bg='red'
        flex={'2'}
        aspectRatio={1}
      >
        {scene}
      </Box>

      {/* General information */}
      <Box
        // bg='red'
        flex={'3'}
      >
        <Heading size={'md'}>{startDate} - {endDate}</Heading>
        <Heading size={'xl'}>{title}</Heading>
        <Heading size={'lg'}>{company}</Heading>

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

export default WorkExpItem;