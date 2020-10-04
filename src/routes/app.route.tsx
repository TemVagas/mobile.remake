import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import Feed from "../screens/Feed";
import Profile from "../screens/Feed";
import Colors from "../constants/colors";

const App: React.FC = () => {
  const { Navigator, Screen } = createBottomTabNavigator();
  return (
    <Navigator
      tabBarOptions={{
        showLabel: false,

        style: {
          elevation: 0,
          shadowOpacity: 1,
          height: 50,
        },

        inactiveBackgroundColor: "#FAFAFC",
        activeBackgroundColor: "#EBEBF5",
        inactiveTintColor: "#c1bccc",
        activeTintColor: Colors.blackTheme.primary,
      }}
    >
      <Screen
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
        name="Feed"
        component={Feed}
      />

      <Screen
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
        }}
        name="Favoritos"
        component={Feed}
      />

      <Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Navigator>
  );
};

export default App;
