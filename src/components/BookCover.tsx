import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent,
} from "react";
import Image from "next/image";

export const characters = {
  musicista: {
    label: "Musicista siciliano",
    src: "/people/musicista-veneziano.webp",
  },
  cipriota: {
    label: "Abitante di Cipro",
    src: "/people/abitante-di-cipro.webp",
  },
  calabrese: {
    label: "Contadina calabrese",
    src: "/people/contadina-calabrese.webp",
  },
  romano: {
    label: "Gentiluomo romano",
    src: "/people/gentiluomo-romano.webp",
  },
  tavola12: { label: "Tavola storica 12", src: "/people/tavola-12.webp" },
  tavola14: { label: "Tavola storica 14", src: "/people/tavola-14.webp" },
  tavola32: { label: "Tavola storica 32", src: "/people/tavola-32.webp" },
  tavola54: { label: "Tavola storica 54", src: "/people/tavola-54.webp" },
  tavola66: { label: "Tavola storica 66", src: "/people/tavola-66.webp" },
  tavola78: { label: "Tavola storica 78", src: "/people/tavola-78.webp" },
  tavola90: { label: "Tavola storica 90", src: "/people/tavola-90.webp" },
  tavola100: { label: "Tavola storica 100", src: "/people/tavola-100.webp" },
  tavola102: { label: "Tavola storica 102", src: "/people/tavola-102.webp" },
  tavola114: { label: "Tavola storica 114", src: "/people/tavola-114.webp" },
  v1t10: { label: "Volume I — tavola 10", src: "/people/v1-10.webp" },
  v1t12: { label: "Volume I — tavola 12", src: "/people/v1-12.webp" },
  v1t14: { label: "Volume I — tavola 14", src: "/people/v1-14.webp" },
  v1t16: { label: "Volume I — tavola 16", src: "/people/v1-16.webp" },
  v1t32: { label: "Volume I — tavola 32", src: "/people/v1-32.webp" },
  v1t50: { label: "Volume I — tavola 50", src: "/people/v1-50.webp" },
  v1t60: { label: "Volume I — tavola 60", src: "/people/v1-60.webp" },
  v1t70: { label: "Volume I — tavola 70", src: "/people/v1-70.webp" },
  v3t12: { label: "Volume III — tavola 12", src: "/people/v3-12.webp" },
  v3t33: { label: "Volume III — tavola 33", src: "/people/v3-33.webp" },
  v3t43: { label: "Volume III — tavola 43", src: "/people/v3-43.webp" },
  v3t51: { label: "Volume III — tavola 51", src: "/people/v3-51.webp" },
  v3t61: { label: "Volume III — tavola 61", src: "/people/v3-61.webp" },
  v3t104: { label: "Volume III — tavola 104", src: "/people/v3-104.webp" },
  v3t106: { label: "Volume III — tavola 106", src: "/people/v3-106.webp" },
  v4t12: { label: "Volume IV — tavola 12", src: "/people/v4-12.webp" },
  v4t27: { label: "Volume IV — tavola 27", src: "/people/v4-27.webp" },
  v4t34: { label: "Volume IV — tavola 34", src: "/people/v4-34.webp" },
  v4t36: { label: "Volume IV — tavola 36", src: "/people/v4-36.webp" },
  v4t57: { label: "Volume IV — tavola 57", src: "/people/v4-57.webp" },
  v4t59: { label: "Volume IV — tavola 59", src: "/people/v4-59.webp" },
  v4t83: { label: "Volume IV — tavola 83", src: "/people/v4-83.webp" },
  v4t97: { label: "Volume IV — tavola 97", src: "/people/v4-97.webp" },
  v1t42: { label: "Volume I — tavola 42", src: "/people/v1-42.webp" },
  v1t62: { label: "Volume I — tavola 62", src: "/people/v1-62.webp" },
  v1t72: { label: "Volume I — tavola 72", src: "/people/v1-72.webp" },
  v1t80: { label: "Volume I — tavola 80", src: "/people/v1-80.webp" },
  v1t90: { label: "Volume I — tavola 90", src: "/people/v1-90.webp" },
  v1t92: { label: "Volume I — tavola 92", src: "/people/v1-92.webp" },
  v1t100: { label: "Volume I — tavola 100", src: "/people/v1-100.webp" },
  v1t102: { label: "Volume I — tavola 102", src: "/people/v1-102.webp" },
  v1t112: { label: "Volume I — tavola 112", src: "/people/v1-112.webp" },
  v3t45: { label: "Volume III — tavola 45", src: "/people/v3-45.webp" },
  v3t53: { label: "Volume III — tavola 53", src: "/people/v3-53.webp" },
  v3t63: { label: "Volume III — tavola 63", src: "/people/v3-63.webp" },
  v3t72: { label: "Volume III — tavola 72", src: "/people/v3-72.webp" },
  v3t74: { label: "Volume III — tavola 74", src: "/people/v3-74.webp" },
  v3t96: { label: "Volume III — tavola 96", src: "/people/v3-96.webp" },
  v4t61: { label: "Volume IV — tavola 61", src: "/people/v4-61.webp" },
  v4t85: { label: "Volume IV — tavola 85", src: "/people/v4-85.webp" },
  v4t99: { label: "Volume IV — tavola 99", src: "/people/v4-99.webp" },
  v4t109: { label: "Volume IV — tavola 109", src: "/people/v4-109.webp" },
  v4t111: { label: "Volume IV — tavola 111", src: "/people/v4-111.webp" },
  v3mountedArcher: {
    label: "Volume III — mounted archer",
    src: "/people/v3-165-mounted-archer.webp",
  },
  v3wetschewoke: {
    label: "Volume III — Wetschewoke woman",
    src: "/people/v3-220-wetschewoke.webp",
  },
  v3huonv: {
    label: "Volume III — Huonv musicians",
    src: "/people/v3-280-huonv.webp",
  },
} as const;

