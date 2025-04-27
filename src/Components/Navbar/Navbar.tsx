import { useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import style from "./navbar.module.scss";
import { motion } from "framer-motion";

function Navbar() {
  const navigate = useNavigate();

  function handleDashboardClick() {
    navigate("/list");
  }

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className={style.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={style.left}>
        <motion.div 
          className={style.logo}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src={logo} alt="" />
          <p>scout</p>
        </motion.div>
        <motion.div 
          className={style.nav}
          variants={itemVariants}
        >
          <motion.p
            whileHover={{ scale: 1.1, color: "#4a90e2" }}
            transition={{ duration: 0.2 }}
          >
            Features
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.1, color: "#4a90e2" }}
            transition={{ duration: 0.2 }}
          >
            Pricing
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.1, color: "#4a90e2" }}
            transition={{ duration: 0.2 }}
          >
            Docs
          </motion.p>
          <motion.p
            whileHover={{ scale: 1.1, color: "#4a90e2" }}
            transition={{ duration: 0.2 }}
          >
            Blogs
          </motion.p>
        </motion.div>
      </div>
      <motion.div 
        className={style.right}
        variants={itemVariants}
      >
        <motion.button 
          onClick={handleDashboardClick}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "white",
            color: "black"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Dashboard
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default Navbar;
