'use client';

import styles from './documentLayout.module.css';
import utilStyles from '../styles/utils.module.css';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { ownerName, ownerLogo, siteHost, siteTitle } from './layout';

export default function DocumentLayout({ children, home }) {
  let currentURL = siteHost + usePathname();
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="theme-color" content="#f8f6f4" />
        <meta name="twitter:card" value="summary" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:image" content={ownerLogo} />
        <meta name="og:title" content={siteTitle} />
        <meta name="og:url" content={currentURL} />
        <meta name="og:image" content={ownerLogo} />
      </Head>
      <header className={styles.header}>
        <>
          <Image priority src="/images/profile.svg" className={utilStyles.borderCircle} height={72} width={72} alt="" />
          <h1 className={utilStyles.heading2Xl}>{ownerName}</h1>
        </>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}