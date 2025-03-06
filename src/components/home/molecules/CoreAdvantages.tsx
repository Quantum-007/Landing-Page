import { Box, Container, Grid, Card, CardContent, Typography } from "@mui/material";
import { Shield as ShieldIcon, TrendingUp as TrendingUpIcon } from "@mui/icons-material";

const CoreAdvantages = () => {
  return (
    <Box id="features" className="py-20 bg-[#121212]">
      <Container>
        <Typography
          variant="h2"
          className="text-3xl font-bold mb-4 relative text-start"
          sx={{
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "4px",
              backgroundColor: "#3c5a1e",
            },
          }}
        >
          Core Advantages
        </Typography>
        <Typography variant="subtitle1" className="text-xl text-gray-400 mb-12 text-start max-w-3xl mx-auto">
          Our solutions are built on three foundational pillars that ensure superior performance across all deployments.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Feature Card 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card className="bg-gray-800 h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <Box className="text-4xl text-green-500 mb-4">
                  <ShieldIcon fontSize="inherit" />
                </Box>
                <Typography variant="h5" className="font-semibold mb-3">
                  Reliability & Quality
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Our robotics systems achieve 99.8% operational reliability through redundant systems and predictive maintenance.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="bg-gray-800 h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <Box className="text-4xl text-green-500 mb-4">
                  <TrendingUpIcon fontSize="inherit" />
                </Box>
                <Typography variant="h5" className="font-semibold mb-3">
                  Cost Savings
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Customers typically experience 35% reduction in operational costs through improved efficiency and optimized resources.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="bg-gray-800 h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <Box className="text-4xl text-green-500 mb-4">
                </Box>
                <Typography variant="h5" className="font-semibold mb-3">
                  Precision & Consistency
                </Typography>
                <Typography variant="body2" className="text-gray-400">
                  Our systems deliver sub-millimeter precision with consistency, ensuring superior product quality and reducing defects.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CoreAdvantages;
