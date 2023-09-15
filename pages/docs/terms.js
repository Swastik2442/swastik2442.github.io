import Head from 'next/head';
import DocumentLayout from '../../components/documentLayout';

const docName = "Terms of Service";

export default function TermsOfService() {
  return (
    <DocumentLayout>
      <Head>
        <title>{docName}</title>
        <meta name="description" content={docName} />
        <meta name="twitter:description" content={docName} />
        <meta name="og:description" content={docName} />
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <h1>{docName} Here</h1>
    </DocumentLayout>
  );
}