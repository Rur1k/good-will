const PARTNERS = [
  { name: "ARC Capital", logo: "/img/partners1.png", site: "www.arccap.us" },
  { name: "Knights Capital Partners Sdn", logo: "/img/partners2.png", site: "www.knights.vc" },
  { name: "Liso Consulting", logo: "/img/partners3.png", site: "www.lisoconsulting.com" },
];

export default function Partners() {
  return (
    <section className="partners">
      <div className="container">
        <span className="general_title partners_title">OUR PARTNERS</span>
        <div className="partners_row d-flex">
          {PARTNERS.map((partner) => (
            <a key={partner.name} href="#" className="partners_item">
              <span className="partners_logo">
                <img src={partner.logo} alt={partner.name} />
              </span>
              <p className="partners_name">{partner.name}</p>
              <span className="partners_link">{partner.site}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
