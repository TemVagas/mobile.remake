import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import NovoButton from "../components/NovoButton";

import Feed from "../screens/Feed";
import Novo from "../screens/Novo";
import Favorites from "../screens/Favorites";
import Hello from "../screens/Hello";

import Colors from "../constants/colors";

const App: React.FC = () => {
  const { Navigator, Screen } = createBottomTabNavigator();

  const zoomAnimate = (focused: boolean, size: number) =>
    focused ? size + 3 : size;

  return (
    <Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "Novo") {
            return (
              <NovoButton
                size={size}
                primaryColor={color}
                secondColor="#c1bccc"
                focused={focused}
                onPress={() => {
                  navigation.navigate("Novo");
                }}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,

        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 50,
        },

        tabStyle: {
          justifyContent: "center",
        },

        keyboardHidesTabBar: true,
        inactiveTintColor: "#c1bccc",
        activeTintColor: Colors.blackTheme.primary,
      }}
    >
      <Screen
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name="home"
              size={zoomAnimate(focused, size)}
              color={color}
            />
          ),
        }}
        name="Feed"
        component={Feed}
      />

      <Screen
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name="hearto"
              size={zoomAnimate(focused, size)}
              color={color}
            />
          ),
        }}
        name="Favoritos"
        component={Favorites}
      />

      <Screen name="Novo" component={Novo} />

      <Screen
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="ios-notifications-outline"
              size={zoomAnimate(focused, size + 5)}
              color={color}
            />
          ),
        }}
        name="Notifications"
        component={Hello}
      />

      <Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name="setting"
              size={zoomAnimate(focused, size)}
              color={color}
            />
          ),
        }}
        name="Profile"
        component={Hello}
      />
    </Navigator>
  );
};

export default App;
