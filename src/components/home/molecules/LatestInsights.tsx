import { useState } from 'react';
import { getPlaceholderImage } from '@/utils/placeHolderImage';
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Box,
  useTheme,
  Container,
  Typography,
  useMediaQuery,
} from '@mui/material';

const featuredArticles = [
  {
    title: 'How Machine Learning is Transforming Industrial Automation',
    date: 'March 2, 2025',
    category: 'Machine Learning',
    image: '/api/placeholder/400/300',
    excerpt:
      'Discover how adaptive algorithms are revolutionizing factory floors and creating unprecedented efficiency gains.',
  },
  {
    title: 'AI Integration: From Concept to Reality in Robotics',
    date: 'February 27, 2025',
    category: 'AI',
    image: '/api/placeholder/400/300',
    excerpt:
      'A step-by-step guide to implementing artificial intelligence in your robotic systems for enhanced performance.',
  },
  {
    title: 'Top 5 Robotics Innovations Set to Shape 2025',
    date: 'February 20, 2025',
    category: 'Trends',
    image: '/api/placeholder/400/300',
    excerpt:
      'Our analysts break down the most impactful emerging technologies that will transform robotics this year.',
  },
];

const categories = [
  'All Posts',
  'Machine Learning',
  'AI in Robotics',
  'Industry Trends',
  'Case Studies',
  'Investor Insights',
];

const blogPosts = [
  {
    title: 'Predictive Maintenance with ML Algorithms',
    date: 'February 15, 2025',
    category: 'Machine Learning',
    image: '/api/placeholder/400/300',
    excerpt:
      'How machine learning is revolutionizing equipment maintenance by predicting failures before they happen.',
  },
  {
    title: 'Robots That Learn: Exploring Reinforcement Learning Applications',
    date: 'February 10, 2025',
    category: 'AI in Robotics',
    image: '/api/placeholder/400/300',
    excerpt:
      'How self-learning robots are adapting to new tasks without explicit programming through reinforcement learning.',
  },
  {
    title: 'Emerging Robotics Trends Investors Should Watch',
    date: 'February 5, 2025',
    category: 'Investor Insights',
    image: '/api/placeholder/400/300',
    excerpt:
      'Analysis of market shifts and investment opportunities in the rapidly evolving industrial robotics sector.',
  },
];

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
          className={`text-3xl font-bold mb-4 relative ${
            isTablet ? 'text-center after:left-1/2 after:-translate-x-1/2' : ''
          }`}
          sx={{
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: 0,
              width: '240px',
              height: '4px',
              backgroundColor: '#3c5a1e',
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
          {featuredArticles.map((article, index) => (
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
          {categories.map((cat, index) => (
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

        {/* Blog Grid */}
        <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
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
