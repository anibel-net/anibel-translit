import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {languages, LanguageSelection} from './LanguageSelection';

export const Languages = ({setLanguage, language}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const lng = languages.find(({id}) => id === language);
  return (
    <View style={styles.selection}>
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.text}>{lng.title}</Text>
      </TouchableOpacity>
      <Icon name="arrow-right" size={20} color="#eee" style={styles.icon} />
      <Text style={styles.text}>Беларуская</Text>
      <LanguageSelection {...{modalVisible, setModalVisible, setLanguage}} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 18,
  },
  selection: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  icon: {
    margin: 6,
    marginTop: 8,
  },
});
