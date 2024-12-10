import React, { useState } from "react";
import styles from "./User.module.css";
import LoginPage from "./LoginPage";
import SportsShoes from "./assets/sportshoes.webp"; 
import CasualShoes from "./assets/casualshoes.webp";
import RunningShoes from "./assets/runningshoes1.jpeg";
import FormalShoes from "./assets/formalshoes.webp";
import Sneakers from "./assets/sneakers.jpg";
import Boots from "./assets/boots.avif";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <div className={styles.mainContainer}>
          {/* Header Section */}
          <header className={styles.header}>
            <h1>Welcome to Our Shoes Store !!!</h1>
          </header>

          {/* Product Section */}
          <section className={styles.productSection}>
            <div className={styles.productCard}>
              <img src={SportsShoes} alt="Sports Shoes" className={styles.image} />
              <h3>Sports Shoes</h3>
              <p>Price: ₹1500</p>
              <button className={styles.button}>Buy Now</button> 
              <button className={styles.button}>Add</button>
            </div>

            <div className={styles.productCard}>
              <img src={CasualShoes} alt="Casual Shoes" className={styles.image} />
              <h3>Casual Shoes</h3>
              <p>Price: ₹1200</p>
              <button className={styles.button}>Buy Now</button> 
              <button className={styles.button}>Add</button>
            </div>

            <div className={styles.productCard}>
              <img src={RunningShoes} alt="Running Shoes" className={styles.image} />
              <h3>Running Shoes</h3>
              <p>Price: ₹1800</p>
              <button className={styles.button}>Buy Now</button>
              <button className={styles.button}>Add</button>
            </div>

            <div className={styles.productCard}>
              <img src={FormalShoes} alt="Formal Shoes" className={styles.image} />
              <h3>Formal Shoes</h3>
              <p>Price: ₹2000</p>
              <button className={styles.button}>Buy Now</button> 
              <button className={styles.button}>Add</button>
            </div>

            <div className={styles.productCard}>
              <img src={Sneakers} alt="Sneakers" className={styles.image} />
              <h3>Sneakers</h3>
              <p>Price: ₹1400</p>
              <button className={styles.button}>Buy Now</button> 
              <button className={styles.button}>Add</button>
            </div>

            <div className={styles.productCard}>
              <img src={Boots} alt="Boots" className={styles.image} />
              <h3>Boots</h3>
              <p>Price: ₹2500</p>
              <button className={styles.button}>Buy Now</button> 
              <button className={styles.button}>Add</button>
            </div>
          </section>

          {/* Footer Section */}
          <footer className={styles.footer}>
            <p>Contact Us: support@shoestore.com</p>
          </footer>
        </div>
      )}
    </div>
  );
};

export default App;
