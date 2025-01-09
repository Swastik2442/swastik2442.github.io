import { Notable, Alex_Brush, Poppins, Monoton } from "next/font/google";

export const startYear = 2023;
export const ownerName = "Swastik Kulshreshtha";
export const ownerBio = "Computer Science Undergraduate | Tech Enthusiast | Python & C++";
export const ownerDescription = `
I am currently pursuing higher studies in Computer Science and Engineering. I am enthusiastic about Computers and Technology in general. I have been learning about Programming and their Libraries since 2018 and have significant experience in Python and Web Development.
In my college, I started learning more about Computer Fundamentals and other Programming Languages like C, Java, C++, JavaScript etc. Other than that, I have explored and created projects in Django, Flet, Next.js, React, Pandas, etc. I am currently exploring Artificial Intelligence, Game Development, and several other Computer Science domains.
`;

export const ownerResume = process.env.OWNER_RESUME;
export const ownerLocation = "RJ, India";
export const ownerTimezone = "Asia/Kolkata";
export const siteTitle = ownerName;
export const siteDescription = "Yet another Human from Earth";
export const siteLogo = "https://avatars.githubusercontent.com/u/56737344";
export const siteHost = process.env.SITE_HOST;

export const verificationGoogle = process.env.VERIFICATION_GOOGLE;
export const unsplashAppName = process.env.UNSPLASH_APP_NAME ?? "sk_portfolio";
export const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

export const kvAPIToken = process.env.KV_REST_API_TOKEN;
export const kvAPIURL = process.env.KV_REST_API_URL;

export const twitterUsername = "swastik2442";
export const githubUsername = "Swastik2442";
export const linkedinUsername = githubUsername;
export const wakatimeUsername = twitterUsername;

export const workExpData: WorkProperties[] = [
  {
    name: "DigiMonk Ltd.",
    tech: "Python, Flet, Mediapipe, Pygame",
    time: "since May 2024",
    description: "Worked as a Software Development Intern improving a product based on Gesture Recognition, with features like Usage Statistics, Game Screens, Bluetooth/Webcam Connectivity, Gesture Showcase, etc.",
  },
];

export const primaryFont = Notable({ weight: "400", subsets: ["latin"] });
export const secondaryFont = Alex_Brush({ weight: "400", subsets: ["latin"] });
export const tertiaryFont = Poppins({ weight: "400", subsets: ["latin"] });
export const quaternaryFont = Monoton({ weight: "400", subsets: ["latin"] });
