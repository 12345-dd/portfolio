import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";

import skills from "../../data/skills";
import SkillCard from "./SkillCard";

const SkillsGrid = () => {
  return (
    <Grid container spacing={3}>
      {skills.map((skill, index) => (
        <Grid
          key={skill.id}
          size={{
            xs: 12,
            sm: 6,
            lg: 3,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            style={{ height: "100%" }}
          >
            <SkillCard skill={skill} />
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );
};

export default SkillsGrid;