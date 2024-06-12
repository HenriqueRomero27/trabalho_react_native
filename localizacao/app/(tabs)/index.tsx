import { Image, StyleSheet, Platform, TouchableOpacity } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import Home from "@/components/home"

import { useState } from 'react';

export default function HomeScreen() {
  return (
    <div style={style.container}>
      <Home />
    </div>
  );
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