/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Dimensions, Image, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabHomeScreen from "../screens/TabHomeScreen";
import TabRewardsScreen from "../screens/TabRewardsScreen";
import TabGamesScreen from "../screens/TabGamesScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import homeIcon from "../assets/images/home-04.png";
import rewardsIcon from "../assets/images/rewards.png";
import globeIcon from "../assets/images/globe.png";
import userCircleIcon from "../assets/images/user-circle.png";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabHomeScreen"
      screenOptions={{
        tabBarActiveTintColor: Colors.dark.tint,
      }}
    >
      <BottomTab.Screen
        name="TabHomeScreen"
        component={TabHomeScreen}
        options={({ navigation }: RootTabScreenProps<"TabHomeScreen">) => ({
          title: "Home",
          headerShown: true,
          tabBarIcon: ({ color }) => <Image source={homeIcon} />,
        })}
      />
      <BottomTab.Screen
        name="TabRewardsScreen"
        component={TabRewardsScreen}
        options={({ navigation }: RootTabScreenProps<"TabRewardsScreen">) => ({
          title: "Rewards",
          headerShown: true,

          tabBarIcon: ({ color }) => <Image source={rewardsIcon} />,
        })}
      />
      <BottomTab.Screen
        name="TabGamesScreen"
        component={TabGamesScreen}
        options={({ navigation }: RootTabScreenProps<"TabGamesScreen">) => ({
          title: "Games",
          headerShown: true,

          tabBarIcon: ({ color }) => <Image source={globeIcon} />,
        })}
      />
      <BottomTab.Screen
        name="myVerse"
        component={TabRewardsScreen}
        options={{
          title: "myVerse",
          tabBarIcon: ({ color }) => <Image source={userCircleIcon} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
