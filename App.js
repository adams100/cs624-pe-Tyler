import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import ProfileCard from './ProfileCard';

const profiles = [
  { name: 'John Doe', description: 'Lorem ipsum dolor sit amet.' },
  { name: 'Jane Smith', description: 'Consectetur adipiscing elit.' },
  { name: 'Alice Johnson', description: 'Pellentesque euismod.' },
  { name: 'Bob Brown', description: 'Sed do eiusmod tempor.' },
  { name: 'Charlie White', description: 'Incididunt ut labore.' },
  { name: 'Diana Green', description: 'Et dolore magna aliqua.' },
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.grid}>
        {profiles.map((profile, idx) => (
          <ProfileCard
            key={idx}
            name={profile.name}
            description={profile.description}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
});
