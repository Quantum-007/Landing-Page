import {
  // GitHub as GitHubIcon,
  // Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

export const TEAM_MEMBERS = [
  {
    name: 'Abdul',
    role: 'CEO',
    description: 'Seasoned operator with cross-industry expertise',
    details: [
      'Former Director of Product at Revinate, San Francisco',
      'Founded and scaled cryptocurrency exchange in Dubai',
      'Developed machine learning software for disease prediction',
      'Defense consultant at Booz Allen Hamilton, specializing in weapons systems',
      'Economics, University of Maryland',
    ],
    image: 'assets/home/our_team/abdul.jpg',
    socials: [
      {
        icon: (
          <LinkedInIcon
            fontSize="large"
            className="bg-gray-900 hover:bg-[#5a7d2f] p-2 rounded-full text-[#b0b0b0]"
          />
        ),
        key: 'linkedin',
        url: 'https://www.linkedin.com/in/abdulgmanan/',
      },
    ],
  },
  {
    name: 'Ali',
    role: 'CTO',
    description:
      'Engineering leader with passion for hardware and software innovation',
    details: [
      'Robotics Engineer at Amazon',
      'Software and Hardware Engineer at Google',
      'Computer Engineering, University of Maryland',
      'Specialized focus in NLP, edge computing, and computer vision',
    ],
    image: 'assets/home/our_team/ali.png',
    socials: [
      {
        icon: (
          <LinkedInIcon
            fontSize="large"
            className="bg-gray-900 hover:bg-[#5a7d2f] p-2 rounded-full text-[#b0b0b0]"
          />
        ),
        key: 'linkedin',
        url: 'https://www.linkedin.com/in/ali-manan/',
      },
      // {
      //   icon: (
      //     <GitHubIcon
      //       fontSize="large"
      //       className="bg-gray-900 hover:bg-[#5a7d2f] p-2 rounded-full text-[#b0b0b0]"
      //     />
      //   ),
      //   key: 'github',
      // },
    ],
  },
  // {
  //   name: 'Aisha Patel',
  //   role: 'VP of Operations',
  //   description:
  //     'Operations expert specializing in supply chain optimization and manufacturing efficiency. Transformed operations at multiple Fortune 500 companies.',
  //   image: getPlaceholderImage(400, 500),
  //   socials: [
  //     {
  //       icon: (
  //         <LinkedInIcon
  //           fontSize="large"
  //           className="bg-gray-900 hover:bg-[#5a7d2f] p-2 rounded-full text-[#b0b0b0]"
  //         />
  //       ),
  //       key: 'linkedin',
  //     },
  //     {
  //       icon: (
  //         <TwitterIcon
  //           fontSize="large"
  //           className="bg-gray-900 hover:bg-[#5a7d2f] p-2 rounded-full text-[#b0b0b0]"
  //         />
  //       ),
  //       key: 'twitter',
  //     },
  //   ],
  // },
  // {
  //   name: 'Carlos Rodriguez',
  //   role: 'Chief Design Officer',
  //   description:
  //     'Award-winning industrial designer focused on creating intuitive, human-centered robotic systems that seamlessly integrate into existing workflows.',
  //   image: getPlaceholderImage(400, 500),
  //   socials: [
  //     {
  //       icon: (
  //         <LinkedInIcon
  //           fontSize="large"
  //           className="bg-gray-900 hover:bg-[#5a7d2f] p-2 rounded-full text-[#b0b0b0]"
  //         />
  //       ),
  //       key: 'linkedin',
  //     },
  //     {
  //       icon: (
  //         <TwitterIcon
  //           fontSize="large"
  //           className="bg-gray-900 hover:bg-[#5a7d2f] p-2 rounded-full text-[#b0b0b0]"
  //         />
  //       ),
  //       key: 'twitter',
  //     },
  //   ],
  // },
];
