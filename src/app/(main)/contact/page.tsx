import { Metadata } from "next";
import Link from "next/link";
import { siteTitle, twitterUsername, githubUsername, linkedinUsername,  ownerLocation } from "@/config";
import { GitHubLogo, LinkedInLogo, TwitterLogo, LinkIcon, LocationPinIcon } from "@/components/icons";
import OwnerTime from "@/components/ownerTime";
import BorderStyle from "@/components/vcBordersStyle";
import BackButton from "@/components/backButton";
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
    name: "GitHub",
    label: `@${githubUsername}`,
    loc: `https://github.com/${githubUsername}`
  },
  {
    image: LinkedInLogo,
    name: "LinkedIn",
    label: `@${linkedinUsername}`,
    loc: `https://linkedin.com/in/${linkedinUsername}`
  },
  {
    image: TwitterLogo,
    name: "Twitter",
    label: `@${twitterUsername}`,
    loc: `https://x.com/${twitterUsername}`
  },
];

export default function Contact() {
  return (
    <>
    <BorderStyle up={1.5} down={-3} left={3.5} right={-3.5} />
    <main className={styles.main}>
      <div className={styles.socials} style={{ paddingBottom: 3 + "vh" }}>
        <div className={styles.location}>
          <LocationPinIcon />
          <strong>{ownerLocation} (<OwnerTime />)</strong>
        </div>
        {socialLinks.map((link, idx) => (
          <div key={idx}>
            <Link href={link.loc} target="_blank">
              <span className="sr-only">{link.name}&nbsp;</span>
              <link.image />
              <span><strong>{link.label}</strong></span>
              <LinkIcon className={styles.link} />
            </Link>
          </div>
        ))}
      </div>
      <BackButton />
    </main>
    </>
  );
}
