import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface TicketContextData {
  masculineQuantity: number;
  setMasculineQuantity: Dispatch<SetStateAction<number>>;
  feminineQuantity: number;
  setFeminineQuantity: Dispatch<SetStateAction<number>>;
  savedMasculine: number;
  savedFeminine: number;
  saveTickets: () => void;
}

const TicketContext = createContext<TicketContextData | undefined>(undefined);

interface TicketProviderProps {
  children: ReactNode;
}

export function TicketProvider({ children }: TicketProviderProps) {
  const [masculineQuantity, setMasculineQuantity] = useState(0);
  const [feminineQuantity, setFeminineQuantity] = useState(0);
  const [savedMasculine, setSavedMasculine] = useState(0);
  const [savedFeminine, setSavedFeminine] = useState(0);

  const saveTickets = () => {
    setSavedMasculine(masculineQuantity);
    setSavedFeminine(feminineQuantity);
  };

  return (
    <TicketContext.Provider
      value={{
        masculineQuantity,
        setMasculineQuantity,
        feminineQuantity,
        setFeminineQuantity,
        savedMasculine,
        savedFeminine,
        saveTickets,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
}

export function useTicket() {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error("useTicket must be used within a TicketProvider");
  }
  return context;
}
