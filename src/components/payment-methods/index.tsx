import { useTicket } from "@/contexts/ticket-context/ticketContext";
import { colors } from "@/styles/colors";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./style";

interface PaymentMethod {
  id: string;
  label: string;
  color: string;
}

const paymentMethods: PaymentMethod[] = [
  { id: "credit", label: "Crédito", color: colors.gray[500] },
  { id: "debit", label: "Débito", color: colors.blue[500] },
  { id: "pix", label: "Pix", color: colors.pink[500] },
  { id: "money", label: "Dinheiro", color: colors.green[500] },
];

export function PaymentMethods() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const {
    masculineQuantity,
    feminineQuantity,
    setMasculineQuantity,
    setFeminineQuantity,
    saveTickets,
  } = useTicket();

  const handlePaymentMethodSelection = (methodId: string) => {
    if (masculineQuantity === 0 && feminineQuantity === 0) {
      alert("Adicione ingressos antes de selecionar um método de pagamento!");
      return;
    }

    saveTickets();

    setMasculineQuantity(0);
    setFeminineQuantity(0);

    setPaymentMethod(methodId);
  };

  const chunkMethods = (
    methods: PaymentMethod[],
    chunkSize: number
  ): PaymentMethod[][] => {
    const chunks: PaymentMethod[][] = [];
    for (let i = 0; i < methods.length; i += chunkSize) {
      chunks.push(methods.slice(i, i + chunkSize));
    }
    return chunks;
  };

  return (
    <View>
      {chunkMethods(paymentMethods, 2).map((row, index) => (
        <View key={index} style={s.row}>
          {row.map((method) => (
            <TouchableOpacity
              key={method.id}
              onPress={() => handlePaymentMethodSelection(method.id)}
              style={[s.button, { backgroundColor: method.color }, ,]}
            >
              <Text style={s.buttonText}>{method.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}
