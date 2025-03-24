import { ContactScreen } from "./screens/ContactScreen";
import { DetailScreen } from "./screens/DetailScreen";
import { GalleryScreen } from "./screens/GalleryScreen";
import { RegisterScren } from "./screens/RegisterScreen";

const App = () => {
  return(
    <>
      <DetailScreen />
      <ContactScreen />
      <GalleryScreen />
      <RegisterScren />
    </>
  ) 
}

export default App;