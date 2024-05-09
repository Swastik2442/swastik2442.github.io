import { Metadata } from 'next'
import { siteTitle, twitterTag } from '../layout'
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: `Contact | ${siteTitle}`,
  openGraph: {
    title: `Contact | ${siteTitle}`,
  },
}

const githubTag = "Swastik2442", facebookTag = "Swastik2442", linkedinTag = "Swastik2442", instagramTag = "k.wastik";

export default function Contact() {
  return (
    <main className={styles.main}>
      Hello
    </main>
  );
}
