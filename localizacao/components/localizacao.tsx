import { Image, StyleSheet, Platform, TouchableOpacity, Text } from 'react-native';



import Background from '../assets/images/background.png';
import Home from "./home"

import { useState } from 'react';

export default function LocalizacaoScreen() {
  const [page, setPage] = useState("loc")

  const renderPage = () => {
    if(page === 'loc') {
        return (
          <div style={style.container}>
            <Image source={Background} style={style.image} />
            <Text style={{fontSize: 34, color: "#4D1AB9", fontWeight: "bold", textAlign: "center", fontFamily: 'Poppins_Medium'}}>Your current location is</Text>
            <Text style={{color: "#4D1AB9", textAlign: "center", fontFamily: 'Poppins_Medium', marginBottom: 15}}>Latitude:</Text>
            <Text style={{color: "#4D1AB9", textAlign: "center", fontFamily: 'Poppins_Medium', marginBottom: 15}}>Longitude:</Text>
            <TouchableOpacity onPress={() => setPage("home")} style={style.button}>
              <p>Go Back</p>
            </TouchableOpacity>
          </div>
        );
    } else if(page === "home") {
        return <Home />
    }
  }

  return <div style={style.container}>{renderPage()}</div>

}

const style = StyleSheet.create({
  container: {
    padding: '2%',
    backgroundColor: "#FFF",
    display: "flex",
    flex: 1,
    // alignContent: 'center',
    // alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  image: {
    height: 250,
    width: 250,
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
    textAlign: "center"
  }
})