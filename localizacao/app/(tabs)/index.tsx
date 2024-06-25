import { Image, StyleSheet, Platform, TouchableOpacity, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import useLoadFonts from "../../components/useLoadFonts";

import Home from "@/components/home"

import { useState } from 'react';

export default function HomeScreen() {
  const { fontsLoaded, onLayoutRootView } = useLoadFonts();
  return (
    <View style={style.container} onLayout={onLayoutRootView}>
      <Home />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    padding: '2%',
    backgroundColor: "#FFF",
    flex: 1,
    width: 430,
    display: "flex",
    alignSelf: "center"
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