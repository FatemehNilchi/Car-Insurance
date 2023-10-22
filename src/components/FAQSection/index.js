import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import fontStyles from '../../constants/fonts/styles';
const FAQSection = ({question, answer}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggleContent}
        style={styles.questionContainer}>
        <Text style={fontStyles.FAQTitle}>{question}</Text>
        <FontAwesome
          name={isOpen ? 'minus' : 'plus'}
          size={20}
          color="#001F40"
        />
      </TouchableOpacity>
      {isOpen && (
        <Text style={[fontStyles.bodyText, styles.answerText]}>{answer}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },

  answerText: {
    marginTop: 10,
    marginBottom:20
  },
});

export default FAQSection;
