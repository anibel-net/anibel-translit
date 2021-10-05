import React, {useState} from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Menu} from './menu';

export const Header = ({}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.header}>
      <StatusBar animated={true} backgroundColor="#121214" />
      <View>
        <Text style={styles.title}>Трансліт</Text>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.menu}>
          <Icon name="settings" size={20} color="#eee" />
        </TouchableOpacity>
        <Menu {...{modalVisible, setModalVisible}} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: '900',
    color: '#eee',
    textAlign: 'center',
    marginTop: 10,
  },
  header: {
    height: 50,
    display: 'flex',
  },

  menu: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
});
