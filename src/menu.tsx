import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export const Menu = ({modalVisible, setModalVisible}) => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.header}>
            <TouchableOpacity onPress={toggleModal}>
              <Icon
                name="arrow-left"
                color="white"
                size={24}
                style={styles.titleIcon}
              />
            </TouchableOpacity>
            <Text style={styles.title}>Налады</Text>
          </View>
          <View style={styles.options}>
            <TouchableOpacity style={styles.modalOption}>
              <View style={styles.textIconContainer}>
                <Icon
                  name="moon"
                  color="white"
                  size={24}
                  style={styles.titleIcon}
                />
                <Text style={styles.modalText}>Начная тэма</Text>
              </View>
              <Switch
                trackColor={{false: '#767577', true: '#5f62f8a5'}}
                thumbColor={isEnabled ? '#5f62f8' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                style={styles.switch}
                value={isEnabled}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.version}>v0.3 alpha</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    maxHeight: 40,
  },
  switch: {
    marginBottom: 6,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginLeft: 16,
  },
  titleIcon: {
    marginTop: 4,
    marginLeft: 4,
  },
  options: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 16,
  },
  modalView: {
    backgroundColor: '#121214',
    padding: 16,
    height: '100%',
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },
  textIconContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  modalOption: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    maxHeight: 40,
    width: '100%',
    marginVertical: 6,
    justifyContent: 'space-between',
  },
  modalText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    marginLeft: 16,
    marginTop: 3,
  },
  version: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    marginLeft: 16,
    marginTop: 3,
  },
});
