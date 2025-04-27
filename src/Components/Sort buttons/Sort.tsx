import React, { useContext, useState } from 'react'
import style from "./sort.module.scss"
import { useNavigate } from 'react-router-dom';
import InciContext from '../../context/context';
import { motion } from 'framer-motion';

function Sort() {
  const [dateOpen, setDateOpen] = useState(false);
  const [severityOpen, setSeverityOpen] = useState(false);
  // const [selectedDate, setSelectedDate] = useState("Date");
  const {selectedDate, setSelectedDate, selectedSeverity, setSelectedSeverity} = useContext(InciContext)!;
  const navigate = useNavigate();

  const dateOptions = [
    { value: "1", label: "Newest first" },
    { value: "2", label: "Oldest first" }
  ];

  const severityOptions = [
    { value: "1", label: "All" },
    { value: "2", label: "Low" },
    { value: "3", label: "Medium" },
    { value: "4", label: "High" }
  ];

  const handleAddIncident = () => {
    navigate('/create', { replace: true });
    window.location.reload();
  };

  return (
    <div className={style.container}>
      <div style={{display:'flex', gap: "18px"}}>
        <div className={style.dropdown}>
          <motion.div 
            className={style.dropdownHeader} 
            onClick={() => setDateOpen(!dateOpen)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{selectedDate}</span>
            <motion.span 
              className={`${style.arrow} ${dateOpen ? style.arrowUp : ''}`}
              animate={{ rotate: dateOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              ▼
            </motion.span>
          </motion.div>
          {dateOpen && (
            <motion.div 
              className={style.dropdownList}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {dateOptions.map((option) => (
                <motion.div
                  key={option.value}
                  className={style.dropdownItem}
                  onClick={() => {
                    setSelectedDate(option.label);
                    setDateOpen(false);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {option.label}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        <div className={style.dropdown}>
          <motion.div 
            className={style.dropdownHeader}
            onClick={() => setSeverityOpen(!severityOpen)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>{selectedSeverity}</span>
            <motion.span 
              className={`${style.arrow} ${severityOpen ? style.arrowUp : ''}`}
              animate={{ rotate: severityOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              ▼
            </motion.span>
          </motion.div>
          {severityOpen && (
            <motion.div 
              className={style.dropdownList}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {severityOptions.map((option) => (
                <motion.div
                  key={option.value}
                  className={style.dropdownItem}
                  onClick={() => {
                    setSelectedSeverity(option.label);
                    setSeverityOpen(false);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {option.label}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
      <div className={style.create}>
        <motion.button 
          onClick={handleAddIncident}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Add Incident <span style={{fontSize:"22px"}}>+</span>
        </motion.button>
      </div>
    </div>
  )
}

export default Sort
