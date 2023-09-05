import Link from 'next/link'

interface Navitem {
  text: string
  href: string
  active: boolean
}

const NavItem = (navitems: Navitem) => {
  return (
    <Link href={navitems.href}
        className={`nav__item ${
          navitems.active ? "active" : ""
        }`}>

        {navitems.text}
    </Link>
  );
};

export default NavItem;
