import { Card, Box, Typography, Chip, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SkillCard = ({ skill }) => {
  const theme = useTheme();

  const Icon = skill.icon;

  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",

        p: 4,

        borderRadius: "28px",

        position: "relative",

        overflow: "hidden",

        transition: ".35s",

        backdropFilter: "blur(20px)",

        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(145deg, rgba(255,255,255,.06), rgba(255,255,255,.03))"
            : "linear-gradient(145deg,#FFFFFF,#F8FAFC)",

        border:
          theme.palette.mode === "dark"
            ? "1px solid rgba(255,255,255,.08)"
            : "1px solid rgba(15,23,42,.08)",

        boxShadow:
          theme.palette.mode === "dark"
            ? "0 20px 45px rgba(0,0,0,.35)"
            : "0 15px 40px rgba(15,23,42,.08)",

        "&:hover": {
          transform: "translateY(-10px)",

          borderColor: "primary.main",

          boxShadow:
            theme.palette.mode === "dark"
              ? "0 30px 60px rgba(37,99,235,.20)"
              : "0 25px 55px rgba(37,99,235,.18)",
        },
      }}
    >
      {/* Background Glow */}

      <Box
        sx={{
          position: "absolute",

          width: 220,
          height: 220,

          top: -80,
          right: -80,

          borderRadius: "50%",

          background:
            "linear-gradient(135deg,#4F46E5,#06B6D4)",

          opacity: .08,

          filter: "blur(50px)",
        }}
      />

      {/* Icon */}

      <Box
        sx={{
          width: 72,

          height: 72,

          borderRadius: "22px",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          mb: 3,

          background:
            "linear-gradient(135deg,#4F46E5,#2563EB,#06B6D4)",

          color: "#fff",

          boxShadow:
            "0 15px 35px rgba(79,70,229,.35)",
        }}
      >
        <Icon sx={{ fontSize: 36 }} />
      </Box>

      {/* Title */}

      <Typography
        variant="h5"
        sx={{
          fontWeight: 800,

          mb: 2,
        }}
      >
        {skill.title}
      </Typography>

      {/* Description */}

      <Typography
        color="text.secondary"
        sx={{
          lineHeight: 1.9,

          mb: 4,

          minHeight: 85,
        }}
      >
        {skill.description}
      </Typography>

      {/* Technologies */}

      <Box
        sx={{
            mt: 4,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: 2,
            width: "100%",
        }}
      >
        {skill.technologies.map((tech) => (
          <Chip
            key={tech}
            label={tech}
            size="medium"
            sx={{
              borderRadius: "30px",

              px: .5,

              fontWeight: 600,

              bgcolor:
                theme.palette.mode === "dark"
                  ? "rgba(79,70,229,.10)"
                  : "rgba(37,99,235,.08)",

              border:
                theme.palette.mode === "dark"
                  ? "1px solid rgba(79,70,229,.20)"
                  : "1px solid rgba(37,99,235,.15)",

              transition: ".25s",

              "&:hover": {
                bgcolor: "primary.main",

                color: "#fff",

                transform: "translateY(-2px)",
              },
            }}
          />
        ))}
      </Box>

      {/* Bottom Highlight */}

      <Box
        sx={{
          mt: 4,

          display: "flex",

          alignItems: "center",

          gap: 1.5,
        }}
      >
        <Box
          sx={{
            width: 10,

            height: 10,

            borderRadius: "50%",

            bgcolor: "success.main",
          }}
        />

        <Typography
          variant="body2"
          sx={{
            fontWeight: 600,

            color: "text.secondary",
          }}
        >
          {skill.highlight}
        </Typography>
      </Box>
    </Card>
  );
};

export default SkillCard;