import { useContext } from 'react';
import { View } from 'react-native'
import { AuthContext } from '../contexts/AuthContext';
import { Button } from 'react-native-paper';

function Home() {
    const {usuario, logout} = useContext(AuthContext);

    return <View style={{flex: 1, padding: 16, justifyContent: "space-around"}}>
        <Text variant='titleLarge'>Olá, {usuario.login}</Text>
        <Button mode='contained' onPress={() => logout()}>Sair</Button>
    </View>
};

export default Home;