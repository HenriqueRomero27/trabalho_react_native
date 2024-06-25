import { Image, StyleSheet, Platform, TouchableOpacity, View, Text } from 'react-native';

import Logo from '../assets/images/logo.png';
import Localizacao from "./localizacao"
import { useState } from 'react';
import useLoadFonts from './useLoadFonts';

export default function HomeScreen() {
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();
  
  const [page, setPage] = useState("home")

  const renderPage = () => {
    if(page === 'home') {
        return (
          <View style={style.container} onLayout={onLayoutRootView}>
            <Image source={Logo} style={style.logo} />
            <Text style={{fontSize: 34, color: "#4D1AB9", fontWeight: "bold", textAlign: "center", fontFamily: 'Poppins_Medium'}}>Find Your Location!</Text>
            <Text style={{marginTop: 15, width: 220, color: "#4D1AB9", textAlign: "center", fontFamily: 'Poppins_Medium', marginBottom: 15}}>Here, you can find the latitude and longitude of  anywhere in the world!</Text>
            <Text style={{marginTop: 15, width: 220, color: "#4D1AB9", textAlign: "center", fontFamily: 'Poppins_Medium'}}>Just click the button below and find out!</Text>
            <TouchableOpacity onPress={() => setPage("loc")} style={style.button}>
              <p>Next</p>
            </TouchableOpacity>
          </View>
        );
    } else if(page === "loc") {
        return <Localizacao />
    }
  }

  return <div style={style.container}>{renderPage()}</div>

}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems:  "center"
  },
  logo: {
    height: 75,
    width: 75,
    alignSelf: "center"
  },
  colorText: {
    fontFamily: "Poppins_Medium",
    color: "#4D1AB9",
    textAlign: "center"
  },
  button: {
    backgroundColor: "#4D1AB9",
    color: "white",
    width: 75,
    borderRadius: 99,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 15
  }
})