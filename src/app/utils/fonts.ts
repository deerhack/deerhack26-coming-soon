import localFont from "next/font/local";

const cabinetLight = localFont({
  src: "../assets/fonts/cabinet_grotesk/CabinetGrotesk-Light.woff2",
  variable: "--font-cabinet-light",
  fallback: ["system-ui", "arial"],
  preload: true,
});

const cabinetRegular = localFont({
  src: "../assets/fonts/cabinet_grotesk/CabinetGrotesk-Regular.woff2",
  variable: "--font-cabinet-regular",
  fallback: ["system-ui", "arial"],
  preload: true,
});

const cabinetBold = localFont({
  src: "../assets/fonts/cabinet_grotesk/CabinetGrotesk-Bold.woff2",
  fallback: ["system-ui", "arial"],
  preload: true,
});

const cabinetExtraBold = localFont({
  src: "../assets/fonts/cabinet_grotesk/CabinetGrotesk-Extrabold.woff2",
  fallback: ["system-ui", "arial"],
  preload: true,
  variable: "--font-cabinet-extra-bold",
});

const cabinetBlack = localFont({
  src: "../assets/fonts/cabinet_grotesk/CabinetGrotesk-Black.woff2",
  fallback: ["system-ui", "arial"],
  preload: true,
});

const satoshiRegular = localFont({
  src: "../assets/fonts/satoshi/Satoshi-Regular.woff2",
  fallback: ["system-ui", "arial"],
  preload: true,
});
const satoshiBold = localFont({
  src: "../assets/fonts/satoshi/Satoshi-Bold.woff2",
  fallback: ["system-ui", "arial"],
  preload: true,
});
const satoshiBlack = localFont({
  src: "../assets/fonts/satoshi/Satoshi-Black.woff2",
  fallback: ["system-ui", "arial"],
  preload: true,
});

const cabinetMedium = localFont({
  src: "../assets/fonts/cabinet_grotesk/CabinetGrotesk-Medium.woff2",
  fallback: ["system-ui", "arial"],
  preload: true,
});

export {
  cabinetLight,
  cabinetBold,
  satoshiRegular,
  cabinetExtraBold,
  cabinetBlack,
  cabinetRegular,
  satoshiBold,
  satoshiBlack,
  cabinetMedium,
};
