import Link from "next/link";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Blog", href: "/blogs" },

];


const Navbar = () => {

  return (
    <header className="bg-bg1 text-primary">
      <nav className="navbar navbar-default">

        <Link href={"/"}>
            <h1 className="logo">ianOlmstead</h1>
        </Link>

      </nav>
    </header>
  );
};

export default Navbar;