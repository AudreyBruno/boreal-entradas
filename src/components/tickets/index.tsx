import { useTicket } from "@/contexts/ticket-context/ticketContext";
import { colors } from "@/styles/colors";
import { View } from "react-native";
import { TicketQuantity } from "../ticket-quantity";
import { s } from "./style";

export function Ticket() {
  const {
    masculineQuantity,
    setMasculineQuantity,
    feminineQuantity,
    setFeminineQuantity,
    loadTickets,
    saveTickets,
  } = useTicket();

  return (
    <View style={s.container}>
      <View style={s.topRowContainer}>
        <TicketQuantity
          label="Masculino"
          color={colors.blue[300]}
          backgroundColorButton={colors.blue[500]}
          backgroundColorText={colors.blue[900]}
          quantity={masculineQuantity}
          setQuantity={setMasculineQuantity}
        />
        <TicketQuantity
          label="Feminino"
          color={colors.pink[300]}
          backgroundColorButton={colors.pink[500]}
          backgroundColorText={colors.pink[900]}
          quantity={feminineQuantity}
          setQuantity={setFeminineQuantity}
        />
      </View>
    </View>
  );
}
