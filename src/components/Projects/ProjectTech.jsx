import { Chip, useTheme } from "@mui/material";

const ProjectTech = ({ technologies }) => {
    const theme = useTheme()
    
  return (
    <>
      {technologies.map((tech) => (
        <Chip
          key={tech}
          label={tech}
          size="small"
          sx={{
            borderRadius: "20px",

            fontWeight: 600,

            bgcolor:
                theme.palette.mode ===
                    "dark"
                        ? "rgba(79,70,229,.12)"
                        : "rgba(79,70,229,.08)",

            border:
                "1px solid rgba(79,70,229,.18)",

            transition: ".3s",

            "&:hover": {
                bgcolor: "primary.main",

                color: "#fff",

                transform:
                    "translateY(-3px)",
                },
          }}
        />
      ))}
    </>
  );
};

export default ProjectTech;