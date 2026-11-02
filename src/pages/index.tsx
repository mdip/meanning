import Head from "next/head";
import Link from "next/link";
import BookCover, {
  type CharacterId,
  type CoverColor,
} from "~/components/BookCover";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const coverIdeas = [
  {
    title: "Debugging Your Houseplants",
    detail: "A systematic approach to suspiciously quiet ferns",
    character: "v3wetschewoke",
    palette: "forest",
  },
  {
    title: "The Art of Naming Things",
    detail: "Variables, cats, bands, and other irreversible decisions",
    character: "tavola54",
    palette: "rose",
  },
  {
    title: "Meetings That Could Be Emails",
    detail: "A field guide to getting your afternoon back",
    character: "tavola66",
    palette: "ochre",
  },
  {
    title: "Friendly Automation",
    detail: "Teach your computer the chores it already wants to do",
    character: "v3huonv",
    palette: "cobalt",
  },
  {
    title: "Ship It Tomorrow",
    detail: "A practical framework for today’s unreasonable optimism",
    character: "v1t70",
    palette: "brick",
  },
  {
    title: "The Accidental Architect",
    detail: "How one tiny shortcut became a platform",
    character: "v4t57",
    palette: "charcoal",
  },
  {
    title: "CSS for People Who Like Sleep",
    detail: "Layouts that hold together after midnight",
    character: "v3t53",
    palette: "plum",
  },
  {
    title: "Legacy, But Make It Lovely",
    detail: "A patient conversation with code from another era",
    character: "v4t85",
    palette: "spruce",
  },
  {
    title: "No More Tabs, Probably",
    detail: "A bold plan for a calmer browser",
    character: "v1t90",
    palette: "terracotta",
  },
  {
    title: "How to Befriend a Spreadsheet",
    detail: "Rows, columns, and quiet personal growth",
    character: "tavola78",
    palette: "indigo",
  },
  {
    title: "Deploying Good Vibes",
    detail: "Observability for the things that matter most",
    character: "v3mountedArcher",
    palette: "ochre",
  },
  {
    title: "The Gentle Art of Saying No",
    detail: "Rate limits for your calendar",
    character: "v4t36",
    palette: "rose",
  },
  {
    title: "Cookbook-Driven Development",
    detail: "Recipes for applications that do not burn",
    character: "v1t112",
    palette: "forest",
  },
  {
    title: "A Brief History of Undo",
    detail: "Systems, mistakes, and second chances",
    character: "v3t74",
    palette: "cobalt",
  },
] as const satisfies ReadonlyArray<{
  character: CharacterId;
  detail: string;
  palette: CoverColor;
  title: string;
}>;

export default function Home() {
  return (
    <>
      <Head>
        <title>Meanning — Technical covers for curious people</title>
        <meta
          name="description"
          content="Create an original technical-book cover with public-domain historical figures."
        />
        <link href={`${basePath}/favicon.ico`} rel="icon" sizes="any" />
      </Head>
      <div className="min-h-screen bg-[#f7f2e8] text-stone-900">
        <header className="mx-auto flex max-w-[110rem] items-center justify-between px-5 py-5 sm:px-8">
          <Link
            className="font-editorial text-3xl font-bold tracking-[-0.08em]"
            href="/"
          >
            MEANNING
          </Link>
          <Link
            className="rounded-full border border-stone-900 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] transition hover:bg-stone-900 hover:text-[#f7f2e8]"
            href="/editor"
          >
            Make a cover
          </Link>
        </header>

        <main className="mx-auto max-w-[110rem] px-5 pb-16 sm:px-8">
          <section className="border-y border-stone-900 py-10 sm:py-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
              A cover generator for ideas worth keeping
            </p>
            <div className="mt-8 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <h1 className="max-w-5xl font-editorial text-[clamp(3.1rem,7vw,7.5rem)] font-bold leading-[0.77] tracking-[-0.075em]">
                Make your
                <br />
                <span className="text-[#b63c30]">next book</span> cover.
              </h1>
              <p className="max-w-sm text-sm leading-6 text-stone-600 sm:text-base">
                A collection of entirely made-up titles for entirely real ideas.
                Choose one for inspiration, then create your own.
              </p>
            </div>
          </section>

          <section className="py-5 sm:py-8" aria-label="Cover ideas">
            {coverIdeas.map((idea, index) => (
              <article
                className="group grid grid-cols-[2.4rem_minmax(0,1fr)_5.5rem] gap-x-3 border-b border-stone-300 py-4 transition hover:border-stone-900 sm:grid-cols-[4.5rem_minmax(0,1fr)_11rem] sm:gap-x-5 sm:py-6"
                key={idea.title}
              >
                <span className="pt-1 text-xs font-bold tabular-nums text-stone-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <Link href="/editor">
                    <h2 className="font-editorial text-[clamp(1.7rem,3.8vw,4.2rem)] font-bold leading-[0.82] tracking-[-0.065em] transition-colors group-hover:text-[#b63c30]">
                      {idea.title}
                    </h2>
                  </Link>
                  <p className="mt-3 max-w-xl text-xs leading-5 text-stone-500 sm:text-sm">
                    {idea.detail}
                  </p>
                </div>
                <div className="pointer-events-none self-center overflow-hidden shadow-[0_8px_18px_rgba(28,25,23,0.2)]">
                  <BookCover
                    author={`IDEA ${String(index + 1).padStart(2, "0")}`}
                    character={idea.character}
                    compact
                    eyebrow="MEANNING FIELD NOTES"
                    palette={idea.palette}
                    subtitle={idea.detail}
                    title={idea.title}
                  />
                </div>
              </article>
            ))}
          </section>

          <section className="flex flex-col gap-5 border-t border-stone-900 py-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-editorial text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
              Enough inspiration. Make one of your own.
            </p>
            <Link
              className="w-fit rounded-full bg-[#28706b] px-6 py-4 text-sm font-bold text-[#f7f2e8] transition hover:bg-[#b63c30]"
              href="/editor"
            >
              Open the studio
            </Link>
          </section>
        </main>
      </div>
    </>
  );
}
