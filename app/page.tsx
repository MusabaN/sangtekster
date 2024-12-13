import ReactMarkdown from 'react-markdown';
import fs from 'fs';
import path from 'path';

export default function Home() {
  // Read the markdown file at build time
  const songText = fs.readFileSync(
    path.join(process.cwd(), 'data', 'song.md'),
    'utf-8'
  );

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start prose prose-headings:mb-4 prose-h1:text-4xl prose-h2:text-2xl prose-p:whitespace-pre-line dark:prose-invert max-w-none">
        <ReactMarkdown
          components={{
            h1: ({children}) => <h1 className="text-4xl font-bold">{children}</h1>,
            h2: ({children}) => <h2 className="text-2xl font-semibold mt-6">{children}</h2>,
            p: ({children}) => <p className="whitespace-pre-line mt-2">{children}</p>,
          }}
        >
          {songText}
        </ReactMarkdown>
      </main>
    </div>
  );
}