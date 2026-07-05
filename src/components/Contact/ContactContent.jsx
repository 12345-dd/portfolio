import { motion } from "framer-motion";

import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";

import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

import heroInfo from "../../data/heroInfo";
import ContactCard from "./ContactCard";
import contactInfo from "../../data/contactInfo";

const ContactContent = () => {
  const theme = useTheme();

  return (
    <Grid
      container
      spacing={4}
    >
      {/* Left Side */}

      <Grid
        size={{
          xs: 12,
          md: 5,
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <Card
            elevation={0}
            sx={{
              height: "100%",

              borderRadius: "30px",

              background:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,.05)"
                  : "#fff",

              border: `1px solid ${
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,.08)"
                  : "rgba(15,23,42,.08)"
              }`,

              boxShadow:
                theme.palette.mode === "dark"
                  ? "0 20px 50px rgba(0,0,0,.30)"
                  : "0 20px 45px rgba(15,23,42,.08)",

              transition: ".35s",

              "&:hover": {
                transform: "translateY(-8px)",

                borderColor: "primary.main",

                boxShadow:
                  "0 25px 60px rgba(37,99,235,.18)",
              },
            }}
          >
            <CardContent
              sx={{
                p: {
                  xs: 3,
                  md: 5,
                },

                height: "100%",

                display: "flex",

                flexDirection: "column",

                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                fontWeight={800}
                sx={{
                  mb: 2,
                }}
              >
                Looking for My Next Opportunity
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  lineHeight: 2,
                  mb: 4,
                }}
              >
                I'm actively seeking a Full Stack MERN Developer role where I can 
                contribute to building scalable web applications, collaborate with 
                talented teams, and continue growing as a software developer. If you 
                have an opportunity that aligns with my skills and passion, I'd be 
                happy to connect.
              </Typography>

              <Button
                component="a"
                href={heroInfo.resume}
                download
                variant="contained"
                startIcon={<DownloadRoundedIcon />}
                sx={{
                  width: "fit-content",

                  px: 4,

                  py: 1.5,

                  borderRadius: "50px",

                  fontWeight: 700,

                  textTransform: "none",

                  boxShadow:
                    "0 10px 25px rgba(37,99,235,.25)",

                  "&:hover": {
                    transform: "translateY(-3px)",
                  },
                }}
              >
                Download Resume
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </Grid>

      {/* Right Side */}

      <Grid
        size={{
          xs: 12,
          md: 7,
        }}
      >
        <Grid
          container
          spacing={3}
        >
          {contactInfo.map((item, index) => (
            <Grid
              key={item.id}
              size={{
                xs: 12,
                sm: 6,
              }}
            >
              <ContactCard
                item={item}
                index={index}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactContent;