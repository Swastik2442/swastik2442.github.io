import { Notable, Alex_Brush, Poppins } from 'next/font/google';

export const startYear = "START_YEAR" in process.env ? process.env.START_YEAR : new Date().getFullYear();
export const ownerName = "NEXT_PUBLIC_OWNER_NAME" in process.env ? process.env.NEXT_PUBLIC_OWNER_NAME : "Swastik Kulshreshtha";
export const ownerMail = "OWNER_MAIL" in process.env ? process.env.OWNER_MAIL : " ";
export const siteTitle = "SITE_TITLE" in process.env ? process.env.SITE_TITLE : ownerName;
export const siteDescription = "SITE_DESCRIPTION" in process.env ? process.env.SITE_DESCRIPTION : "Yet another Human from Earth";
export const siteLogo = "SITE_LOGO" in process.env ? process.env.SITE_LOGO : "https://avatars.githubusercontent.com/u/135314424";
export const siteHost = "SITE_HOST" in process.env ? process.env.SITE_HOST : "https://swastik2442.github.io"
export const verifyGoogle = "VERIFICATION_GOOGLE" in process.env ? process.env.VERIFICATION_GOOGLE : " "
export const twitterUsername = "USERNAME_TWITTER" in process.env ? process.env.USERNAME_TWITTER : "swastik2442";
export const githubUsername = "USERNAME_GITHUB" in process.env ? process.env.USERNAME_GITHUB : "Swastik2442";
export const linkedinUsername = "USERNAME_LINKEDIN" in process.env ? process.env.USERNAME_LINKEDIN : "Swastik2442";

export const primaryFont = Notable({ weight: "400", subsets: ['latin'] });
export const secondaryFont = Alex_Brush({ weight: "400", subsets: ['latin'] });
export const tertiaryFont = Poppins({ weight: "400", subsets: ['latin'] });
