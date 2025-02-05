import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./style";

interface CounterProps {
  label: string;
  color: string;
  backgroundColorButton: string;
  backgroundColorText: string;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export function TicketQuantity({
  label,
  color,
  quantity,
  setQuantity,
  backgroundColorButton,
  backgroundColorText,
}: CounterProps) {
  return (
    <View style={s.itemContainer}>
      <Text style={[s.label, { color: color }]}>{label}</Text>
      <View style={s.counterContainer}>
        <TouchableOpacity
          onPress={() => setQuantity(Math.max(0, quantity - 1))}
          style={[
            s.button,
            s.radiusLeft,
            { backgroundColor: backgroundColorButton },
          ]}
        >
          <Text style={s.buttonText}>-</Text>
        </TouchableOpacity>
        <Text
          style={[
            s.counterText,
            { backgroundColor: backgroundColorText, color: color },
          ]}
        >
          {quantity}
        </Text>
        <TouchableOpacity
          onPress={() => setQuantity(quantity + 1)}
          style={[
            s.button,
            s.radiusRight,
            { backgroundColor: backgroundColorButton },
          ]}
        >
          <Text style={s.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
