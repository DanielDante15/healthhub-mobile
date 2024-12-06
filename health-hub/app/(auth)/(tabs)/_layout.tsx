import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title: "Screen 1",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="file" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="agendamento"
        options={{
          title: "Screen 2",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="file-word-o" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
