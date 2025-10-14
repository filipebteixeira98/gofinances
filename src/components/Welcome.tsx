import React from "react"
import { StyleSheet, Text, View } from "react-native"

interface WelcomeProps {
  title: string
}

export function Welcome({ title }: WelcomeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    color: "#fff",
  },
})
