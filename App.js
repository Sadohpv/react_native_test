import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigation } from "@react-navigation/drawer";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigation();
export default function App() {
  // console.log(data);
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {/* has drawer option props to design UI data Drawer */}

        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Detail" component={Detail} />
      </Drawer.Navigator>
      {/* <Stack.Navigator initialRouteName="Home"> 
       has stack option props to title data Stack
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        {/* component can be another navigator which render another component. They will show 2 label title and can hide it by option props */}
        <Tab.Screen name="Settings" component={Detail} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
