import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreens from '../screens/LoginScreens';
import RecoverScreen from '../screens/RecoverScreen';

const Stack = createNativeStackNavigator();

function StackNavigator() {
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreens} />
            <Stack.Screen name="RecuperarSenha" component={RecoverScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigator;