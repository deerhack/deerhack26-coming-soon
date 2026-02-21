"use client";

import { useEffect, useState } from "react";

// true = glowing, false = dim (lost glow / flickered off)
const SEQUENCE = [
  { glowing: [true,true,true,true,true,true,true,true,true,true,true], duration: 2000 },  // COMING SOON ! all on
  { glowing: [true,true,true,true,true,true,true,false,false,false,false], duration: 200 },  // COMING SOoN ! — o dim
  { glowing: [true,true,true,true,true,true,true,true,true,true,true], duration: 2000 },  // COMING SOON ! all on
  { glowing: [false,true,true,false,true,true,false,false,false,true,true], duration: 200 }, // coMING Soon ! — co,S,oo dim
  { glowing: [false,false,false,false,false,false,false,false,false,false,false], duration: 200 }, // coMING Soon ! — co,S,oo dim
  { glowing: [true,true,true,true,true,true,true,true,true,true,true], duration: 200 },
  { glowing: [false,false,false,false,false,false,false,false,false,false,false], duration: 200 },
  { glowing: [true,true,true,true,true,true,true,true,true,true,true], duration: 2000 },
  { glowing: [true,true,true,true,true,true,false,false,false,true,true], duration: 200 },  // COMING soon ! — oon dim
  { glowing: [true,true,true,true,true,true,true,true,true,true,true], duration: 2000 },
  { glowing: [false,true,true,true,true,true,true,true,true,true,true], duration: 1000 },   // CoMING SOON ! — C dim
];
// const SEQUENCE = [
//   { glowing: [true,true,true,true,true,true,true,true,true,true,true], duration: 200 },  // COMING SOON ! all on
//   { glowing: [true,true,true,true,true,true,true,false,false,true,true], duration: 200 },  // COMING SooN ! — oo dim
//   { glowing: [true,true,true,true,true,true,true,true,true,true,true], duration: 2000 },  // COMING SOON ! all on
//   { glowing: [false,false,true,true,true,true,false,false,false,true,true], duration: 300 }, // coMING Soon ! — co,S,oo dim
//   { glowing: [true,true,true,true,true,true,true,true,true,true,true], duration: 2000 },
//   { glowing: [true,true,true,true,true,true,false,false,false,true,true], duration: 200 },  // COMING soon ! — oon dim
//   { glowing: [true,true,true,true,true,true,true,true,true,true,true], duration: 2000 },
//   { glowing: [false,true,true,true,true,true,true,true,true,true,true], duration: 200 },   // CoMING SOON ! — C dim
// ];

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

// Helper to get RGB values from a color string
function getRgbValues(color: string): { r: number; g: number; b: number } {
  const match = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
  if (match) {
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3])
    };
  }
  return { r: 102, g: 51, b: 204 }; // fallback to primary color
}

export default function Flicker() {
  const [sequenceIndex, setSequenceIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const runSequence = (index: number) => {
      timeout = setTimeout(() => {
        const next = (index + 1) % SEQUENCE.length;
        setSequenceIndex(next);
        runSequence(next);
      }, SEQUENCE[index].duration);
    };
    runSequence(0);
    return () => clearTimeout(timeout);
  }, []);

  const chars = DISPLAY_TEXT.split("").filter((c) => c !== " " && c !== "!");
  const { glowing } = SEQUENCE[sequenceIndex];

  // assign gradient color index only to non-space, non-punctuation chars
  let colorIndex = 0;

  return (
    <span style={{ display: "inline-block", position: "relative" }}>
      {DISPLAY_TEXT.split("").map((char, i) => {
        if (char === " ") return <span key={i} style={{ display: "inline-block", width: "0.3em" }}>&nbsp;</span>;

        const isGlowing = glowing[i] ?? true;
        const color = getGradientColor(colorIndex, chars.length);
        const { r, g, b } = getRgbValues(color);

        // only increment colorIndex for actual letters (not spaces, already filtered above)
        if (char !== "!") colorIndex++;

        return (
          <span
            key={i}
            style={{
              display: "inline-block",
              position: "relative",
              color: color,
              // textShadow: isGlowing
              //   ? `
              //     0 0 5px rgba(${r}, ${g}, ${b}, 0.8),
              //     0 0 10px rgba(${r}, ${g}, ${b}, 0.6),
              //     0 0 15px rgba(${r}, ${g}, ${b}, 0.4),
              //     0 0 20px rgba(${r}, ${g}, ${b}, 0.3)
              //   `
              //   : "none",

              textShadow: isGlowing
              ? `
                  0 0 4px rgba(${r}, ${g}, ${b}, 0.5),
                  0 0 10px rgba(${r}, ${g}, ${b}, 0.3),
                  0 0 25px rgba(${r}, ${g}, ${b}, 0.15)
                  `
                : "none",
              transition: "text-shadow 0.1s ease, filter 0.1s ease, transform 0.1s ease",
              filter: isGlowing ? "brightness(1.25)" : "brightness(0.5)",

              // filter: isGlowing ? "brightness(1.08)" : "brightness(0.6)",
              transform: isGlowing ? "scale(1.01)" : "scale(1)",
            }}
          >
            {char}
          </span>
        );
      })}
    </span>
  );
}