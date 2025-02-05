import { PaymentMethods } from "@/components/payment-methods";
import { Summary } from "@/components/summary";
import { Ticket } from "@/components/tickets";
import { TicketProvider } from "@/contexts/ticket-context/ticketContext";
import { View } from "react-native";

export default function Index() {
  return (
    <TicketProvider>
      <View>
        <Summary />

        <Ticket />

        <PaymentMethods />
      </View>
    </TicketProvider>
  );
}
