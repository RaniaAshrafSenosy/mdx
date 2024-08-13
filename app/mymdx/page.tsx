import {MDXRemote} from 'next-mdx-remote/rsc'

export default async function Home() {
    try {
      const source = await fetch(`https://raw.githubusercontent.com/mahmudhmh/md-nextjs-parser/main/mdx-test.mdx`);
      if (!source.ok) throw new Error('Failed to fetch Markdown file');
      const mdxSource = await source.text();
      return (
        <main>
          <MDXRemote source={mdxSource} />
        </main>
      );
    } catch (error) {
      console.error('Error loading MDX content:', error);
      return <p>Error loading content.</p>;
    }
  }
  