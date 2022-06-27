import React, { useEffect, useRef } from "react";
import styles from "./Parallax.module.css";
import Typed from "typed.js";
const Parallax = () => {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        `O tênis Jordan é fruto de uma velha e forte parceria entre a Nike,<br/>
        e o jogador Michael Jordan.`,
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <section className={styles.parallaxBg} aria-label="Introdução">
      <div className="container">
        <div className={styles.parallaxWrapper}>
          <div className={styles.parallaxInfo} data-aos="fade-down">
            <h2>A melhor loja de Jordan</h2>
            <span ref={el}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parallax;
