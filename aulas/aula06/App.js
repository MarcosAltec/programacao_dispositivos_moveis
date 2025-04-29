import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './contexts/AuthContext';
import NavegacaoPrincipal from './routes/NavegacaoPrincipal';

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavegacaoPrincipal />
      </AuthProvider>
    </SafeAreaProvider>
  );
}

