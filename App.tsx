import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import TodoList from "./components/TodoList";
import tasks from "./data/tasks";
import { TodoForm } from "./components/TodoForm";

export default function App() {
  const [tasksList, setTasksList] = useState(tasks);
  const addTask = (task: any) => {
    setTasksList((tasksList: string[]) => [task, ...tasksList]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Tasks</Text>
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasksList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    padding: 80,
  },
  text: {
    fontSize: 50,
  },
});
