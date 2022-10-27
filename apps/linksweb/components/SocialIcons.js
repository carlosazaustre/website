import {
  ImTwitch,
  ImGithub,
  ImTwitter,
  ImLinkedin,
  ImYoutube,
} from "react-icons/im";
import { SiDiscord, SiTiktok, SiInstagram } from "react-icons/si";

const social = {
  twitter: () => <ImTwitter />,
  youtube: () => <ImYoutube />,
  instagram: () => <SiInstagram />,
  tiktok: () => <SiTiktok />,
  github: () => <ImGithub />,
  linkedin: () => <ImLinkedin />,
  twitch: () => <ImTwitch />,
  discord: () => <SiDiscord />,
};

export default social;
