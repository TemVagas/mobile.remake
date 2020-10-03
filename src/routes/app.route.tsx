import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

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
          shadowOpacity: 0,
          height: 64,
        },

        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },

        iconStyle: {
          flex: 0,
          width: 20,
          height: 30,
        },

        labelStyle: {
          fontSize: 14,
          fontFamily: "Archivo_700Bold",
          textAlign: "center",
          alignSelf: "center",
          marginLeft: 10,
        },

        inactiveBackgroundColor: "#FAFAFC",
        activeBackgroundColor: "#EBEBF5",
        inactiveTintColor: "#c1bccc",
        activeTintColor: Colors.blackTheme.red,
      }}
    >
      <Screen
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-list" size={size} color={color} />
          ),
        }}
        name="Feed"
        component={Feed}
      />

      <Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-person" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Navigator>
  );
};

export default App;
