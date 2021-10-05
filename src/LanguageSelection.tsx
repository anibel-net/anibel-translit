import React from 'react';
import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {japaneseToBelarusian} from './translits';
import Icon from 'react-native-vector-icons/Feather';

export const languages = [
  {
    title: 'Японская',
    id: 'ja',
    handler: japaneseToBelarusian,
  },
];

interface ILanguageSelection {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  setLanguage: (value: string) => void;
}

export const LanguageSelection = ({
  modalVisible,
  setModalVisible,
  setLanguage,
}: ILanguageSelection) => {
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const handleSelect = (id: string) => () => {
    setLanguage(id);
    toggleModal();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModal}>
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
            <Text style={styles.title}>Выбраць мову</Text>
          </View>
          <View style={styles.options}>
            {languages.map(({title, id}) => {
              return (
                <TouchableOpacity
                  key={id}
                  style={styles.modalOption}
                  onPress={handleSelect(id)}>
                  <Icon
                    name="globe"
                    color="white"
                    size={24}
                    style={styles.titleIcon}
                  />
                  <Text style={styles.modalText}>{title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
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
  modalOption: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    maxHeight: 40,
    width: '100%',
    marginVertical: 6,
  },
  modalText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    marginLeft: 16,
    marginTop: 3,
  },
});
