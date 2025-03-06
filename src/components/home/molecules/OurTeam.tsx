import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from '@mui/material';
import { getPlaceholderImage } from '@/utils/placeHolderImage';

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'Chief Executive Officer',
    description:
      'Former robotics engineer with 15+ years experience in industrial automation. Led multiple successful startups in the manufacturing technology space.',
    image: getPlaceholderImage(400, 500),
    socials: [
      { icon: <LinkedInIcon />, key: 'linkedin' },
      { icon: <TwitterIcon />, key: 'twitter' },
    ],
  },
  {
    name: 'Marcus Johnson',
    role: 'Chief Technology Officer',
    description:
      'AI and robotics Ph.D. with background in developing learning algorithms for complex robotic systems. Previously led R&D at Boston Dynamics.',
    image: getPlaceholderImage(400, 500),
    socials: [
      { icon: <LinkedInIcon />, key: 'linkedin' },
      { icon: <GitHubIcon />, key: 'github' },
    ],
  },
  {
    name: 'Aisha Patel',
    role: 'VP of Operations',
    description:
      'Operations expert specializing in supply chain optimization and manufacturing efficiency. Transformed operations at multiple Fortune 500 companies.',
    image: getPlaceholderImage(400, 500),
    socials: [
      { icon: <LinkedInIcon />, key: 'linkedin' },
      { icon: <TwitterIcon />, key: 'twitter' },
    ],
  },
  {
    name: 'Carlos Rodriguez',
    role: 'Chief Design Officer',
    description:
      'Award-winning industrial designer focused on creating intuitive, human-centered robotic systems that seamlessly integrate into existing workflows.',
    image: getPlaceholderImage(400, 500),
    socials: [
      { icon: <LinkedInIcon />, key: 'linkedin' },
      { icon: <TwitterIcon />, key: 'twitter' },
    ],
  },
];

const TeamSection = () => {
  return (
    <Box id="team" className="py-20 bg-gray-900">
      <Container>
        <Typography
          variant="h2"
          className="text-3xl font-bold mb-4 relative text-center"
          sx={{
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '4px',
              backgroundColor: '#3c5a1e',
            },
          }}
        >
          Our Team
        </Typography>
        <Typography
          variant="subtitle1"
          className="text-xl text-gray-400 mb-12 max-w-3xl text-center mx-auto"
        >
          Meet the experts behind Quantum Robotics&apos; revolutionary
          technology.
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card className="bg-gray-800 h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
                <Box className="relative h-80">
                  <CardMedia
                    component="img"
                    image={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-300"
                    sx={{
                      transition: 'transform 0.3s ease',
                      '&:hover': { transform: 'scale(1.05)' },
                    }}
                  />
                  <Box
                    className="absolute inset-0 bg-green-800 bg-opacity-80 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    sx={{ transition: 'opacity 0.3s ease' }}
                  >
                    {member.socials.map(({ icon, key }) => (
                      <IconButton
                        key={key}
                        className="bg-gray-900 text-white hover:bg-green-700 transition-transform duration-300 hover:-translate-y-1"
                      >
                        {icon}
                      </IconButton>
                    ))}
                  </Box>
                </Box>
                <CardContent className="p-6">
                  <Typography variant="h6" className="font-semibold mb-1">
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className="text-green-500 mb-3"
                  >
                    {member.role}
                  </Typography>
                  <Typography variant="body2" className="text-gray-400">
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