export const palettes = {
  brick: { label: "Mattone", color: "#b63c30" },
  indigo: { label: "Indaco", color: "#394c89" },
  ochre: { label: "Ocra", color: "#bd7a22" },
  spruce: { label: "Abete", color: "#28706b" },
  plum: { label: "Prugna", color: "#75405b" },
  cobalt: { label: "Cobalto", color: "#2166a5" },
  terracotta: { label: "Terracotta", color: "#c75d3e" },
  forest: { label: "Foresta", color: "#35644b" },
  charcoal: { label: "Carbone", color: "#3d3d3b" },
  rose: { label: "Rosa antico", color: "#b44c69" },
} as const;

export type CharacterId = keyof typeof characters;
export type PaletteId = keyof typeof palettes;
export type CoverColor = string;

export const getCoverColor = (color: CoverColor) =>
  Object.entries(palettes).find(([id]) => id === color)?.[1].color ?? color;

const getRelativeLuminance = (color: string) => {
  const hex = color.slice(1);
  const channels = [0, 2, 4].map((offset) => {
    const channel = Number.parseInt(hex.slice(offset, offset + 2), 16) / 255;
    return channel <= 0.03928
      ? channel / 12.92
      : ((channel + 0.055) / 1.055) ** 2.4;
  });

  return (
    0.2126 * (channels[0] ?? 0) +
    0.7152 * (channels[1] ?? 0) +
    0.0722 * (channels[2] ?? 0)
  );
};

const getContrastRatio = (firstColor: string, secondColor: string) => {
  const [lighter, darker] = [
    getRelativeLuminance(firstColor),
    getRelativeLuminance(secondColor),
  ].sort((first, second) => second - first);

  return ((lighter ?? 0) + 0.05) / ((darker ?? 0) + 0.05);
};

const getPanelTextColor = (color: string) =>
  getContrastRatio(color, "#ffffff") >= getContrastRatio(color, "#1c1917")
    ? "#ffffff"
    : "#1c1917";

const getTitleColor = (color: string) =>
  getContrastRatio(color, "#ffffff") >= 3 ? color : "#1c1917";

interface BookCoverProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  author: string;
  character: CharacterId;
  compact?: boolean;
  palette: CoverColor;
}

const Figure = ({ character }: Pick<BookCoverProps, "character">) => {
  const { label, src } = characters[character];
  const assetPath = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;

  return (
    <Image
      alt={label}
      className="h-full w-full object-contain object-bottom mix-blend-multiply"
      draggable={false}
      height={1297}
      onDragStart={(event) => event.preventDefault()}
      src={assetPath}
      unoptimized
      width={800}
    />
  );
};

