// flicker.tsx — export the sequence and accept an onGlowChange callback

"use client";

import { useEffect, useState } from "react";

const SEQUENCE = [
  { glowing: [true,true,true,true,true,true,true,true,true,true,true], duration: 2000 },
  { glowing: [true,true,true,true,true,true,true,false,false,false,false], duration: 80 },
  { glowing: [true,true,true,true,true,true,true,true,true,true,true], duration: 2000 },
  { glowing: [false,true,true,false,true,true,false,false,false,true,true], duration: 80 },
  { glowing: [false,false,false,false,false,false,false,false,false,false,false], duration: 100 },
  { glowing: [true,true,true,true,true,true,true,true,true,true,true], duration: 3000 },
  { glowing: [false,false,false,false,false,false,false,false,false,false,false], duration: 100 },
  { glowing: [true,true,true,true,true,true,true,true,true,true,true], duration: 200 },
  { glowing: [false,false,false,false,false,false,false,false,false,false,false], duration: 100 },
  { glowing: [true,true,true,true,true,true,true,true,true,true,true], duration: 2000 },
  { glowing: [false,false,false,false,false,false,true,true,true,true,true], duration: 80 },
  { glowing: [true,true,true,true,true,true,false,false,false,true,true], duration: 80 },
  { glowing: [true,true,true,true,true,true,true,true,true,true,true], duration: 2000 },
  { glowing: [false,true,true,true,true,true,true,true,true,true,true], duration: 30 },
];

const DISPLAY_TEXT = "COMING SOON";

function hexToRgb(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function getGradientColor(index: number, total: number): string {
  const primary = hexToRgb("#6633CC");
  const secondary = hexToRgb("#F5C144");
  const t = index / Math.max(total - 1, 1);
  const r = Math.round(primary.r + (secondary.r - primary.r) * t);
  const g = Math.round(primary.g + (secondary.g - primary.g) * t);
  const b = Math.round(primary.b + (secondary.b - primary.b) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

function getRgbValues(color: string) {
  const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (match) return { r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]) };
  return { r: 102, g: 51, b: 204 };
}

interface FlickerProps {
  onGlowChange?: (allGlowing: boolean) => void;
}

export default function Flicker({ onGlowChange }: FlickerProps) {
  const [sequenceIndex, setSequenceIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const runSequence = (index: number) => {
      const allGlowing = SEQUENCE[index].glowing.every(Boolean);
      onGlowChange?.(allGlowing);

      timeout = setTimeout(() => {
        const next = (index + 1) % SEQUENCE.length;
        setSequenceIndex(next);
        runSequence(next);
      }, SEQUENCE[index].duration);
    };
    runSequence(0);
    return () => clearTimeout(timeout);
  }, [onGlowChange]);

  const chars = DISPLAY_TEXT.split("").filter((c) => c !== " ");
  const { glowing } = SEQUENCE[sequenceIndex];
  let colorIndex = 0;

  return (
    <span style={{ display: "inline-block", position: "relative" }}>
      {DISPLAY_TEXT.split("").map((char, i) => {
        if (char === " ") return <span key={i} style={{ display: "inline-block", width: "0.3em" }}>&nbsp;</span>;

        const isGlowing = glowing[colorIndex] ?? true;
        const color = getGradientColor(colorIndex, chars.length);
        const { r, g, b } = getRgbValues(color);
        colorIndex++;

        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              position: "relative",
              color: color,
              textShadow: isGlowing
                ? `0 0 4px rgba(${r},${g},${b},0.5), 0 0 10px rgba(${r},${g},${b},0.3), 0 0 25px rgba(${r},${g},${b},0.15)`
                : "none",
              transition: "text-shadow 0.1s ease, filter 0.1s ease",
              filter: isGlowing ? "brightness(1.25)" : "brightness(0.5)",
            }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}