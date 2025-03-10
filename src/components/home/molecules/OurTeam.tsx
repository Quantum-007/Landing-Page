import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { getPlaceholderImage } from '@/utils/placeHolderImage';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  Container,
  IconButton,
  Typography,
  CardContent,
} from '@mui/material';

const teamMembers = [
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
  {
    name: 'Aisha Patel',
    role: 'VP of Operations',
    description:
      'Operations expert specializing in supply chain optimization and manufacturing efficiency. Transformed operations at multiple Fortune 500 companies.',
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
    name: 'Carlos Rodriguez',
    role: 'Chief Design Officer',
    description:
      'Award-winning industrial designer focused on creating intuitive, human-centered robotic systems that seamlessly integrate into existing workflows.',
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
];

const TeamSection = () => {
  return (
    <Box id="team" className="py-20 bg-[#121212]">
      <Container>
        <Typography
          variant="h4"
          fontWeight="600"
          className="text-3xl text-start font-bold pb-1 relative inline-block"
          sx={{
            '&::after': {
              left: '50%',
              width: '100%',
              height: '4px',
              content: '""',
              bottom: '-5px',
              position: 'absolute',
              backgroundColor: '#3c5a1e',
              transform: 'translateX(-50%)',
            },
          }}
        >
          Our Team
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mt: 4,
            mx: 'auto',
            maxWidth: 'xl',
            color: '#b0b0b0',
            textAlign: 'start',
            fontSize: '1.2rem',
          }}
        >
          Meet the experts behind Quantum Robotics&apos; revolutionary
          technology.
        </Typography>

        <Grid container spacing={4} marginTop={0.5}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                className="bg-[#1e1e1e] h-full overflow-hidden rounded-lg"
                sx={{ borderRadius: 2 }}
              >
                <Box className="relative h-80 bg-[#1e1e1e]">
                  <CardMedia
                    component="img"
                    alt={member.name}
                    image={member.image}
                    className="h-full w-full object-cover transition-transform duration-300"
                    sx={{
                      transition: 'transform 0.3s ease',
                      '&:hover': { transform: 'scale(1.05)' },
                    }}
                  />
                  <Box
                    sx={{
                      transition: 'opacity 0.3s ease',
                      backgroundColor: 'rgb(44 122 49 / 80%)',
                    }}
                    className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  >
                    {member.socials.map(({ icon, key }) => (
                      <IconButton
                        key={key}
                        className="text-white transition-transform duration-300 hover:-translate-y-1"
                      >
                        {icon}
                      </IconButton>
                    ))}
                  </Box>
                </Box>

                <CardContent className="bg-[#1e1e1e]">
                  <Typography
                    variant="h6"
                    className="text-[#f2f2f2] font-semibold pb-2"
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className="text-[#5a7d2f] pb-2"
                  >
                    {member.role}
                  </Typography>
                  <Typography variant="body2" className="text-[#b0b0b0]">
                    {member.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;
