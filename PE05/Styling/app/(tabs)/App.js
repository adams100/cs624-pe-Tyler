import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useRef, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

const Tab = createBottomTabNavigator();

// Screens
const CitiesScreen = ({ route }) => {
  const cities = route.params && route.params.cities ? route.params.cities : [];
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
  const initialCities = route.params && route.params.cities ? route.params.cities : [];
  const cities = useRef(initialCities).current;

  const addCity = () => {
    if (!city || !country) return;
    const updated = [...cities, { city, country }];
    navigation.setParams({ cities: updated });
    navigation.navigate('Cities', { cities: updated });
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

const CountriesScreen = ({ route }) => {
  const countries = route.params && route.params.countries ? route.params.countries : [];
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
              <Text style={styles.countryName}>{item.country}</Text>
              <Text style={styles.currencyText}>{item.currency}</Text>
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
  const initialCountries = route.params && route.params.countries ? route.params.countries : [];
  const countries = useRef(initialCountries).current;

  const addCountry = () => {
    if (!country || !currency) return;
    const updated = [...countries, { country, currency }];
    navigation.setParams({ countries: updated });
    navigation.navigate('Countries', { countries: updated });
    setCountry('');
    setCurrency('');
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
      <Button 
        title="Add Country" 
        onPress={addCountry}
        color="#424242"
      />
    </View>
  );
};

export default function App() {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#2196F3',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen 
        name="Cities" 
        component={CitiesScreen}
        initialParams={{ cities: cities }}
      />
      <Tab.Screen
        name="AddCity"
        component={AddCityScreen}
        initialParams={{ cities: cities }}
        options={{ title: 'Add City' }}
      />
      <Tab.Screen
        name="Countries"
        component={CountriesScreen}
        initialParams={{ countries: countries }}
      />
      <Tab.Screen
        name="AddCountry"
        component={AddCountryScreen}
        initialParams={{ countries: countries }}
        options={{ title: 'Add Country' }}
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
    padding: 20,
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
    marginVertical: 20,
    color: '#fff',
    textAlign: 'center',
  },
  placeholderText: {
    textAlign: 'center',
    color: 'gray',
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
    color: '#000',
  },
  currencyText: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  }
});
