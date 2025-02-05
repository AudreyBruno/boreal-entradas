import { useTicket } from "@/contexts/ticket-context/ticketContext";
import { Text, View } from "react-native";
import { s } from "./style";

export function Summary() {
  const { savedMasculine, savedFeminine } = useTicket();
  const total = savedMasculine + savedFeminine;
  const price = total * 5;

  return (
    <View style={s.container}>
      <Text style={s.title}>Total de Entradas</Text>

      <View style={s.row}>
        <View style={s.item}>
          <Text style={s.masculine}>{savedMasculine}</Text>
          <Text style={s.label}>Masculino</Text>
        </View>

        <View style={s.item}>
          <Text style={s.feminine}>{savedFeminine}</Text>
          <Text style={s.label}>Feminino</Text>
        </View>
      </View>

      <Text style={s.total}>
        Total: {total} - R${price}
      </Text>
    </View>
  );
}
