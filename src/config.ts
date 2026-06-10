import { Notable, Alex_Brush, Poppins, Monoton } from "next/font/google";

export const startYear = 2023;
export const ownerName = "Swastik Kulshreshtha";
export const ownerBio = "Full-Stack Developer | Tech Enthusiast | Python & TypeScript";
export const ownerDescription = `
I am currently pursuing higher studies in Computer Science and Engineering. I am enthusiastic about Computers and Technology in general. I have been learning Programming since 2018 and have significant experience in Python, TypeScript and Web Development.
In my college, I learnt more about Computer Fundamentals and other Programming Languages like C, Java, C++, etc. I have learnt about Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Computer Architecture and Organization, Operating Systems, Machine Learning, Deep Learning, Large Language Models, Big Data Analysis and many more.
Other than that, I have explored and created projects in FastAPI, React, Next.js, Express.js, Pandas, Flet, Django, Apache Hadoop, Apache Spark, TensorFlow, PyTorch, etc. I have used multiple cloud platforms like Azure, AWS, Vercel, Render, etc. I am currently exploring Artificial Intelligence, Game Development, and several other Computer Science domains.
`;

export const ownerResume = process.env.OWNER_RESUME;
export const ownerLocation = "Jaipur, Rajasthan";
export const ownerTimezone = "Asia/Kolkata";

export const siteTitle = ownerName;
export const siteDescription = ownerBio + " - Swastik is currently pursuing higher studies in Computer Science and is enthusiastic about Computers and Technology in general. He has been learning Programming since 2018 and has significant experience in Python, TypeScript and Web Development."
export const siteLogo = "https://avatars.githubusercontent.com/u/56737344";
export const siteHost = process.env.SITE_HOST;

export const verificationGoogle = process.env.VERIFICATION_GOOGLE;
export const unsplashAppName = process.env.UNSPLASH_APP_NAME;
export const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

export const kvAPIToken = process.env.KV_REST_API_TOKEN;
export const kvAPIURL = process.env.KV_REST_API_URL;

export const twitterUsername = "swastik2442";
export const githubUsername = "Swastik2442";
export const linkedinUsername = "Swastik2442";
export const wakatimeUsername = "swastik2442";

export const workExpData: WorkProperties[] = [
  {
    name: "DigiMonk Ltd.",
    tech: "Python, Flet, Mediapipe, Pygame",
    time: "May - July 2024",
    description: "Worked as a Software Development Intern improving a product based on Gesture Recognition, with features like Usage Statistics, Game Screens, Bluetooth/Webcam Connectivity, Gesture Showcase, etc.",
  },
  {
    name: "Celebal Technologies Ltd.",
    tech: "Python, FastAPI, Azure",
    time: "Feb 2026 - Present",
    description: "Working as a Junior Software Engineer in the Full-Stack Development department focusing on building scalable web applications.",
  },
];

export const links = {
  "resume": ownerResume,
  "github": `https://github.com/${githubUsername}`,
  "linkedin": `https://linkedin.com/in/${linkedinUsername}`,
  "twitter": `https://x.com/${twitterUsername}`,
  "x": `https://x.com/${twitterUsername}`
} as const;

export const primaryFont = Notable({ weight: "400", subsets: ["latin"] });
export const secondaryFont = Alex_Brush({ weight: "400", subsets: ["latin"] });
export const tertiaryFont = Poppins({ weight: "400", subsets: ["latin"] });
export const quaternaryFont = Monoton({ weight: "400", subsets: ["latin"] });
