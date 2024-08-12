import { Metadata } from 'next'
import { siteTitle, twitterUsername, githubUsername, linkedinUsername } from '../../config'
import BorderStyle from './borderStyle';
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: `Contact | ${siteTitle}`,
  openGraph: {
    title: `Contact | ${siteTitle}`,
  },
}

export default function Contact() {
  return (
    <>
    <BorderStyle/>
    <main className={styles.main}>
      Hello
    </main>
    </>
  );
}
