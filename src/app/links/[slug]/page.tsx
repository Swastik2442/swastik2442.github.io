import { redirect, notFound } from 'next/navigation';
import { ownerResume, githubUsername, linkedinUsername, twitterUsername } from '@/config';

const links = {
  "resume": ownerResume,
  "github": `https://github.com/${githubUsername}`,
  "linkedin": `https://linkedin.com/in/${linkedinUsername}`,
  "twitter": `https://x.com/${twitterUsername}`,
  "x": `https://x.com/${twitterUsername}`
} as const;

export default async function RedirectLink({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  if (slug in links) {
    const url = links[slug as keyof typeof links];
    if (url)
      redirect(url);
    else
      throw new Error(`${slug} link URL not set`)
  }
  else
    notFound();
}

export function generateStaticParams() {
  return Object.keys(links).map((id) => ({
    slug: id,
  }));
}
