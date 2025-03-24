import { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

export function TodoForm({ addTask }: { addTask: (task: string) => void }) {
  const [task, setTask] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={(task) => setTask(task)}
        placeholder="Add a new task..."
      />
      <Button
        title="Add Task"
        onPress={() => {
          addTask(task);
          setTask("");
        }}
      />
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
  },
  input: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
  },
});
