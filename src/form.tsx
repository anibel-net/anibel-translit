import React, {useState} from 'react';
import {Keyboard, Text, TextInput, View, StyleSheet} from 'react-native';
import {japaneseToBelarusian} from './translits';

export const Form = ({}) => {
  const [be, setBe] = useState('');
  const [open, setOpen] = useState(false);

  const result = be.length >= 2 && japaneseToBelarusian(be);

  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          blurOnSubmit
          numberOfLines={6}
          autoCapitalize={'none'}
          autoCompleteType={'off'}
          autoCorrect={false}
          autoFocus={false}
          multiline
          maxHeight={160}
          onChangeText={setBe}
          placeholder="Калі ласка, увядзіце romaji, хірагану, катакану"
          placeholderTextColor="#aaaaaa"
          style={styles.input}
          value={be}
          onSubmitEditing={() => {
            setOpen(false);
            Keyboard.dismiss();
          }}
          onFocus={() => {
            setOpen(true);
          }}
          onBlur={() => {
            setOpen(false);
          }}
        />
      </View>
      {result.length >= 2 && <Text style={styles.result}>{result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
  },
  title: {
    fontSize: 26,
    fontWeight: '900',
    color: '#eee',
    textAlign: 'center',
    marginTop: 10,
  },

  text: {
    color: 'white',
    fontSize: 18,
  },
  textCenter: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    width: '90%',
  },
  result: {
    margin: 12,
    padding: 10,
    backgroundColor: '#0c0c0c',
    color: '#eee',
    fontSize: 18,
    borderRadius: 12,
    textAlignVertical: 'top',
    overflow: 'hidden',
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

  input: {
    margin: 12,
    borderWidth: 2,
    padding: 10,
    backgroundColor: '#252427',
    color: '#eee',
    borderColor: '#dddddd',
    fontSize: 18,
    borderRadius: 12,
    textAlignVertical: 'top',
  },
});
