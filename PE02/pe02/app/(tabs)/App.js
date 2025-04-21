import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  StyleSheet
} from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>


      <Text style={styles.question}>Which course did you like?</Text>
      <TextInput
        style={styles.input}
        placeholder="ex. CS624"
      />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Core Requirements (24 credits)
        </Text>
        <Text>CS 504 Software Engineering</Text>
        <Text>CS 506 Programming for Computing</Text>
        <Text>CS 519 Cloud Computing Overview</Text>
        <Text>CS 533 Computer Architecture</Text>
        <Text>CS 547 Secure Systems and Programs</Text>
        <Text>CS 622 Discrete Math and Algorithms for Computing</Text>
        <Text>DS 510 Artificial Intelligence for Data Science</Text>
        <Text>DS 620 Machine Learning & Deep Learning</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Depth of Study (6 Credits)
        </Text>
        <Text>CS 624 Full-Stack Development - Mobile App</Text>
        <Text>CS 628 Full-Stack Development - Web App</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 10
  },
  question: {
    fontSize: 16,
    marginBottom: 5
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  section: {
    backgroundColor: 'yellow',
    padding: 10,
    marginBottom: 10
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5
  }
});
