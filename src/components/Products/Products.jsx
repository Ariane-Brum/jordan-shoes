import styles from "./Products.module.css";
import { productsImg } from "../../produtcsImg";

const Products = () => {
  return (
    <section className={styles.products} aria-label="Produtos em destaque">
      <div className="container">
        <div className={styles.productsInfo}>
          <h2>Destaques</h2>
          <p>
            Frete grátis e chinelo de brinde é aqui, aproveite por tempo
            limitado.{" "}
          </p>
        </div>

        <div className={styles.productsWrapper}>
          {productsImg.map((product) => (
            <div className={styles.product} key={product.id} data-aos="fade-up">
              <img src={product.img} alt="Imagem de um tênis." />
              <span>{product.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
