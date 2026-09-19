import Link from "next/link";

const FOOT_LINKS = [
  { href: "/who-we-are", label: "WHO WE ARE" },
  { href: "/what-we-do", label: "WHAT WE DO" },
  { href: "/for-investors", label: "FOR INVESTORS" },
  { href: "/contacts", label: "CONTACT US" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="fot_nav d-flex">
          <Link href="/" className="foot_logo logo">
            <img src="/img/logo.svg" alt="Goodwil capital" />
          </Link>
          <div className="copy copy_resp">© 2021 Goodwill Capital LP</div>
          <ul className="foot_menu d-flex">
            {FOOT_LINKS.map((item) => (
              <li key={item.href} className="foot_menu_item">
                <Link href={item.href} className="foot_menu_link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="foot_menu foot_menu_resp d-flex">
            <div>
              {FOOT_LINKS.slice(0, 2).map((item) => (
                <li key={item.href} className="foot_menu_item">
                  <Link href={item.href} className="foot_menu_link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </div>
            <div>
              {FOOT_LINKS.slice(2).map((item) => (
                <li key={item.href} className="foot_menu_item">
                  <Link href={item.href} className="foot_menu_link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </div>
          </ul>
        </div>
        <div className="copy">© 2021 Goodwill Capital LP</div>
      </div>
    </footer>
  );
}
