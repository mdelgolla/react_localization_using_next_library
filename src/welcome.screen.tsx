import React, { useState, useEffect, useCallback, useRef, useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useTranslation } from 'react-i18next';
import './i18n/config'
import i18n from "i18next";

const WelcomeScreen: React.FC = () => {
  const { t } = useTranslation();
  
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
    { label: 'Sinhala', value: 'si' },
  ]);



  const setAppLanguage = (lan: string) => {
    // changeLanguageConfig(lan)
  };

  return (

    <View style={styles.container} >
      <Text
        style={[
          styles.sectionTitle
        ]}>
        Please select your language
      </Text>

      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onSelectItem={item => setAppLanguage(item.value as string)}
      />
      <Text style={styles.welcomeText} >
        {t('welcome')}
      </Text>
    </View>

  )
}
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: "center",
    alignItems: "center"
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black'
  },
  welcomeText: {
    fontSize: 16,
    color: 'black'
  }
})
