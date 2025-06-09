import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useRef, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const Tab = createBottomTabNavigator();
const CountryStack = createStackNavigator();
const CityStack = createStackNavigator();

// Screens
const CitiesScreen = ({ navigation, route }) => {
  const cities = route.params && route.params.cities ? route.params.cities : [];
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ marginRight: 16 }}>
          <Button
            onPress={() => navigation.navigate('AddCity')}
            title="Add"
            color="#2196F3"
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {cities.length === 0 ? (
        <Text style={styles.placeholderText}>No saved cities!</Text>
      ) : (
        <FlatList
          data={cities}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.cityItem}>
              <Text style={styles.cityName}>{item.city}</Text>
              <Text style={styles.countryText}>{item.country}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const AddCityScreen = ({ navigation, route }) => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const setCities = route.params.setCities;
  const cities = route.params.cities;

  const addCity = () => {
    if (!city || !country) return;
    const updated = [...cities, { city, country }];
    setCities(updated);
    navigation.navigate('CitiesList');
    setCity('');
    setCountry('');
  };

  return (
    <View style={styles.addContainer}>
      <Text style={styles.heading}>Cities</Text>
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />
      <Button 
        title="Add City" 
        onPress={addCity}
        color="#424242"
      />
    </View>
  );
};

const CountriesScreen = ({ navigation, route }) => {
  const countries = route.params && route.params.countries ? route.params.countries : [];
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{ marginRight: 16 }}>
          <Button
            onPress={() => navigation.navigate('AddCountry')}
            title="Add"
            color="#2196F3"
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {countries.length === 0 ? (
        <Text style={styles.placeholderText}>No saved countries!</Text>
      ) : (
        <FlatList
          data={countries}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.countryItem}>
              <Text style={styles.countryName}>{item.currency}</Text>
              <Text style={styles.currencyText}>{item.currencyName}</Text>
              <Text style={styles.currencyInfo}>{item.currencyInfo}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const AddCountryScreen = ({ navigation, route }) => {
  const [country, setCountry] = useState('');
  const [currency, setCurrency] = useState('');
  const [currencyName, setCurrencyName] = useState('');
  const [currencyInfo, setCurrencyInfo] = useState('');
  const setCountries = route.params.setCountries;
  const countries = route.params.countries;

  const addCountry = () => {
    if (!country || !currency) return;
    const updated = [...countries, { 
      country, 
      currency,
      currencyName,
      currencyInfo 
    }];
    setCountries(updated);
    navigation.navigate('CountriesList');
    setCountry('');
    setCurrency('');
    setCurrencyName('');
    setCurrencyInfo('');
  };

  return (
    <View style={styles.addContainer}>
      <Text style={styles.heading}>Countries</Text>
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />
      <TextInput
        style={styles.input}
        placeholder="Currency"
        value={currency}
        onChangeText={setCurrency}
      />
      <TextInput
        style={styles.input}
        placeholder="Currency name"
        value={currencyName}
        onChangeText={setCurrencyName}
      />
      <TextInput
        style={styles.input}
        placeholder="Currency info"
        value={currencyInfo}
        onChangeText={setCurrencyInfo}
      />
      <Button 
        title="Add Currency" 
        onPress={addCountry}
        color="#424242"
      />
    </View>
  );
};

const CitiesStackScreen = ({ cities, setCities }) => {
  return (
    <CityStack.Navigator>
      <CityStack.Screen 
        name="CitiesList" 
        component={CitiesScreen}
        initialParams={{ cities }}
      />
      <CityStack.Screen 
        name="AddCity" 
        component={AddCityScreen}
        options={{ title: 'Add City' }}
        initialParams={{ cities, setCities }}
      />
    </CityStack.Navigator>
  );
};

const CountriesStackScreen = ({ countries, setCountries }) => {
  return (
    <CountryStack.Navigator>
      <CountryStack.Screen 
        name="CountriesList" 
        component={CountriesScreen}
        initialParams={{ countries }}
      />
      <CountryStack.Screen 
        name="AddCountry" 
        component={AddCountryScreen}
        options={{ 
          title: 'Country',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#2196F3'
          }
        }}
        initialParams={{ countries, setCountries }}
      />
    </CountryStack.Navigator>
  );
};

export default function App() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen 
        name="CitiesNav" 
        component={(props) => <CitiesStackScreen {...props} cities={cities} setCities={setCities} />}
        options={{ title: 'Cities' }}
      />
      <Tab.Screen
        name="CountriesNav"
        component={(props) => <CountriesStackScreen {...props} countries={countries} setCountries={setCountries} />}
        options={{ title: 'Countries' }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  addContainer: {
    flex: 1,
    paddingRight: 50,
    margin: 100,
    backgroundColor: '#2196F3',
  },
  center: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  placeholderText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 16,
  },
  cityItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  cityName: {
    fontSize: 16,
    color: '#000',
  },
  countryText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  countryItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  countryName: {
    fontSize: 16,
    color: 'black',
  },
  currencyText: {
    fontSize: 14,
    color: 'black',
    marginTop: 4,
  },
  currencyInfo: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    marginTop: 2,
  }
});