const BookCover = ({
  author,
  character,
  compact = false,
  eyebrow,
  palette,
  subtitle,
  title,
}: BookCoverProps) => {
  const color = getCoverColor(palette);
  const coverStyle = {
    "--cover-color": color,
    "--cover-panel-text-color": getPanelTextColor(color),
    "--cover-title-color": getTitleColor(color),
  } as CSSProperties;
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
  const dragState = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    imageX: number;
    imageY: number;
  } | null>(null);
  const textDragState = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    textX: number;
    textY: number;
  } | null>(null);

  useEffect(() => {
    setImagePosition({ x: 0, y: 0 });
  }, [character]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    dragState.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      imageX: imagePosition.x,
      imageY: imagePosition.y,
    };
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragState.current;
    if (drag?.pointerId !== event.pointerId) return;

    setImagePosition({
      x: Math.max(
        -180,
        Math.min(180, drag.imageX + event.clientX - drag.startX),
      ),
      y: Math.max(
        -240,
        Math.min(240, drag.imageY + event.clientY - drag.startY),
      ),
    });
  };

  const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    dragState.current = null;
  };

  const handleTextPointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);
    textDragState.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      textX: textPosition.x,
      textY: textPosition.y,
    };
  };

  const handleTextPointerMove = (event: PointerEvent<HTMLButtonElement>) => {
    const drag = textDragState.current;
    if (drag?.pointerId !== event.pointerId) return;

    setTextPosition({
      x: Math.max(
        -180,
        Math.min(180, drag.textX + event.clientX - drag.startX),
      ),
      y: Math.max(
        -240,
        Math.min(240, drag.textY + event.clientY - drag.startY),
      ),
    });
  };

  const handleTextPointerEnd = (event: PointerEvent<HTMLButtonElement>) => {
    if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    textDragState.current = null;
  };

  return (
    <article
      className="relative aspect-[5/7] w-full max-w-[500px] overflow-hidden bg-white text-stone-900 shadow-2xl"
      id="meanning-cover"
      style={coverStyle}
    >
      <div className="absolute inset-y-0 left-0 w-[30%] bg-[var(--cover-color)]" />

      <div
        className={`absolute left-[7%] top-[8%] z-10 w-[17%] font-bold leading-tight tracking-[0.16em] text-[var(--cover-panel-text-color)] ${
          compact
            ? "text-[clamp(3px,0.55vw,5px)]"
            : "text-[clamp(7px,1.1vw,11px)]"
        }`}
      >
        {eyebrow}
      </div>
      <div
        className={`absolute left-[36%] right-[7%] z-20 select-none ${
          compact ? "top-[6%]" : "top-[5%]"
        }`}
        style={{
          transform: `translate(${textPosition.x}px, ${textPosition.y}px)`,
        }}
      >
        <h2
          className={`font-editorial font-bold leading-[0.82] tracking-[-0.055em] text-[var(--cover-title-color)] ${
            compact
              ? "text-[clamp(13px,2.4vw,23px)]"
              : "text-[clamp(34px,7vw,68px)]"
          }`}
        >
          {title}
        </h2>
        <p
          className={`max-w-[80%] font-editorial font-light leading-[0.95] text-stone-500 ${
            compact
              ? "mt-3 text-[clamp(8px,1vw,10px)]"
              : "mt-5 text-[clamp(18px,2.8vw,28px)]"
          }`}
        >
          {subtitle}
        </p>
      </div>

      <div
        className={`absolute right-0 z-30 cursor-grab touch-none select-none active:cursor-grabbing ${
          compact
            ? "bottom-[-2%] h-[60%] w-[56%]"
            : "bottom-[-4%] h-[70%] w-[64%]"
        }`}
        onPointerCancel={handlePointerEnd}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        style={{
          transform: `translate(${imagePosition.x}px, ${imagePosition.y}px)`,
        }}
      >
        <Figure character={character} />
      </div>
      <button
        aria-label="Drag title and subtitle"
        className={`absolute left-[36%] right-[7%] z-40 h-[34%] cursor-grab appearance-none border-0 bg-transparent p-0 opacity-0 active:cursor-grabbing ${
          compact ? "top-[6%]" : "top-[5%]"
        }`}
        onPointerCancel={handleTextPointerEnd}
        onPointerDown={handleTextPointerDown}
        onPointerMove={handleTextPointerMove}
        onPointerUp={handleTextPointerEnd}
        style={{
          transform: `translate(${textPosition.x}px, ${textPosition.y}px)`,
        }}
        type="button"
      />
      <div className="absolute bottom-[8%] left-[7%] z-20 w-[17%]">
        <span
          className={`block font-serif italic leading-tight text-[var(--cover-panel-text-color)] ${
            compact
              ? "text-[clamp(4px,0.6vw,6px)]"
              : "text-[clamp(10px,1.6vw,16px)]"
          }`}
        >
          {author}
        </span>
        <span
          className={`block font-editorial font-bold tracking-[0.24em] text-[var(--cover-panel-text-color)] ${
            compact
              ? "mt-2 text-[clamp(4px,0.6vw,6px)]"
              : "mt-6 text-[clamp(10px,1.6vw,16px)]"
          }`}
        >
          MEANNING
        </span>
      </div>
    </article>
  );
};

export default BookCover;
