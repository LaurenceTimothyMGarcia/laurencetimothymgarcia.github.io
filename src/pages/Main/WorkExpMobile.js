import React from 'react';
import {
  Box, Center, Heading, Text, Flex, VStack, UnorderedList, ListItem,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
} from '@chakra-ui/react';
import colors from '../../theme/Color';
import SkillItemCard from '../../components/SkillItemCard';
import WorkExpCanvas from './WorkExpCanvas';
import WorkExp from '../../data/WorkExpData';
import NickIsoRoom from '../../models/Nick_IsoRoom';
import IngramMicroLogo from '../../models/IngramMicroLogo';
import PieDevLogo from '../../models/PieDevLogo';

// Pair each job with its 3D scene settings
const jobs = [
  { data: WorkExp[0], model: <IngramMicroLogo />, pos: [-18, 1, 21], rot: [-6, -35, -3] },
  { data: WorkExp[1], model: <PieDevLogo />,      pos: [-10, 1, 30], rot: [-6, -35, -3] },
  { data: WorkExp[2], model: <NickIsoRoom />,     pos: [13, 12, 9],  rot: [-45, 45, 35] },
];

function WorkExpMobile() {
  return (
    <Box mt={'1rem'} mb={'2rem'} px={2}>
      <Center>
        <Heading color={colors.primary} mb={'1rem'} mt={'3rem'}>
          Work Experience
        </Heading>
      </Center>

      <Accordion allowToggle>
        {jobs.map(({ data, model, pos, rot }) => (
          <AccordionItem
            key={data.company}
            border="2px solid"
            borderColor={colors.text}
            borderRadius="md"
            mb={3}
            overflow="hidden"
            bg={colors.bg}
          >
            {({ isExpanded }) => (
              <>
                {/* Always-visible header: company, title, dates */}
                <AccordionButton
                  bg={isExpanded ? colors.primary : colors.bgSecondary}
                  color={colors.text}
                  _hover={{ bg: isExpanded ? colors.primary : colors.bgSecondary }}
                  px={4}
                  py={3}
                >
                  <Box flex="1" textAlign="left">
                    <Heading size="sm">{data.company}</Heading>
                    <Text fontSize="sm" fontWeight="semibold">{data.title}</Text>
                    <Text fontSize="xs" opacity={0.75}>
                      {data.startDate} – {data.endDate}
                    </Text>
                  </Box>
                  <AccordionIcon boxSize={6} />
                </AccordionButton>

                {/* Details: only mount the 3D scene when open */}
                <AccordionPanel px={4} py={4}>
                  <VStack align="stretch" spacing={4}>
                    {isExpanded && (
                      <Box
                        border="2px solid"
                        borderColor={colors.contrast}
                        borderRadius="md"
                        overflow="hidden"
                      >
                        <WorkExpCanvas item={model} pos={pos} rot={rot} />
                      </Box>
                    )}

                    <Flex wrap="wrap" justify="center" gap="0.5rem">
                      {data.skills.map((skill) => (
                        <SkillItemCard key={skill.title} title={skill.title} img={skill.img} />
                      ))}
                    </Flex>

                    <UnorderedList spacing={2} fontSize="sm" ml={4}>
                      {data.jobDesc.map((task, i) => (
                        <ListItem key={i}>{task}</ListItem>
                      ))}
                    </UnorderedList>
                  </VStack>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}

export default WorkExpMobile;