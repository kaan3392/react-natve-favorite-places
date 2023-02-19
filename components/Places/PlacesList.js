import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constant/colors";
import PlaceItem from "./PlaceItem";

export default function PlacesList({ places }) {

  const navigation =useNavigation()

  function selectPlaceHandler(id){
    navigation.navigate("PlaceDetails",{
      placeId:id
    })
  }

  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer} >
        <Text style={styles.fallbackText} >No places added yet - start adding some!</Text>
      </View>
    );
  }

  return (
    <FlatList
    style={styles.list}
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PlaceItem place={item} onSelect= {selectPlaceHandler} />}
    />
  );
}

const styles = StyleSheet.create({
  list:{
    margin:24
  },
  fallbackContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fallbackText: {
    fontSize: 16,
    color:Colors.primary200
  },
});
