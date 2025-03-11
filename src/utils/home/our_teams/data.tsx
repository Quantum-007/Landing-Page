import { getPlaceholderImage } from '@/utils/placeHolderImage';
import {
  GitHub as GitHubIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';

export const TEAM_MEMBERS = [
  {
    name: 'Sarah Chen',
    role: 'Chief Executive Officer',
    description:
      'Former robotics engineer with 15+ years experience in industrial automation. Led multiple successful startups in the manufacturing technology space.',
    image: getPlaceholderImage(400, 500),
    socials: [
      {
        icon: (
          <LinkedInIcon
            fontSize="large"
            className="bg-gray-900 hover:bg-[#5a7d2f] p-2 rounded-full text-[#b0b0b0]"
          />
        ),
        key: 'linkedin',
      },
      {
        icon: (
          <TwitterIcon
            fontSize="large"
            className="bg-gray-900 hover:bg-[#5a7d2f] p-2 rounded-full text-[#b0b0b0]"
          />
        ),
        key: 'twitter',
      },
    ],
  },
  {
    name: 'Marcus Johnson',
    role: 'Chief Technology Officer',
    description:
      'AI and robotics Ph.D. with background in developing learning algorithms for complex robotic systems. Previously led R&D at Boston Dynamics.',
    image: getPlaceholderImage(400, 500),
    socials: [
      {
        icon: (
          <LinkedInIcon
            fontSize="large"
            className="bg-gray-900 hover:bg-[#5a7d2f] p-2 rounded-full text-[#b0b0b0]"
          />
        ),
        key: 'linkedin',
      },
      {
        icon: (
          <GitHubIcon
            fontSize="large"
            className="bg-gray-900 hover:bg-[#5a7d2f] p-2 rounded-full text-[#b0b0b0]"
          />
        ),
        key: 'github',
      },
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
