import * as React from "react";

//Import Navigation Container
import { NavigationContainer } from "@react-navigation/native";

// Import Stack Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Import Bottom Tab Navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Import Icon
import { Ionicons } from "@expo/vector-icons";

// Import Screen
import Login from "./src/screens/Login";
import LoginForm from "./src/screens/LoginForm";
import RegisterForm from "./src/screens/RegisterForm";
import FormIdentity from "./src/screens/Identity";

// Create Stack Navigation
const Stack = createStackNavigator();

//Create Bottom Tab Navigation
const Tab = createBottomTabNavigator();

// Create Component Bottom Tab Navigation
export const MyTab = () => {
    return (
      <Tab.Navigator
        initialRouteName="OnBoard"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name == "FormIdentity") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } 
  
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "red",
          tabBarInactiveTintColor: "grey",
        })}
      >
        <Tab.Screen name="FormIdentity" component={FormIdentity} />
      </Tab.Navigator>
    );
  };

export default function Container() {
  // Init Theme
  //   const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerMode: "screen",
          headerShown: false,
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="BottomTab"
          component={MyTab}
          options={{
            headerShown: false,
            title: "Hello Screen",
          }}
        />
        <Stack.Screen
          name="Main"
          component={Login}
          options={{
            headerShown: false,
            title: "Login",
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterForm}
          options={{
            headerShown: false,
            title: "Register",
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginForm}
          options={{
            headerShown: false,
            title: "LoginForm",
          }}
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}