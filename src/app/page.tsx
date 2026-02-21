import { ReactElement } from "react";
import ComingSoonCard from "@/app/components/ComingSoonCard";
import styles from "./styles.module.css";
import Hero from "./section/home/page";
import Navbar from "@/app/components/Navbar/Navbar";
export default function ComingSoonPage(): ReactElement {
  return (
    <>
    <Navbar/>
      <Hero />
    </>
  );
}
