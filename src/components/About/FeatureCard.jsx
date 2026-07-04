import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
} from "@mui/material";

const MotionCard = motion(Card);

const FeatureCard = ({ feature }) => {
  const theme = useTheme();
  const Icon = feature.icon;

  return (
    <MotionCard
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      sx={{
        height: "100%",
        borderRadius: 2,
        border: "1px solid",
        borderColor:
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,.08)"
            : "rgba(37,99,235,.12)",

        background:
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,.04)"
            : "#fff",

        backdropFilter: "blur(20px)",

        transition: ".3s",

        "&:hover": {
          borderColor: "primary.main",
          boxShadow: "0 15px 40px rgba(37,99,235,.18)",
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
            background:
              "linear-gradient(135deg,#4F46E5,#06B6D4)",
          }}
        >
          <Icon sx={{ color: "#fff" }} />
        </Box>

        <Typography
          variant="h6"
          fontWeight={700}
          gutterBottom
        >
          {feature.title}
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            lineHeight: 1.7,
          }}
        >
          {feature.description}
        </Typography>
      </CardContent>
    </MotionCard>
  );
};

export default FeatureCard;