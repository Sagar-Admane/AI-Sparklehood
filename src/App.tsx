import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import Incident from "./Components/Create/Incident";
import Home from "./Components/Home/Home";
import Landing from "./Components/Landing/Landing";
import InciContext from "./context/context";
import { useState } from "react";
import list from "./Components/Lists/list";

function App() {
  const [selectedDate, setSelectedDate] = useState("Select Date");
  const [selectedSeverity, setSelectedSeverity] = useState<string | undefined>("Severity");
  const [enterTitle, setEnterTitle] = useState<string | null>(null);
  const [enterDesc, setEnterDecs] = useState<string | null>(null);
  const [enterSeverity, setEnterSeverity] = useState<string | null>(null);
  const [listArr, setListArr] = useState(list);

  return (
    <InciContext.Provider value={{
      selectedDate, 
      setSelectedDate, 
      selectedSeverity, 
      setSelectedSeverity, 
      enterTitle, 
      setEnterTitle, 
      enterDesc, 
      setEnterDecs, 
      setEnterSeverity, 
      enterSeverity,
      listArr,
      setListArr
    }}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/list" element={<Home />} />
            <Route path="/create" element={<Incident />} />
          </Routes>
        </div>
      </BrowserRouter>
    </InciContext.Provider>
  )
}

export default App
