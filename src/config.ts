import { Notable, Alex_Brush, Poppins } from 'next/font/google';

export const startYear = 2023;
export const ownerName = "Swastik Kulshreshtha";
export const ownerBio = "Yet another Human from Earth";
export const ownerMail = process.env.OWNER_MAIL;
export const ownerResume = process.env.OWNER_RESUME;
export const ownerLocation = process.env.OWNER_LOCATION;
export const ownerTimezone = process.env.OWNER_TIMEZONE;
export const siteTitle = ownerName;
export const siteDescription = ownerBio;
export const siteLogo = "https://avatars.githubusercontent.com/u/135314424";
export const siteHost = process.env.SITE_HOST;
export const verificationGoogle = process.env.VERIFICATION_GOOGLE;

export const twitterUsername = "swastik2442";
export const githubUsername = "Swastik2442";
export const linkedinUsername = "Swastik2442";
export const wakatimeUsername = "swastik2442";

export const primaryFont = Notable({ weight: "400", subsets: ['latin'] });
export const secondaryFont = Alex_Brush({ weight: "400", subsets: ['latin'] });
export const tertiaryFont = Poppins({ weight: "400", subsets: ['latin'] });
