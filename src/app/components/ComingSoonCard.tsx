"use client"
import styles from "./styles.module.css";
import { cabinetExtraBold } from "@/app/utils/fonts";
import DeerHackLogo from "@/app/assets/icons/Deerhack26Logo";
import { ReactElement } from "react";
import Counter_wrapper from "../components/counter/Counter"
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Flicker from "@/app/components/Flicker_ComingSoon/flicker"

export default function ComingSoonCard(): ReactElement {
  useGSAP(() => {
  gsap.from('.deerhacklogo',{
    opacity: 0,
    y: 50,
    duration: 2,
    ease: "power2.out",
    delay: 0.3
  })
}, []);
  return (
    <div
      className={`${styles.muted_color} rounded-2xl w-[80vw] lg:w-[35vw] deerhacklogo xl:w-[30vw] h-[32vh] lg:h-[46vh] flex flex-col gap-7 justify-center items-center  border-secondary border-2 backdrop-blur-sm px-3 py-6`} //border
    >
      <DeerHackLogo  height={130} width={309} className="md:h-[162px] md:w-[367px] mt-[-70px] " />


      <div
        className={` ${cabinetExtraBold.className} text-center  lg:text-4xl text-2xl `}
      >
        <div className = "w-full flex justify-center items-center">
       
        </div>
      
          <Flicker/>
        
        
      </div>
    </div>
  );
}
