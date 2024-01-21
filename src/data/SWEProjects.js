// List of swe projects

const SWEProjects = [
  {
    title: 'VGBacklogs.com',
    icon: '/logos/ProjectIcons/vgbl_logo.png',
    summary: 'Full Stack Web Social Platform',
    description: 'A full stack social platform that allows gamers to build and share their video game catalogs across multiple platforms with other users. Leverages React.js and MUI components for a responsive front-end, with a C# DotNET backend connected to a MongoDB database, deployed through AWS servers. Implemented the user profile system, including account authentication, following users, & saving games to profiles. The system stays up to date with the latest games across all platforms utilizing RAWG.io API. ',
    link: 'http://www.vgbacklogs.com/',
    skills: [
      {
        title: 'React',
        img: '/logos/CodingLogos/ReactLogo.png'
      },
      {
        title: 'C#',
        img: '/logos/CodingLogos/CSharpLogo.png'
      },
      {
        title: 'DotNET',
        img: '/logos/CodingLogos/DotNETLogo.png'
      },
      {
        title: 'MongoDB',
        img: '/logos/CodingLogos/MongoDBLogo.png'
      },
      {
        title: 'AWS',
        img: '/logos/CodingLogos/aws.png'
      },
    ]
  },
  {
    title: 'VR Drone Flight Training Simulator',
    icon: '/logos/ProjectIcons/VRDroneTraining.jpg',
    summary: 'Unity Virtual Reality Simulator',
    description: "A virtual reality simiulation that allows the user to fly a drone in simulated real-life environments and weather conditions. Within an environment, users use an in-game controller to fly the drone and can swap into the drone's perspective. The user has the choice to pick the time of day and weather conditions which will also impact the drone's physics, when flying. The software also includes an 'exam' feature which tests the user on flight regulation questions based on California's drone license exams from previous years. ",
    link: 'https://www.youtube.com/watch?v=YcD0RUF4Hl4',
    skills: [
      {
        title: 'C#',
        img: '/logos/CodingLogos/CSharpLogo.png'
      },
      {
        title: 'Unity',
        img: '/logos/CodingLogos/UnityLogo.png'
      },
    ]
  },
  {
    title: 'Shader Baker',
    icon: '/logos/ProjectIcons/ShaderBaker.png',
    summary: 'Python Blender3D Tool',
    description: "Developed a Python script that would add image textures to all materials of the selected object on the click of a button. Users can also change the selected UV map / image texture for all image textures. Wrote documentation for the tool with install instructions and clarify any confusion for new users.",
    link: 'https://github.com/LaurenceTimothyMGarcia/ShaderBaker',
    skills: [
      {
        title: 'Python',
        img: '/logos/CodingLogos/Python_logo.png'
      },
      {
        title: 'Blender API',
        img: '/logos/CodingLogos/BlenderLogo.png'
      },
    ]
  },
  {
    title: 'Prominent Colors',
    icon: '/logos/ProjectIcons/ProminentColorsIcon.png',
    summary: 'Kotlin Android App',
    description: "Designed, programmed, and published an Android app that can take an image, from photo gallery or the user's camera, and find the top 5 most used colors by pixel in the image. Programmed an algorithm that uses a HashMap to keep track of the colors and its frequency, along with a sorting algorithm that places the colors into Pairs on a LinkedList. Published on the Play Store and added interstitial advertisements when the user wants to scan another image. ",
    link: 'https://play.google.com/store/apps/details?id=com.cpp.android.prominentcolors',
    skills: [
      {
        title: 'Kotlin',
        img: '/logos/CodingLogos/KotlinLogo.png'
      },
      {
        title: 'Android Studio',
        img: '/logos/CodingLogos/AndroidStudioLogo_Full.png'
      },
      {
        title: 'Google AdMob',
        img: '/logos/CodingLogos/GoogleAdMob.png'
      },
    ]
  },
  {
    title: 'Procedural Terrain Generator',
    icon: '/logos/ProjectIcons/TerrainGenerator.png',
    summary: 'Procedural Unity Tool',
    description: "Programmed a custom procedural terrain generator in Unity using Perlin Noise. Implemented features enabling users to customize the terrain to their needs, from mountain ranges, valleys, canyons, etc. Designed a custom shader to enable the terrain to have various textures based on elevation levels. ",
    link: 'https://github.com/LaurenceTimothyMGarcia/ProceduralTerrainGenerator',
    skills: [
      {
        title: 'C#',
        img: '/logos/CodingLogos/CSharpLogo.png'
      },
      {
        title: 'Unity',
        img: '/logos/CodingLogos/UnityLogo.png'
      },
    ]
  },
  {
    title: 'Portfolio Website',
    icon: '/logos/ProjectIcons/AboutMeIsoTransparent512.png',
    summary: 'Front-End Web Development',
    description: "Designed and programmed a portfolio website to present all my projects in one place. Utilized Figma to prototype a design. Used React with Chakra UI to build custom components with the Three.js library for responsive 2D and 3D elements. All models were done through Blender. Deployed the website through GitHub Pages.",
    link: 'https://laurencetimothymgarcia.github.io/',
    skills: [
      {
        title: 'React',
        img: '/logos/CodingLogos/ReactLogo.png'
      },
      {
        title: 'THREE.js',
        img: '/logos/CodingLogos/threejslogo.png'
      },
      {
        title: 'Blender',
        img: '/logos/CodingLogos/BlenderLogo.png'
      },
      {
        title: 'Figma',
        img: '/logos/CodingLogos/FigmaLogo.png'
      }
    ]
  },
  {
    title: 'Raytracer',
    icon: '/logos/ProjectIcons/Raytracer.png',
    summary: 'Java Raytracing Study',
    description: "Programmed a raytracer using the Java Processing library. Capable of producing images consisting of various geometric primitives and user generated models. Renders the primitives with a phong lighting model, reflections, and UV texture mapping.",
    link: 'https://www.instagram.com/p/CmPT19vvkCl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    skills: [
      {
        title: 'Java',
        img: '/logos/CodingLogos/JavaLogo.png'
      },
      {
        title: 'Processing',
        img: '/logos/CodingLogos/ProcessingLogo.png'
      },
    ]
  },
  {
    title: 'DND Alignment Discord Bot',
    icon: '/logos/ProjectIcons/DiscordLogo.png',
    summary: 'Python Messaging Bot',
    description: "Programmed a messaging bot that takes a user's last 100 messages and rates it on a morality system. Used Discord.py API to develop and deploy the messaging bot. ",
    link: 'https://github.com/LaurenceTimothyMGarcia/Allignment-Bot',
    skills: [
      {
        title: 'Python',
        img: '/logos/CodingLogos/Python_logo.png'
      },
      {
        title: 'Discord.py',
        img: '/logos/ProjectIcons/DiscordLogo.png'
      },
    ]
  },
]

export default SWEProjects