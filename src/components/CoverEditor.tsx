import { useState } from "react";
import html2canvas from "html2canvas";
import BookCover, {
  characters,
  getCoverColor,
  palettes,
  type CoverColor,
  type CharacterId,
  type PaletteId,
} from "./BookCover";

const CoverEditor = () => {
  const [eyebrow, setEyebrow] = useState("FIELD NOTES FOR MODERN WORK");
  const [title, setTitle] = useState("Designing Useful Things");
  const [subtitle, setSubtitle] = useState(
    "A practical guide to thoughtful systems",
  );
  const [author, setAuthor] = useState("YOUR NAME");
  const [character, setCharacter] = useState<CharacterId>("tavola54");
  const [palette, setPalette] = useState<CoverColor>("brick");
  const [isSaving, setIsSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const characterIds = Object.keys(characters) as CharacterId[];
  const paletteIds = Object.keys(palettes) as PaletteId[];

  const chooseRandomStyle = () => {
    const nextCharacter =
      characterIds[Math.floor(Math.random() * characterIds.length)];
    const nextPalette =
      paletteIds[Math.floor(Math.random() * paletteIds.length)];

    if (nextCharacter) setCharacter(nextCharacter);
    if (nextPalette) setPalette(nextPalette);
  };

  const saveCover = async () => {
    const cover = document.getElementById("meanning-cover");
    if (!cover) return;

    setIsSaving(true);
    setSaveError(null);
    try {
      const canvas = await html2canvas(cover, {
        backgroundColor: null,
        scale: 2,
      });
      const link = document.createElement("a");
      link.download = "meanning-cover.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Unable to export cover:", error);
      setSaveError(
        "Unable to export the cover. Refresh the page and try again.",
      );
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:gap-8">
      <section className="w-full font-mono md:w-1/2">
        <h1 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
          Meanning Cover Generator
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-6 text-gray-600">
          Create technical book covers with public-domain costume plates from
          1788.
        </p>

        <div className="mt-5 max-w-xl space-y-4 sm:mt-7">
          <label className="block text-sm font-semibold text-gray-700">
            Top line
            <input
              className="mt-1 w-full rounded border-gray-300 text-base text-gray-900 shadow-sm focus:border-gray-600 focus:ring-gray-600"
              maxLength={54}
              onChange={(event) => setEyebrow(event.target.value)}
              value={eyebrow}
            />
          </label>
          <label className="block text-sm font-semibold text-gray-700">
            Title
            <input
              className="mt-1 w-full rounded border-gray-300 text-base text-gray-900 shadow-sm focus:border-gray-600 focus:ring-gray-600"
              maxLength={58}
              onChange={(event) => setTitle(event.target.value)}
              value={title}
            />
          </label>
          <label className="block text-sm font-semibold text-gray-700">
            Subtitle
            <textarea
              className="mt-1 w-full rounded border-gray-300 text-base text-gray-900 shadow-sm focus:border-gray-600 focus:ring-gray-600"
              maxLength={120}
              onChange={(event) => setSubtitle(event.target.value)}
              rows={3}
              value={subtitle}
            />
          </label>
          <label className="block text-sm font-semibold text-gray-700">
            Author
            <input
              className="mt-1 w-full rounded border-gray-300 text-base text-gray-900 shadow-sm focus:border-gray-600 focus:ring-gray-600"
              maxLength={42}
              onChange={(event) => setAuthor(event.target.value)}
              value={author}
            />
          </label>

          <div>
            <label
              className="block text-sm font-semibold text-gray-700"
              htmlFor="character"
            >
              Historical figure
            </label>
            <div className="mt-1 flex items-stretch gap-2">
              <select
                className="min-w-0 flex-1 rounded border-gray-300 text-sm text-gray-900 shadow-sm focus:border-gray-600 focus:ring-gray-600"
                id="character"
                onChange={(event) =>
                  setCharacter(event.target.value as CharacterId)
                }
                value={character}
              >
                {Object.entries(characters).map(([id, { label }]) => (
                  <option key={id} value={id}>
                    {label}
                  </option>
                ))}
              </select>
              <button
                className="rounded border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-800 transition hover:bg-gray-100"
                onClick={chooseRandomStyle}
                type="button"
              >
                Randomize
              </button>
            </div>
          </div>

          <fieldset>
            <legend className="text-sm font-semibold text-gray-700">
              Color
            </legend>
            <div className="mt-2 flex flex-wrap gap-2 sm:gap-3">
              {Object.entries(palettes).map(([id, { label, color }]) => (
                <button
                  aria-label={label}
                  className={`h-8 w-8 rounded-full border-2 sm:h-9 sm:w-9 ${
                    palette === id
                      ? "border-gray-900 ring-2 ring-gray-300 ring-offset-2"
                      : "border-transparent"
                  }`}
                  key={id}
                  onClick={() => setPalette(id)}
                  style={{ backgroundColor: color }}
                  type="button"
                />
              ))}
              <label
                className="relative h-8 w-8 cursor-pointer overflow-hidden rounded-full border-2 border-dashed border-gray-500 bg-white sm:h-9 sm:w-9"
                title="Custom color"
              >
                <span className="sr-only">Custom color</span>
                <input
                  aria-label="Custom color"
                  className="absolute -inset-1 h-11 w-11 cursor-pointer"
                  onChange={(event) => setPalette(event.target.value)}
                  type="color"
                  value={getCoverColor(palette)}
                />
              </label>
            </div>
          </fieldset>

          <button
            className="w-full rounded bg-gray-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 disabled:cursor-wait disabled:opacity-70"
            disabled={isSaving}
            onClick={saveCover}
            type="button"
          >
            {isSaving ? "Exporting..." : "Download PNG"}
          </button>
          {saveError && (
            <p className="text-sm text-red-700" role="alert">
              {saveError}
            </p>
          )}
          <p className="text-xs leading-5 text-gray-500">
            All figures are public-domain costume plates from 1788. Sources and
            attribution are included in this project.
          </p>
          <p className="text-xs leading-5 text-gray-500">
            Drag the figure directly. Drag anywhere over the title and subtitle
            block to reposition both together.
          </p>
        </div>
      </section>

      <section
        className="order-first flex w-full items-start justify-center md:order-none md:w-1/2"
        aria-label="Preview"
      >
        <div className="w-full max-w-[380px] border border-gray-300 sm:max-w-[500px]">
          <BookCover
            author={author}
            character={character}
            eyebrow={eyebrow}
            palette={palette}
            subtitle={subtitle}
            title={title}
          />
        </div>
      </section>
    </div>
  );
};

export default CoverEditor;
