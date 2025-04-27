import Navbar from "../Navbar/Navbar"
import style from "./incident.module.scss"
import right from "../../Assets/form_right.svg"
import { useContext, useState } from "react";
import InciContext from "../../context/context";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Incident() {
    const context = useContext(InciContext);
    if (!context) throw new Error("Context must be used within a Provider");

    const { setListArr } = context;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [severity, setSeverity] = useState<"High" | "Medium" | "Low">("High");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const newIncident = {
            id: Date.now(), // Using timestamp as a simple unique ID
            title,
            description,
            severity,
            reported_at: new Date().toISOString()
        };

        setListArr(prevList => [...prevList, newIncident]);
        navigate("/list")
        
        // Reset form
        setTitle("");
        setDescription("");
        setSeverity("High");
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
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
            <div className={style.nav}>
                <Navbar />
            </div>
            <div className={style.form}>
                <motion.div 
                    className={style.left}
                    variants={itemVariants}
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Help Us By sharing your incident . . .
                    </motion.p>
                    <form onSubmit={handleSubmit}>
                        <motion.input 
                            type="text" 
                            placeholder="Enter Your Title" 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            variants={itemVariants}
                            whileFocus={{ scale: 1.02 }}
                        />
                        <motion.input 
                            type="text" 
                            placeholder="Enter Description" 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                            variants={itemVariants}
                            whileFocus={{ scale: 1.02 }}
                        />
                        
                        <motion.div 
                            className={style["severity-options"]}
                            variants={itemVariants}
                        >
                            <label>Severity :</label>
                            <motion.label
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <input 
                                    type="radio" 
                                    name="severity" 
                                    value="High" 
                                    checked={severity === "High"}
                                    onChange={() => setSeverity("High")}
                                />
                                High
                            </motion.label>
                            <motion.label
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <input 
                                    type="radio" 
                                    name="severity" 
                                    value="Medium"
                                    checked={severity === "Medium"}
                                    onChange={() => setSeverity("Medium")}
                                />
                                Medium
                            </motion.label>
                            <motion.label
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <input 
                                    type="radio" 
                                    name="severity" 
                                    value="Low"
                                    checked={severity === "Low"}
                                    onChange={() => setSeverity("Low")}
                                />
                                Low
                            </motion.label>
                        </motion.div>

                        <motion.button 
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Submit
                        </motion.button>
                    </form>
                </motion.div>
                <motion.div 
                    className={style.right}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <img src={right} alt="" height={500} width={500} />
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Incident;
