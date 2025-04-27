import Navbar from "../Navbar/Navbar"
import style from "./landing.module.scss"
import left_img from "../../Assets/left-img.svg"
import right_img from "../../Assets/right-img.svg"
import { FaAngleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Landing() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/list");
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className={style.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={style.header}>
        <Navbar />
      </div>
      <div className={style.hero}>
        <motion.div 
          className={style.left}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src={left_img} alt="" />
        </motion.div>
        <div className={style.center}>
          <motion.p 
            className={style.title}
            variants={itemVariants}
          >
            Empowering safe AI, <br /> one step at a time
          </motion.p>
          <br />
          <motion.p 
            className={style.desc}
            variants={itemVariants}
          >
            Your hub for hypothetical AI safety reporting—built
            <br />to encourage transparency, collaboration, and improvement..
          </motion.p>
          <div className={style.button}>
            <motion.button 
              onClick={handleClick}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Dashboard <FaAngleRight />
            </motion.button>
          </div>
        </div>
        <motion.div 
          className={style.right}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src={right_img} alt="" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Landing;
