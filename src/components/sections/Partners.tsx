import * as motion from "motion/react-client";
import { VIEWPORT, fadeUp, fadeUpDelayed } from "@/lib/animations";

const PARTNERS = [
  { name: "ARC Capital", logo: "/img/partners1.png", site: "www.arccap.us" },
  { name: "Knights Capital Partners Sdn", logo: "/img/partners2.png", site: "www.knights.vc" },
  { name: "Liso Consulting", logo: "/img/partners3.png", site: "www.lisoconsulting.com" },
];

export default function Partners() {
  return (
    <section className="partners">
      <div className="container">
        <motion.span
          className="general_title partners_title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          OUR PARTNERS
        </motion.span>
        <div className="partners_row d-flex">
          {PARTNERS.map((partner, index) => (
            <motion.a
              key={partner.name}
              href="#"
              className="partners_item"
              variants={fadeUpDelayed(index * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            >
              <span className="partners_logo">
                <img src={partner.logo} alt={partner.name} />
              </span>
              <p className="partners_name">{partner.name}</p>
              <span className="partners_link">{partner.site}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
