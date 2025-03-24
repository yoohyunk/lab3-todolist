import { StyleSheet, View, Text } from "react-native";

export default function TodoList({ tasks }: { tasks: string[] }) {
  return (
    <View style={styles.container}>
      {tasks.map((task, index) => (
        <Text key={index} style={styles.text}>
          {task}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
  },
  text: {
    fontSize: 20,
  },
});
