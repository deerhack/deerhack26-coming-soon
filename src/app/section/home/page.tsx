import MainLogo from "@/app/assets/icons/MainLogo";
import { cabinetBold } from "@/app/utils/fonts";
import ComingSoonCard from "@/app/components/ComingSoonCard";

import styles from "./styles.module.css";

export default function Hero() {
  return (
    <div
      className={`h-screen  ${styles.hero_container} flex justify-center items-center`}
    >
      <ComingSoonCard />
    </div>
  );
}
