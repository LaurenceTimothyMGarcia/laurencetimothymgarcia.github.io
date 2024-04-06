// List of game dev projects

const GameDevProjects = [
  {
    title: 'Absolute Momentum',
    icon: '/logos/ProjectIcons/AbsoluteMomentum.png',
    summary: 'A phenomenon has caught on worldwide. Speed is life, and adrenaline is the only thing that matters. World peace? Non-Existent. War? Zero Interest. Cybernetic implants in your legs that make you move 3 cm/s faster? Absolutely. Everyone is here, and everyone is watching. Impress the world, and learn the ways of Absolute Momentum.',
    genre: 'Online Multiplayer Speedrunner',
    contribution: [
      "Built a network API for Unity that allows players to interact with each other in real time. Players join through a code system."
    ],
    topScreen: '/logos/ProjectIcons/GameScreenshots/AM_SS1.png',
    link: 'https://plutz.itch.io/absolute-momentum',
  },
  {
    title: 'Gunslinger Hilda',
    icon: '/logos/ProjectIcons/GunslingerHilda.png',
    summary: 'Explore the everchanging wild west in this third person roguelike shooter. Battle skeletons, cacadillos, and serpents in boots with your arsenal of 3 weapons. \n\n This game was created over the course of a semester with a team of 15 people. I started production on the procedural generation tool that would eventually be implemented into this game around May, and fully implemented it into the game around October. I was also scrum master and reviewed pull requests and code reviews with my team.',
    genre: 'Third Person Rogue-like Shooter',
    contribution: [
      "Scrum master of a team of 15 programmers, designers, and artists to develop a 3rd person shooter game.",
      "Held weekly SCRUM meetings to track the progress of each sub-team, assigned tasks through Trello, and realigned scope of the project as the deadline approached.",
      "Mentored newer programming and art members with tools such as Unity and Blender.",
      "Reviewed and managed Git pull requests from different branches of the programming teams.",
      "Developed player input and movement systems.",
      "Integrated UI elements using Unity's UI system to display stats like score and time.",
    ],
    topScreen: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dsb4kUgZXJU?si=MWt0-HRh_5-I4hRB&amp;start=252" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    link: 'https://emergencyplayer.itch.io/gunslinger-hilda',
  },
  {
    title: 'VR Drone Training Simulator',
    icon: '/logos/ProjectIcons/VRDroneTraining.jpg',
    summary: "A virtual reality simiulation that allows the user to fly a drone in simulated real-life environments and weather conditions. Within an environment, users use an in-game controller to fly the drone and can swap into the drone's perspective. The user has the choice to pick the time of day and weather conditions which will also impact the drone's physics, when flying. The software also includes an 'exam' feature which tests the user on flight regulation questions based on California's drone license exams from previous years. ",
    genre: 'First Person Simulator',
    contribution: [
      "Collaborated with a team of 7 people on the development of a Drone Flight Training Program in Virtual Reality.",
      "Hosted weekly playtesting sessions, taking notes observing how users would interact with new features and receive feedback on what to improve on.",
      "Programmed core mechanics such as drone controls, objective system, and player/drone perspective switch.",
      "Developed and implemented drone regulation warnings such as elevation and proximity regulations with a scoring system to provide feedback to the user.",
    ],
    topScreen: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/YcD0RUF4Hl4?si=QAtS_HOCJpJJ3Kat" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    link: 'https://www.youtube.com/watch?v=YcD0RUF4Hl4',
  },
  {
    title: 'Procedural Terrain Generator',
    icon: '/logos/ProjectIcons/TerrainGenerator.png',
    summary: 'A procedural terrain generator tool that utilizes Perlin noise to create different types of terrain. The tool is split into 2 components, one part that generates/modifies the noise, and the other part that elevates the mesh based on the noise data.',
    genre: 'Unity Tool',
    contribution: [
      "Programmed a custom procedural terrain generator in Unity using Perlin noise.",
      "Implemented features enabling users to customize the terrain to their needs, from mountain ranges, canyons, etc.",
      "Designed a custom shader to enable the terrain to have various textures based on elevation.",
    ],
    topScreen: '/logos/ProjectIcons/GameScreenshots/ProcTerrainGenSS.png',
    link: 'https://github.com/LaurenceTimothyMGarcia/ProceduralTerrainGenerator',
  },
  {
    title: 'Chachi',
    icon: '/logos/ProjectIcons/ChachiLogo.png',
    summary: 'How long can you survive before they reach you? In this survivor horror game, you survive for as long as you can, navigating a complex maze with unknown threats. \n\n This was my submission to the Cal Poly Pomona Halloween Horror Jam where the theme was lost. I solo developed the project with voice acting done by Lorenzo Cabrera. This time around I saw to emulate the feeling of the viral backrooms videos with a maze that felt infinite. A lot came down to the level design and the effects to give this simple runner a unique found footage like style.',
    genre: 'Survival Horror',
    contribution: [
      "Solo developed a survival horror game under 48 hours for the CPP Game Dev Club Halloween Horror Jam, where the player must navigate a labyrinth avoiding monsters inside.",
      "Programmed core mechanics such as player movement, timer system, and gameplay loop",
      "Developed 3 unique AI behaviors for the different monsters chasing the player",
      "Modeled the labyrinth for the player to navigate.",
      "Crafted a post-processing style that gave a 'night-vision' and 'found footage' style to the game",
    ],
    topScreen: '/logos/ProjectIcons/GameScreenshots/ChachiSS.png',
    link: 'https://emergencyplayer.itch.io/chachi',
  },
  {
    title: 'Inkage',
    icon: '/logos/ProjectIcons/InkageGame.png',
    summary: 'In the Splatoon inspired board game, Inkage, you try to color as much of the board in your terrain as possible. Collect power ups that you can use to gain more terrain which you move faster in or use them to slow down your enemies by inking them. ',
    genre: 'Board Game',
    contribution: [
      "Designed a fast-paced board game based on the Splatoon franchise."
    ],
    topScreen: '/logos/ProjectIcons/GameScreenshots/InkageSS.png',
    link: 'https://www.laurencetimg.com/InkageBoardGame.pdf',
  },
  {
    title: 'We Play Tanks! Tanks!',
    icon: '/logos/ProjectIcons/TankLogo.png',
    summary: 'A Reimagining of the Wii Play Tanks Mini game built for PC. All new mouse and keyboard controls implemented. This game was made for education purposes. To reduce the file size and maintain the 100 levels from the original game, a custom REGEX tool was built to read level files with each 2 characters representing a tile or object in the game. This also sped up production of the levels allowing a team of 5 designers to create 100 levels within a day.',
    genre: 'Top Down Shooter',
    contribution: [
      "Scrum master for a team of 7 programmers and artists to develop a top-down shooter based on the Nintendo Wii Play Tanks Minigame for PC.",
      "Built basic movement and shooting mechanics for the tank system.",
      "Developed a custom level editor that condenses level data into a string. Speed up development of levels by 150% and condensed the size of the game by 90%.",
    ],
    topScreen: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/bd-yDZ6KuNM?si=LDifbqVCg8skjXnH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    link: 'https://emergencyplayer.itch.io/we-play-tanks-tanks',
  },
  {
    title: 'Stick To It',
    icon: '/logos/ProjectIcons/StickToItLogo.png',
    summary: 'In this puzzle platformer, you use your glue gun to shoot 2 objects and stick them together to build platforms or propel yourself to different parts of the stage. This game was submitted to the GMTK Game Jam in 2021 and was my first game jam. With the theme join together, this game fits very nicely as the player joins platforms together to get to their goal.',
    genre: 'Puzzle Platformer',
    contribution: [
      "Programmed core mechanics such as platforming movement and the glue gun system.",
      "Designed 13 levels that teach and challenge the player utilize their tools in unique ways.",
    ],
    topScreen: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/Far9tN0q4tw?si=y8YtO4qSNRdG8i25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    link: 'https://emergencyplayer.itch.io/sticktoit',
  },
  {
    title: 'Locked and Loaded Die',
    icon: '/logos/ProjectIcons/LockedLoadedDieLogo.jpg',
    summary: 'Survive hordes of aliens with an ever changing arsenal of weapons. This game you run around a side scrolling arena fighting infinite enemies and have a random weapon every 10 seconds. This game was a submission to the 2022 GMTK Game Jam.',
    genre: '2D Action Platformer',
    contribution: [
      "Collaborated with a team of 8 programmers, artists, and musicians to develop a 2d action platformer within 48 hours.",
      "Built core gameplay mechanics such as movement and shooting.",
      "Created a dynamic weapon system that allowed for easy modification for new types of weapons and behaviors by the designers.",
      "Utilized Unity's particle effects system to add various effects for the player, enemies, and weapons.",
    ],
    topScreen: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/fo68HzVGe8Y?si=E8jYLik26t79RdRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    link: 'https://emergencyplayer.itch.io/locked-and-loaded-die',
  },
  {
    title: 'The Labryinth Run',
    icon: '/logos/ProjectIcons/LabyrinthRunLogo.png',
    summary: 'Labyrinth run was the first game I properly led for the Game Development Club. It is a first person shooter where you go through a random assortment of levels, fighting terrifying enemies in handcrafted levels.',
    genre: 'First Person Shooter',
    contribution: [
      "Scrum master for a team of 6 programmers, artists, and musicians to develop a first person shooter.",
      "Developed a random room selector that allowed the order of the rooms to change per run.",
      "Programmed the item drop system that would spawn random weapons/power ups from enemies.",
      "Crafted 3D assets and animations for the enemies, maps, and weapons in Blender.",
      "Built and baked custom shaders utilizing shader nodes for the textures of the weapons, maps, and enemies.",
    ],
    topScreen: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/fWmrw0dup4w?si=UBpMddI6U57FCBlQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    link: 'https://emergencyplayer.itch.io/labyrinthrun',
  },
]

export default GameDevProjects;