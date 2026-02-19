import styles from "./styles.module.css";
import { cabinetExtraBold } from "@/app/utils/fonts";
import DeerHackLogo from "@/app/assets/icons/Deerhack26Logo";
import { ReactElement } from "react";
import Counter_wrapper from "../components/counter/Counter"

export default function ComingSoonCard(): ReactElement {
  return (
    <div
      className={`${styles.muted_color} rounded-[0.65rem] w-[80vw] lg:w-[35vw] xl:w-[30vw] h-[32vh] lg:h-[46vh] flex flex-col gap-7 justify-center items-center  border-secondary border-2 backdrop-blur-sm px-3 py-6`}
    >
      <DeerHackLogo height={110} width={160} className="md:h-[162px] md:w-[367px]" />


      <div
        className={` ${cabinetExtraBold.className} text-center lg:text-4xl text-2xl text-primary-gradient-color`}
      >
        <div className = "w-full flex justify-center items-center">
          <Counter_wrapper />
        </div>
        Coming Soon !
      </div>
    </div>
  );
}
