import Link from "next/link";

const NavLinks = () => {
  return (
    <>
      <li className="hover:text-secondary">
        <Link href="/schedule">Schedule</Link>
      </li>
      <li className="hover:text-secondary">
        <Link href="/organizer">Organizers</Link>
      </li>
      <li className="hover:text-secondary">
        <Link href="/winners">Winners</Link>
      </li>
      <li className="hover:text-secondary">
        <Link href="/resources">Resources</Link>
      </li>
    </>
  );
};

export default NavLinks;
