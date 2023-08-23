import React, { useState } from "react";
import { Text, FlatList, View } from "react-native";


const App = () => {
  const [items, setItems] = useState([]);

  const readFile = async (filePath) => {
    const response = await fetch(filePath);
    const data = await response.json();
    setItems(data);
  };


    readFile("data.json");


  return (
    <View style={{ padding: 20 }}>
      <SafeAreaView>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <MyItem
              key={item.id}
              name={item.name}
              onPress={() => console.log("Item pressed")}
            />
          )}
        />
      </SafeAreaView>
    </View>
  );
};

class MyItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPressed: false,
    };
  }

  render() {
    const { name } = this.props;
    const { isPressed } = this.state;

    return (
      <View style={{ backgroundColor: isPressed ? "red" : "white" }}>
        <Text>{name}</Text>
        <Pressable onPress={() => this.setState({ isPressed: true })}>
          <Text>Press me!</Text>
        </Pressable>
      </View>
    );
  }
}

export default App;
