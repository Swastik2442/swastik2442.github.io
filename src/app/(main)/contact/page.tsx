import { Metadata } from "next";
import Link from "next/link";
import { siteTitle, twitterUsername, githubUsername, linkedinUsername, ownerMail, primaryFont } from "@/app/config";
import { GitHubLogo, LinkedInLogo, TwitterLogo, EmailLogo, LinkIcon } from "@/app/_components/icons";
import BorderStyle from "@/app/_components/vcBordersStyle";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `Contact | ${siteTitle}`,
  openGraph: {
    title: `Contact | ${siteTitle}`,
  },
}

const socialLinks = [
  {
    image: GitHubLogo,
    alt: "github logo",
    label: `@${githubUsername}`,
    loc: `https://github.com/${githubUsername}`
  },
  {
    image: LinkedInLogo,
    alt: "linkedin logo",
    label: `@${linkedinUsername}`,
    loc: `https://linkedin.com/in/${linkedinUsername}`
  },
  {
    image: TwitterLogo,
    alt: "twitter logo",
    label: `@${twitterUsername}`,
    loc: `https://x.com/${twitterUsername}`
  },
  {
    image: EmailLogo,
    alt: "email logo",
    label: ownerMail,
    loc: `mailto:${ownerMail}`
  },
];

export default function Contact() {
  return (
    <>
    <BorderStyle up={1.5} down={-3} left={3.5} right={-3.5} />
    <main className={styles.main}>
      <div className={styles.socials} style={{ paddingBottom: 3 + "vh" }}>
        {socialLinks.map((link, idx) => (
          <div key={idx}>
            <Link href={link.loc} target="_blank">
              <link.image />
              <span>{link.label}</span>
              <LinkIcon className={styles.link} />
            </Link>
          </div>
        ))}
      </div>
      <Link href="/" className={`${primaryFont.className} backButton greenHover textScar`}>back</Link>
    </main>
    </>
  );
}
