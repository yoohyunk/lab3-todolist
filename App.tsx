import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import TodoList from "./components/TodoList";

export default function App() {
  const [tasks, setTasks] = useState<string[]>([
    "Do laundry",
    "Go to gym",
    "Walk dog",
  ]);

  return (
    <View style={styles.container}>
      <TodoList tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
