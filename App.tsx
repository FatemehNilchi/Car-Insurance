import React from 'react';

import {ScrollView, Text, View, TouchableOpacity, Image} from 'react-native';
import MyButton from './src/components/Button';
import fontStyles from './src/constants/fonts/styles';
import internalSectionStyles from './src/components/Internalsection/style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FAQSection from './src/components/FAQSection';
import styles from './styles';

const App = () => {
  return (

    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={[fontStyles.titleNameText, {marginRight: 8}]}>
            Journey Jacket
          </Text>
          <FontAwesome name="first-order" size={30} color={'#4F4F4F'} />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome name="bell-o" size={20} color={'#001F40'} />
          <Text
            style={[fontStyles.headerText, {marginRight: 10, marginLeft: 20}]}>
            Log in
          </Text>
          <FontAwesome name="user-circle" size={32} color={'#001F40'} />
        </View>
      </View>


      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={internalSectionStyles.container}>
          <MyButton
            isDark={false}
            buttonText={'Guide and tips'}
            isSmall={true}
          />

          <Text style={[fontStyles.mainHeaderText, {marginTop: 22}]}>
            Resources for New Vehicle Owners
          </Text>
          <Text style={fontStyles.bodyText}>
            Explore our comprehensive guides and tips, where you’ll find
            valuable information on insurance requirements, deciphering policy
            documents, maintaining your vehicle’s health, and making informed
            coverage choices.
          </Text>
          <View style={styles.readMoreContainer}>
            <Text style={[fontStyles.bodyText, {marginRight: 13}]}>
              Read more
            </Text>
            <TouchableOpacity style={styles.arrowIconContainer}>
              <FontAwesome
                name="long-arrow-right"
                size={15}
                color={'#001F40'}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={require('./src/Images/pic1.png')}
            style={styles.imageStyle}
          />
        </View>


        <View style={internalSectionStyles.container}>
          <Text style={fontStyles.mainHeaderText}>
            Recently changed, or about to change your car?
          </Text>
          <Text style={[fontStyles.bodyText, {marginBottom: 15}]}>
            We offer the most comprehesive vehicle protection insurances - at
            low online prices!
          </Text>
          <View style={styles.buttonsContainer}>
            <MyButton isDark={true} buttonText={'Get a quote'} />
            <MyButton isDark={false} buttonText={'Ask a question'} />
          </View>
          <Image
            source={require('./src/Images/pic2.png')}
            style={styles.imageStyle}
          />
        </View>


        <View style={internalSectionStyles.container}>
          <Text style={fontStyles.mainHeaderText}>
            What type of car insurance do I need?
          </Text>
          <FAQSection
            question="Gap Insurance"
            answer="Gap Insurance, or Guaranteed Asset Protection Insurance, is a valuable insurance option for vehicle owners. It covers the gap between the amount you owe on your car loan or lease and the actual cash value of your vehicle in case of a total loss, such as theft or a severe accident. In other words, if your vehicle is declared a total loss, Gap Insurance helps you pay off the remaining balance on your loan or lease, even if it's more than the vehicle's current market value. This coverage provides peace of mind and prevents you from facing a financial burden in such unfortunate situations."
          />
          <FAQSection
            question="Scratch & Dent Insurance"
            answer="Scratch & Dent Insurance is a type of insurance coverage that protects your vehicle from minor damages such as scratches and dents. This insurance policy is designed to cover the costs of repairing these superficial damages, ensuring your vehicle maintains its aesthetic appeal. It's particularly beneficial for individuals who want to keep their vehicles in pristine condition, as it provides financial security against unexpected minor damages."
          />
        </View>
        
      </ScrollView>
    </View>
  );
};

export default App;
