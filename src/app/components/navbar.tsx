import Link from "next/link";

function Nav() {
  return (
    <div>
      <div className="navbar">
        <Link href="/">HOME</Link>
        <Link href="/about"> ABOUT </Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}
export default Nav;
