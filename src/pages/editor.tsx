import CoverEditor from "~/components/CoverEditor";
import Head from "next/head";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function EditorPage() {
  return (
    <>
      <Head>
        <title>Meanning Cover Studio</title>
        <meta
          name="description"
          content="Create an original technical-book cover with public-domain historical figures."
        />
        <link href={`${basePath}/favicon.ico`} rel="icon" sizes="any" />
      </Head>
      <div className="min-h-screen bg-gray-100">
        <header className="mx-auto max-w-6xl px-3 pt-4 sm:px-8 sm:pt-5">
          <Link
            className="font-editorial text-2xl font-bold tracking-[-0.08em] text-stone-900"
            href="/"
          >
            MEANNING
          </Link>
        </header>
        <main className="container mx-auto px-3 pb-6 pt-4 sm:p-8">
          <CoverEditor />
        </main>
      </div>
    </>
  );
}
