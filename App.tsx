import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View} from 'react-native';
import {Alphabents} from './src/Alphabents';
import {Form} from './src/form';
import {Header} from './src/header';
import {Languages} from './src/languages';

const App = () => {
  const [language, setLanguage] = useState('ja');

  return (
    <SafeAreaView style={styles.root}>
      <Header setLanguage={setLanguage} />
      <ScrollView keyboardShouldPersistTaps="handled" style={styles.background}>
        <Languages language={language} setLanguage={setLanguage} />
        <Form language={language} />
        <Alphabents language={language} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#121214',
    height: '100%',
  },
  background: {
    backgroundColor: '#252427',
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    display: 'flex',
    margin: 6,
    marginBottom: 0,
  },
});

export default App;
