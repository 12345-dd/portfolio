import { Chip } from "@mui/material";

const ProjectTech = ({ technologies }) => {
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

            bgcolor: "primary.main",

            color: "#fff",

            "&:hover": {
              transform: "translateY(-2px)",
            },

            transition: ".3s",
          }}
        />
      ))}
    </>
  );
};

export default ProjectTech;