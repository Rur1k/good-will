import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import { VIEWPORT, fadeUp, fadeUpDelayed } from "@/lib/animations";

const VALUES = [
  {
    title: "Legality",
    text: "We pay special attention to legal aspects and closely monitor compliance with all legal norms",
    image: "/img/animtion_1.gif",
    animateClassName: "values_animate",
  },
  {
    title: "High income",
    text: "We choose only effective instruments that guarantee long term income",
    image: "/img/animtion_2.gif",
    animateClassName: "values_animate values_animate_center",
  },
  {
    title: "Team",
    text: "We have a wide range of skills and experience cooperating with many well-known industry players",
    image: "/img/move_circle.gif",
    animateClassName: "values_animate values_animate3 d-flex",
  },
];

// Icon pops in on a spring after its row has started to rise
const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260, damping: 14, delay: 0.3 } },
};

export default function Values() {
  return (
    <section className="values">
      <div className="container">
        <motion.span
          className="general_title values_title"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          values
        </motion.span>
        <div className="values_group">
          {/* Each row triggers on its own (rows are far apart on mobile); the delay staggers them on desktop */}
          {VALUES.map((item, index) => (
            <motion.div
              key={item.title}
              id={`values_item_${index + 1}`}
              className="values_item d-flex"
              variants={fadeUpDelayed(index * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
            >
              <motion.div className={item.animateClassName} variants={iconVariants}>
                <img src={item.image} alt="" />
              </motion.div>
              <h2 className="values_item_title">{item.title}</h2>
              <p className="values_text">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
