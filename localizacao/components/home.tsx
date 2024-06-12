import { Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';

import Logo from '../assets/images/logo.png';
import Localizacao from "./localizacao"

import { useState } from 'react';

export default function HomeScreen() {

  const [page, setPage] = useState("home")

  const renderPage = () => {
    if(page === 'home') {
        return (
          <div style={style.container}>
            <Image source={Logo} style={style.logo} />
            <h2 style={style.colorText}>Find Your Location!</h2>
            <p style={style.colorText}>Here, you can find the latitude and longitude of  anywhere in the world!</p>
            <p style={style.colorText}>Just click the button below and find out!</p>
            <TouchableOpacity onPress={() => setPage("loc")}>
              <p>Next</p>
            </TouchableOpacity>
          </div>
        );
    } else if(page === "loc") {
        return <Localizacao />
    }
  }

  return <div style={style.container}>{renderPage()}</div>

}

const style = StyleSheet.create({
  container: {
    padding: '2%',
    backgroundColor: "#FFF",
    flex: 1,
    alignContent: "center",
    textAlign: "center"
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