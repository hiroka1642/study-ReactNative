import { StyleSheet } from "react-native";
import { useTailwind } from "tailwind-rn";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import tw from "tailwind-react-native-classnames";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const tailwind = useTailwind();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>

      {/* TaileindCSSを使う */}
      <Text style={tailwind("text-red-600")}>Tab One</Text>

      {/* tailwind-react-native-classnamesを使う */}
      <Text style={tw`bg-indigo-300`}>Tab One</Text>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
