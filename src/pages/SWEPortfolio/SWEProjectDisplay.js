import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Box, Flex, HStack, IconButton, Text, keyframes } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import SWEProjectCard from './SWEProjectCard';
import SWEProjects from '../../data/SWEProjects';
import colors from '../../theme/Color';

const nudge = keyframes`
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(8px); }
`;

function SWEProjectDisplay() {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Figure out which card is closest to the center of the container
  const updateActive = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;
    Array.from(el.children).forEach((child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(childCenter - center);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActive(closest);
  }, []);

  useEffect(() => {
    updateActive();
  }, [updateActive]);

  const handleScroll = () => {
    updateActive();
    if (!hasScrolled) setHasScrolled(true);
  };

  const goTo = (index) => {
    const el = scrollRef.current;
    const target = el?.children[index];
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  };

  const last = SWEProjects.length - 1;

  const arrowStyles = {
    display: { base: 'flex', md: 'none' },
    position: 'absolute',
    top: '40%',
    zIndex: 2,
    isRound: true,
    size: 'md',
    bg: colors.primary,
    color: 'white',
    border: '2px solid',
    borderColor: colors.text,
    boxShadow: '2px 2px 0 #1B0F2E',
    _hover: { bg: colors.primary },
    _active: { bg: colors.primary },
  };

  return (
    <Box>
      {/* Swipe hint: mobile only, disappears after first scroll */}
      {!hasScrolled && (
        <Text
          display={{ base: 'block', md: 'none' }}
          textAlign="center"
          fontSize="sm"
          color={colors.contrast}
          mb={2}
          animation={`${nudge} 1.5s ease-in-out infinite`}
        >
          Swipe to see more projects →
        </Text>
      )}

      <Box position="relative">
        {/* Left arrow */}
        <IconButton
          aria-label="Previous project"
          icon={<ChevronLeftIcon boxSize={6} />}
          left="4px"
          opacity={active === 0 ? 0 : 1}
          pointerEvents={active === 0 ? 'none' : 'auto'}
          onClick={() => goTo(active - 1)}
          transition="opacity 0.2s"
          {...arrowStyles}
        />

        {/* Right arrow */}
        <IconButton
          aria-label="Next project"
          icon={<ChevronRightIcon boxSize={6} />}
          right="4px"
          opacity={active === last ? 0 : 1}
          pointerEvents={active === last ? 'none' : 'auto'}
          onClick={() => goTo(active + 1)}
          transition="opacity 0.2s"
          {...arrowStyles}
        />

        <Flex
          ref={scrollRef}
          onScroll={handleScroll}
          flexWrap={{ base: 'nowrap', md: 'wrap' }}
          justify={{ base: 'flex-start', md: 'center' }}
          align="flex-start"
          gap="1rem"
          overflowX={{ base: 'auto', md: 'visible' }}
          px={{ base: '10vw', md: 0 }}
          pb={{ base: 4, md: 0 }}
          sx={{
            scrollSnapType: 'x mandatory',
            scrollPaddingInline: '10vw',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {SWEProjects.map((project) => (
            <SWEProjectCard key={project.title} {...project} />
          ))}
        </Flex>
      </Box>

      {/* Dots */}
      <HStack justify="center" spacing={2} mt={1} display={{ base: 'flex', md: 'none' }}>
        {SWEProjects.map((project, i) => (
          <Box
            as="button"
            key={project.title}
            aria-label={`Go to ${project.title}`}
            onClick={() => goTo(i)}
            h="10px"
            w={i === active ? '24px' : '10px'}
            borderRadius="full"
            bg={i === active ? colors.primary : colors.contrast}
            opacity={i === active ? 1 : 0.5}
            transition="all 0.25s"
          />
        ))}
      </HStack>
    </Box>
  );
}

export default SWEProjectDisplay;