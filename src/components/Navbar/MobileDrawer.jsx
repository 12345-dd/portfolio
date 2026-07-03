import {
  Drawer,
  Box,
  IconButton,
  Typography,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

import navLinks from "../../data/navLinks";
import personalInfo from "../../data/personalInfo";

const MobileDrawer = ({ open, onClose }) => {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 280,
          backgroundColor: "background.paper",
          color: "text.primary",
        },
      }}
    >

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "primary.main",
            fontWeight: 700,
          }}
        >
          {personalInfo.shortName}
        </Typography>

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider />

      <List>
        {navLinks.map((item) => (
          <ListItemButton
            key={item.id}
            onClick={onClose}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default MobileDrawer;