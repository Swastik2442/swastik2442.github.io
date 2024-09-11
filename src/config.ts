import { Notable, Alex_Brush, Poppins } from "next/font/google";

export const startYear = 2023;
export const ownerName = "Swastik Kulshreshtha";
export const ownerBio = "Computer Science Undergraduate | Tech Enthusiast | Python & C++";
export const ownerDescription = `
I am currently pursuing higher studies in Computer Science and Engineering. I am enthusiastic about Computers and Technology in general. I have been learning about Programming and their Libraries since 2018 and have significant experience in Python and Web Development.
In my college, I started learning more about Computer Fundamentals and other Programming Languages like C, Java, C++, JavaScript etc. Other than that, I have explored and created projects in Django, Flet, Next.js, React, Pandas, etc. I am currently exploring about Artificial Intelligence, Game Development, and several other Computer Science domains.
`;

export const ownerResume = process.env.OWNER_RESUME;
export const ownerLocation = process.env.OWNER_LOCATION;
export const ownerTimezone = process.env.OWNER_TIMEZONE;
export const siteTitle = ownerName;
export const siteDescription = "Yet another Human from Earth";
export const siteLogo = "https://avatars.githubusercontent.com/u/56737344";
export const siteHost = process.env.SITE_HOST;
export const verificationGoogle = process.env.VERIFICATION_GOOGLE;

export const twitterUsername = "swastik2442";
export const githubUsername = "Swastik2442";
export const linkedinUsername = "Swastik2442";
export const wakatimeUsername = "swastik2442";

export const workExpData = [
  {
    name: "DigiMonk Ltd.",
    tech: "Python, Flet, Mediapipe, Pygame",
    time: "May-July 2024",
    description: "Worked as a Software Development Intern updating the Smart-Gripper project, namely User Statistics, Game Screens, Bluetooth/Camera Connectivity, etc.",
    image: "",
    url: "#",
  },
];

export const primaryFont = Notable({ weight: "400", subsets: ["latin"] });
export const secondaryFont = Alex_Brush({ weight: "400", subsets: ["latin"] });
export const tertiaryFont = Poppins({ weight: "400", subsets: ["latin"] });
