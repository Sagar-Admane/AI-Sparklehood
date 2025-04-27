import { createContext } from "react";

interface Incident {
    id: number;
    title: string;
    description: string;
    severity: "Low" | "Medium" | "High";
    reported_at: string;
}

interface InciContextType {
    selectedDate: string;
    setSelectedDate: (date: string) => void;
    selectedSeverity: string | undefined;
    setSelectedSeverity: (severity: string | undefined) => void;
    enterTitle: string | null;
    setEnterTitle: (enterTitle: string | null) => void;
    enterDesc: string | null;
    setEnterDecs: (enterDesc: string | null) => void;
    enterSeverity: string | null;
    setEnterSeverity: (enterSeverity: string | null) => void;
    listArr: Incident[];
    setListArr: (list: Incident[] | ((prevList: Incident[]) => Incident[])) => void;
}

const InciContext = createContext<InciContextType | null>(null);

export default InciContext;