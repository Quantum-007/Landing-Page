import React from 'react';

import { TEAM_MEMBERS } from '@/utils/home/our_teams/data';
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
          {TEAM_MEMBERS.map((member, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Card
                className="h-full overflow-hidden rounded-lg"
                sx={{ borderRadius: 2, backgroundColor: '#1e1e1e' }}
              >
                <Box className="flex flex-row items-center justify-center p-4">
                  <Box className="relative h-60 w-60 bg-[#1e1e1e]">
                    <CardMedia
                      component="img"
                      alt={member.name}
                      image={member.image}
                      className="h-full w-full object-cover transition-transform duration-300"
                      sx={{
                        borderRadius: '100%',
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'scale(1.05)' },
                      }}
                    />

                    <Box
                      sx={{
                        borderRadius: '100%',
                        transition: 'opacity 0.3s ease',
                        backgroundColor: 'rgb(44 122 49 / 80%)',
                      }}
                      className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    >
                      {member.socials.map(({ icon, key, url }) => (
                        <IconButton
                          key={key}
                          href={url}
                          className="text-white transition-transform duration-300 hover:-translate-y-1"
                        >
                          {icon}
                        </IconButton>
                      ))}
                    </Box>
                  </Box>
                </Box>

                <CardContent className="bg-[#1e1e1e]">
                  <Typography
                    variant="h5"
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
                  <Typography
                    variant="body2"
                    className="text-[#b0b0b0] italic"
                    sx={{ whiteSpace: 'pre-line' }}
                  >
                    {member.description}
                  </Typography>

                  <Typography variant="body2" className="text-[#b0b0b0]">
                    <ul className="list-disc pl-5">
                      {member.details?.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
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
