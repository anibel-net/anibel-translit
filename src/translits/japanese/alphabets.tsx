import React from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';

export const JapaneseAlphabets = () => {
  return (
    <View style={styles.root}>
      <View style={styles.cardRipple}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('white', true)}>
          <View style={styles.card}>
            <Text style={styles.symbol}>あ</Text>
            <Text style={styles.cardText}>Хірагана</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={styles.cardRipple}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('white', false)}>
          <View style={styles.card}>
            <Text style={styles.symbol}>ア</Text>
            <Text style={styles.cardText}>Катакана</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <Text style={styles.cardText}>
        Транслітаруе катакану, хірагану і рамадзі ў беларускі кірылічны алфавіт.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: '55%',
  },
  title: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    margin: 6,
  },
  card: {
    width: 140,
    height: 160,
    backgroundColor: '#121214',

    borderRadius: 10,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  cardRipple: {
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardText: {
    color: 'white',
    fontSize: 18,
    marginTop: 16,
    textAlign: 'center',
  },
  symbol: {
    color: 'white',
    fontSize: 46,
  },
});
