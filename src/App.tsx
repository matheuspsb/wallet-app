import React from "react";
import AppLoading from "expo-app-loading";
import { View, Text } from "react-native";

const App: React.FC = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Text>Carteira App</Text>
        </View>
    )
}

export default App;
