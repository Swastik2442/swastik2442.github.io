import { Notable, Alex_Brush, Poppins } from 'next/font/google';

export const startYear = process.env.START_YEAR;
export const ownerName = process.env.OWNER_NAME;
export const ownerBio = process.env.OWNER_BIO;
export const ownerMail = process.env.OWNER_MAIL;
export const ownerResume = process.env.OWNER_RESUME;
export const ownerLocation = process.env.OWNER_LOCATION;
export const ownerTimezone = process.env.OWNER_TIMEZONE;
export const siteTitle = process.env.SITE_TITLE;
export const siteDescription = process.env.SITE_DESCRIPTION;
export const siteLogo = process.env.SITE_LOGO;
export const siteHost = process.env.SITE_HOST;
export const verifyGoogle = process.env.VERIFICATION_GOOGLE;
export const twitterUsername = process.env.USERNAME_TWITTER;
export const githubUsername = process.env.USERNAME_GITHUB;
export const linkedinUsername = process.env.USERNAME_LINKEDIN;
export const wakatimeUsername = process.env.USERNAME_WAKATIME;

export const primaryFont = Notable({ weight: "400", subsets: ['latin'] });
export const secondaryFont = Alex_Brush({ weight: "400", subsets: ['latin'] });
export const tertiaryFont = Poppins({ weight: "400", subsets: ['latin'] });
