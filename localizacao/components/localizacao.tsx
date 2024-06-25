import { Image, StyleSheet, Platform, TouchableOpacity, Text, View } from 'react-native';



import Background from '../assets/images/background.png';
import Home from "./home"

import { useState } from 'react';
import useLoadFonts from './useLoadFonts';

export default function LocalizacaoScreen() {
  const [page, setPage] = useState("loc")
const { fontsLoaded, onLayoutRootView } = useLoadFonts();

  const renderPage = () => {
    if(page === 'loc') {
        return (
          <View style={style.container} onLayout={onLayoutRootView}>
            <Image source={Background} style={style.image} />
            <Text style={{fontSize: 22, color: "#4D1AB9", fontWeight: "bold", textAlign: "center", fontFamily: 'Poppins_Medium', marginBottom: 15}}>Your current location is</Text>
            <Text style={{fontSize: 16, color: "#4D1AB9", textAlign: "center", fontFamily: 'Poppins_Medium', marginBottom: 15}}>Latitude:</Text>
            <Text style={{fontSize: 16, color: "#4D1AB9", textAlign: "center", fontFamily: 'Poppins_Medium', marginBottom: 15}}>Longitude:</Text>
            <TouchableOpacity onPress={() => setPage("home")} style={style.button}>
              <p>Go Back</p>
            </TouchableOpacity>
          </View>
        );
    } else if(page === "home") {
        return <Home />
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
    flexDirection: "column"
  },
  image: {
    height: 200,
    width: 200,
    alignSelf: "center"
  },
  colorText: {
    fontFamily: "sans-serif",
    color: "#4D1AB9",
    textAlign: "center"
  },
  button: {
    backgroundColor: "#4D1AB9",
    color: "white",
    width: 100,
    borderRadius: 99,
    alignSelf: "center",
    textAlign: "center",
    marginTop: 25
  }
})