// ComingSoonCard.tsx — border syncs with flicker state

"use client"
import styles from "./styles.module.css";
import { cabinetExtraBold } from "@/app/utils/fonts";
import DeerHackLogo from "@/app/assets/icons/Deerhack26Logo";
import { ReactElement, useState, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Flicker from "@/app/components/Flicker_ComingSoon/flicker";
import Link from "next/link";
import DiscordHero from "./DiscordHero/DiscordHero";
import { cabinetBold, cabinetMedium, satoshiBlack, satoshiBold } from "@/app/utils/fonts";

export default function ComingSoonCard(): ReactElement {
  const [isGlowing, setIsGlowing] = useState(true);

  const handleGlowChange = useCallback((allGlowing: boolean) => {
    setIsGlowing(allGlowing);
  }, []);

  useGSAP(() => {
    gsap.from('.deerhacklogo', {
      opacity: 0,
      y: 30,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.2
    });
  }, []);

  return (
    <div
      className={`${styles.muted_color} rounded-2xl w-[70vw] md:w-[50vw] lg:w-[35vw] deerhacklogo xl:w-[30vw] h-[32vh] md:h-[40vh] lg:h-[46vh] flex flex-col gap-7 justify-center items-center backdrop-blur-sm px-3 py-6`}
      style={{
        border: isGlowing ? "2px solid #FFB401" : "2px solid #B98402 ",
        transition: "border 0.1s ease, box-shadow 0.1s ease",
        boxShadow: isGlowing
          ? "0 0 8px rgba(245,193,68,2), inset 0 0 8px rgba(102,51,204,2)"
          : "0 0 8px rgba(245,193,68,0.2), inset 0 0 8px rgba(102,51,204,0.1)",
      }}
    >
      <DeerHackLogo  />

      <div className={`${cabinetExtraBold.className} text-center lg:text-4xl text-xl md:text-2xl `}>
        <Flicker onGlowChange={handleGlowChange} />
      </div>
       <Link
          href="https://discord.gg/56PAU7sBgZ"
          className="inline-block"
          target="_blank"
        >
          <div className="flex flex-row w-[182px] h-[47px] lg:w-[256px] lg:h-[67px]  md:w-[250px] md:h-[50px] justify-center items-center gap-2 p-4 lg:border-4 border-2 border-grape  rounded-xl text-white mx-auto  hover:bg-grape">
            <DiscordHero />
            <p className={`text-white ${cabinetBold.className} text-bold text-xs md:text-xs lg:text-xl `}>
              Join Our Discord!
            </p>
          </div>
          </Link>
    </div>
  );
}