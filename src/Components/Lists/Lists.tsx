import { useContext, useEffect, useState } from "react";
import style from "./list.module.scss";
import InciContext from "../../context/context";
import { motion } from "framer-motion";
import list from "./list"

function Lists() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const context = useContext(InciContext);
  if (!context) throw new Error("Context must be used within a Provider");
  
  const { selectedDate, selectedSeverity, listArr, setListArr } = context;
  const [newLis, setNewLis] = useState(listArr);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  useEffect(() => {
    let newList = [...listArr];

    if (selectedDate === "Newest first") {
      newList.sort(
        (a, b) => new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime()
      );
    } else if (selectedDate === "Oldest first") {
      newList.sort(
        (a, b) => new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime()
      );
    }
    if (selectedSeverity !== "Severity" && selectedSeverity !== "All") {
      newList = newList.filter((l) => {
        return l.severity === selectedSeverity;
      });
    }

    setNewLis(newList);
  }, [selectedDate, selectedSeverity, listArr, setListArr]);

  return (
    <div className={style.container}>
      {newLis.map((item) => (
        <motion.div 
          key={item.id} 
          className={style.listItem}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className={style.listHeader}>
            <span className={style.title}>{item.title}</span>
            <span className={`${style.severity} ${style[item.severity.toLowerCase()]}`}>
              {item.severity}
            </span>
          </div>
          <div className={style.date}>
            Reported: {formatDate(item.reported_at)}
          </div>
          <motion.button 
            className={style.viewDetails}
            onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {expandedId === item.id ? 'Hide Details' : 'View Details'}
          </motion.button>
          {expandedId === item.id && (
            <motion.div 
              className={style.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              {item.description}
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default Lists;
