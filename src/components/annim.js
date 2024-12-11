import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedCart = () => {
  const [items, setItems] = useState([]);
  const [animation, setAnimation] = useState(null);

  const addToCart = (item, position) => {
    setAnimation({
      id: item.id,
      position, // position initiale de l'élément
    });

    setTimeout(() => {
      setItems([...items, item]);
      setAnimation(null);
    }, 1000); // Durée de l'animation
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Liste de produits */}
      <div style={{ display: "flex", gap: "20px" }}>
        {[1, 2, 3].map((id) => (
          <div
            key={id}
            style={{
              width: "100px",
              height: "100px",
              background: "lightblue",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={(e) =>
              addToCart({ id }, { x: e.clientX, y: e.clientY })
            }
          >
            Produit {id}
          </div>
        ))}
      </div>

      {/* Panier */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "50px",
          height: "50px",
          background: "green",
          borderRadius: "50%",
        }}
      ></div>

      {/* Animation */}
      <AnimatePresence>
        {animation && (
          <motion.div
            style={{
              position: "absolute",
              top: animation.position.y,
              left: animation.position.x,
              width: "100px",
              height: "100px",
              background: "lightblue",
            }}
            initial={{ scale: 1 }}
            animate={{
              x: window.innerWidth - 70, // Ajustez la destination (ex. position du panier)
              y: window.innerHeight - 70,
              scale: 0.3,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 5 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedCart;
