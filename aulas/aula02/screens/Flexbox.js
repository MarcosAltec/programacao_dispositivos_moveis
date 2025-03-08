import { View } from "react-native";

function Flexbox() {
  return (
    <View style={{ flex: 1, 
     flexDirection: "row",
     justifyContent: "space-between",
     alignItems: "streatch",
    backgroundColor: "red" }}>
      <View style={{  
        marginTop: 100,
        width: "100%",
        borderColor: "white",
        borderWidth: 2,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        backgroundColor: "blue" }}>        
      </View>
      {/* <View style={{ height:50, width: 50,
        backgroundColor: "green" }}>        
      </View>
      <View style={{ height:50, width: 50,
        backgroundColor: "yellow" }}>        
      </View>     */}
      </View>
  );
}

export default Flexbox;



{/* <View style={{ transform: [{ rotate: '45deg' }], alignSelf: "center", height: 190, width: 190, backgroundColor: "yellow" }}></View> */}



{/* <View style={{ alignSelf: "center", height: 210, width: 300, backgroundColor: "green", justifyContent: "center", alignItems: "center" }}>
<View style={{ transform: [{ scaleY: 0.8  }] }}>
  <View style={{ transform: [{ rotate: '45deg' }], height: 150, width: 150, backgroundColor: "yellow", justifyContent: "center", alignItems: "center" }}>
    <View style={{ height: 130, width: 130, borderRadius: 80, backgroundColor: "blue", justifyContent: "center", alignItems: "center" }}>
      <View style={{ height: 65, width: 130, backgroundColor: "white", borderBottomLeftRadius: 80, borderBottomRightRadius: 80, overflow: 'hidden' }}>
        <View style={{ height: 55, width: 130, backgroundColor: "blue", borderBottomLeftRadius: 80, borderBottomRightRadius: 80, overflow: 'hidden' }}></View>
      </View>
    </View>
  </View>
</View>
</View>  */}