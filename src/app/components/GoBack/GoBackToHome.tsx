import { cabinetExtraBold } from "@/app/utils/fonts";
import Link from "next/link";
const GoBackToHome = () => {
  return (
    <div>
      <a
        className={`bg-secondary w-48 ${cabinetExtraBold.className} text-center py-3 px-4 text-lg rounded-md`}
        href="/"
      >
        Go Back to home
      </a>
    </div>
  );
};

export default GoBackToHome;
