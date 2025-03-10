import { StyleSheet, View, Text } from "react-native";

export default function TodoList({ tasks }: { tasks: string[] }) {
  return (
    <View>
      {tasks.map((task) => (
        <Text key={task}>{task}</Text>
      ))}
    </View>
  );
}
