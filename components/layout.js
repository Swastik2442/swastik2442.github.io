import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const ownerName = 'Swastik Kulshreshtha', ownerBio = 'Yet another Human from Earth', ownerLogo = 'https://avatars.githubusercontent.com/u/135314424', siteHost = 'https://swastik2442.github.io', siteTitle = ownerName;

const twitterTag = 'swastik2442', facebookTag = 'Swastik2442', linkedinTag = 'Swastik2442', instagramTag = 'k.wastik';

export default function Layout({ children, home }) {
  const router = useRouter();
  const handleRefresh = () => {
    router.reload();
  };
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="mobile-web-app-capable" content="no" />
        <meta name="theme-color" content="#f8f6f4" />
        <meta name="description" content={ownerBio} />
        <meta name="twitter:card" value="summary" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={ownerBio} />
        <meta name="twitter:image" content={ownerLogo} />
        <meta name="og:title" content={siteTitle} />
        <meta name="og:url" content={siteHost} />
        <meta name="og:description" content={ownerBio} />
        <meta name="og:image" content={ownerLogo} />
      </Head>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-300 mb-4 md:mb-0">
            <Image priority src="/images/profile.svg" className="w-10 h-10 text-white p-2 bg-blue-400 rounded-full" height={24} width={24} alt="SK Logo" />
            <span className={utilStyles.defaultCursor+" ml-3 text-xl"}>{ownerName}</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {home ? (
              <>
                <a href='#home' className={utilStyles.hoverUnderlineAnimation+" mr-5 hover:text-gray-400"}>Home</a>
                <a href='#about' className={utilStyles.hoverUnderlineAnimation+" mr-5 hover:text-gray-400"}>About</a>
                <a href='#projects' className={utilStyles.hoverUnderlineAnimation+" mr-5 hover:text-gray-400"}>Projects</a>
                <a href='#contact' className={utilStyles.hoverUnderlineAnimation+" mr-5 hover:text-gray-400"}>Contact</a>
              </>
            ) : (
              <>
                <a href='/#home' className={utilStyles.hoverUnderlineAnimation+" mr-5 hover:text-gray-400"}>Home</a>
                <a href='/#about' className={utilStyles.hoverUnderlineAnimation+" mr-5 hover:text-gray-400"}>About</a>
                <a href='/#projects' className={utilStyles.hoverUnderlineAnimation+" mr-5 hover:text-gray-400"}>Projects</a>
                <a href='/#contact' className={utilStyles.hoverUnderlineAnimation+" mr-5 hover:text-gray-400"}>Contact</a>
              </>
            )}
          </nav>
          <button className="inline-flex" onClick={handleRefresh} title='Made with Next.js'>
            <Image src="/images/next.ico" className="w-10 h-10 p-1 rounded-full" height={24} width={24} alt="Next.js" />
          </button>
        </div>
      </header>
      <div className={styles.container}>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">← Back to home</Link>
          </div>
        )}
      </div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-300">
            <Image priority src="/images/profile.svg" className="w-10 h-10 text-white p-2 bg-blue-400 rounded-full" height={24} width={24} alt="SK Logo" />
            <span className={utilStyles.defaultCursor+" ml-3 text-xl"}>{ownerName}</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 {ownerName} —
            <a href={"https://twitter.com/" + twitterTag} className="text-gray-500 ml-1" rel="noopener noreferrer" target="_blank">@{twitterTag}</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href={"https://www.facebook.com/" + facebookTag} className="text-gray-500" rel="noopener noreferrer" target="_blank">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href={"https://www.linkedin.com/in/" + linkedinTag} className="ml-3 text-gray-500" rel="noopener noreferrer" target="_blank">
              <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
            <a href={"https://twitter.com/" + twitterTag} className="ml-3 text-gray-500" rel="noopener noreferrer" target="_blank">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 30 30" width="24px" height="24px">
                <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"/>
              </svg>
            </a>
            <a href={"https://www.instagram.com/" + instagramTag} className="ml-3 text-gray-500" rel="noopener noreferrer" target="_blank">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}