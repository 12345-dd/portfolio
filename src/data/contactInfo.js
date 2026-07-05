import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubRoundedIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";

import socialLinks from "./socialLinks";

const contactInfo = [
  {
    id: 1,
    title: "Email",
    value: "mayurpatil98607@gmail.com",
    buttonText: "Send Email",
    icon: EmailRoundedIcon,
    link: socialLinks.email,
  },

  {
    id: 2,
    title: "GitHub",
    value: "github.com/12345-dd",
    buttonText: "View GitHub",
    icon: GitHubRoundedIcon,
    link: socialLinks.github,
  },

  {
    id: 3,
    title: "LinkedIn",
    value: "linkedin.com/in/mayur-patil-55458b24a",
    buttonText: "View Profile",
    icon: LinkedInIcon,
    link: socialLinks.linkedin,
  },

  {
    id: 4,
    title: "Location",
    value: "Surat, Gujarat, India",
    buttonText: "",
    icon: LocationOnRoundedIcon,
    link: "",
  },
];

export default contactInfo;