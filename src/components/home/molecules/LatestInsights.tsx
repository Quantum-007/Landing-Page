import { useState } from 'react';
import { getPlaceholderImage } from '@/utils/placeHolderImage';
import {
  BLOG_POSTS,
  CATEGORIES,
  FEATURED_ARTICLES,
} from '@/utils/home/latest_insights/data';
import {
  Card,
  Box,
  Chip,
  Button,
  useTheme,
  CardMedia,
  Container,
  Typography,
  CardContent,
  useMediaQuery,
} from '@mui/material';

const LatestInsights = () => {
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const [activeCategory, setActiveCategory] = useState('All Posts');

  return (
    <Box className="bg-[#121212] py-20 text-[#f2f2f2] px-6">
      <Container>
        <Typography
          variant="h4"
          fontWeight="600"
          className="text-3xl text-start font-bold pb-1 text-white relative inline-block"
          sx={{
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-5px',
              left: '50%',
              width: '100%',
              height: '4px',
              backgroundColor: '#3c5a1e',
              transform: 'translateX(-50%)',
            },
          }}
        >
          Latest Insights
        </Typography>

        <Typography
          variant="subtitle1"
          className={`text-xl text-[#b0b0b0] py-6 max-w-3xl ${
            isTablet ? 'text-center mx-auto' : ''
          }`}
        >
          Stay updated with the latest trends, innovations, and success stories
          in industrial robotics.
        </Typography>

        <Typography
          variant="body1"
          fontWeight="600"
          className={`pb-2 ${
            isTablet ? 'text-center after:left-1/2 after:-translate-x-1/2' : ''
          }`}
        >
          Featured Articles
        </Typography>

        <Box className="overflow-x-auto flex gap-6 scrollbar-hide">
          {FEATURED_ARTICLES.map((article, index) => (
            <Card
              key={index}
              sx={{ borderRadius: 2, backgroundColor: '#1e1e1e' }}
              className="w-[350px] shadow-md rounded-lg overflow-hidden"
            >
              <CardMedia
                height="160"
                component="img"
                alt={`${article.title} Robotics`}
                image={getPlaceholderImage(400, 200)}
              />

              <CardContent
                sx={{
                  padding: 4,
                  backgroundColor: '#1e1e1e',
                }}
              >
                <Typography
                  variant="caption"
                  className="text-[#b0b0b0] flex justify-between pb-3"
                >
                  <span className="text-[#b0b0b0]">{article.date}</span>{' '}
                  <span className="text-[#5a7d2f]">{article.category}</span>
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ fontWeight: '600' }}
                  className="mt-2 text-[#f2f2f2] pb-3"
                >
                  {article.title}
                </Typography>

                <Typography variant="body2" className="text-[#b0b0b0] pb-3">
                  {article.excerpt}
                </Typography>

                <Button
                  sx={{
                    mx: 'auto',
                    color: '#5a7d2f',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    '&:hover': { color: '#3c5a1e' },
                  }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box className="flex justify-center flex-wrap gap-4 my-14">
          {CATEGORIES.map((cat, index) => (
            <Chip
              key={index}
              label={cat}
              onClick={() => setActiveCategory(cat)}
              sx={{
                px: 2,
                py: 1,
                borderRadius: 1,
                cursor: 'pointer',
                color: activeCategory === cat ? 'white' : '#b0b0b0',
                backgroundColor: activeCategory === cat ? '#3c5a1e' : '#2d2d2d',
                '&:hover': {
                  backgroundColor:
                    activeCategory === cat ? '#2c6e31' : '#3a3a3a',
                },
              }}
            />
          ))}
        </Box>

        <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <Card
              key={index}
              sx={{ borderRadius: 2, backgroundColor: '#1e1e1e' }}
              className="w-[350px] shadow-md rounded-lg overflow-hidden"
            >
              <CardMedia
                height="160"
                component="img"
                alt={`${post.title} Robotics`}
                image={getPlaceholderImage(400, 200)}
              />

              <CardContent
                sx={{
                  padding: 4,
                  backgroundColor: '#1e1e1e',
                }}
              >
                <Typography
                  variant="caption"
                  className="text-[#b0b0b0] flex justify-between pb-3"
                >
                  <span className="text-[#b0b0b0]">{post.date}</span>{' '}
                  <span className="text-[#5a7d2f]">{post.category}</span>
                </Typography>

                <Typography
                  variant="h6"
                  sx={{ fontWeight: '600' }}
                  className="mt-2 text-[#f2f2f2] pb-3"
                >
                  {post.title}
                </Typography>

                <Typography variant="body2" className="text-[#b0b0b0] pb-3">
                  {post.excerpt}
                </Typography>

                <Button
                  sx={{
                    mx: 'auto',
                    color: '#5a7d2f',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    '&:hover': { color: '#3c5a1e' },
                  }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box className="text-center mt-10">
          <Button
            variant="contained"
            sx={{
              bgcolor: '#3c5a1e',
              fontWeight: 'bold',
              '&:hover': { bgcolor: '#2c6e31' },
            }}
          >
            View All Articles
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default LatestInsights;
