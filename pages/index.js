import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="google-site-verification" content="39d45a3da377d5a6" />
      </Head>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex py-2 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image className="object-cover object-center rounded" src="/images/hero.png"  height={720} width={600} alt="Hero Image" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300">Hello There👋
            </h1>
            <p className="mb-8 text-gray-400 leading-relaxed">I'm Swastik, an undergraduate student. I have a bit of experience in programming. Aside of Programming & all that computer stuff, I also like doing stuff like listening to songs, playing games and chat with my friends.</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Button</button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}