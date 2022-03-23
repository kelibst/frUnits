import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import mainStyles from "../styles/main";
import { RootTabScreenProps } from "../types";

function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <View style={mainStyles.container}>
      <Text style={{ color: "black" }}>Home content</Text>
    </View>
  );
}
export default HomeScreen;
