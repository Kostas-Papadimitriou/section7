import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";

const MealsOvewrviewScreen = ({ route }) => {
  //   const route = useRoute();
  const catId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen -{catId}</Text>
    </View>
  );
};

export default MealsOvewrviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
