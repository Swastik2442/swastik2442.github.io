import { Metadata } from "next";
import Link from "next/link";
import { siteTitle, twitterUsername, githubUsername, linkedinUsername,  ownerLocation } from "@/config";
import { GitHubLogo, LinkedInLogo, TwitterLogo, LinkIcon, LocationPinIcon } from "@/components/icons";
import OwnerTime from "@/components/ownerTime";
import { BorderStyle } from "@/components/vcBorders";
import BackButton from "@/components/backButton";
import { toRadians } from "@/utils/others";
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
    <BorderStyle tl={toRadians(80)} tr={toRadians(180)} br={toRadians(200)} bl={toRadians(-35)} />
    <main className={styles.main}>
      <div className={styles.socials}>
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
