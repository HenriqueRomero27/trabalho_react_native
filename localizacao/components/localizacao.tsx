import { Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';

import Logo from '../assets/images/logo.png';
import Home from "./home"

import { useState } from 'react';

export default function LocalizacaoScreen() {

  const [page, setPage] = useState("loc")

  const renderPage = () => {
    if(page === 'loc') {
        return (
          <div style={style.container}>
            <Image source={Logo} style={style.logo} />
            <h2 style={style.colorText}>Your current location is</h2>
            <p style={style.colorText}>Latitude:</p>
            <p style={style.colorText}>Longitude:</p>
            <TouchableOpacity onPress={() => setPage("home")}>
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
    flex: 1,
  },
  logo: {
    height: 50,
    width: 50
  },
  colorText: {
    fontFamily: "sans-serif",
    color: "#4D1AB9"
  }
})