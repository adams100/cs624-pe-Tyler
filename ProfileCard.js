import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileCard({ name, description }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.card, expanded && styles.expanded]}
      onPress={() => setExpanded(!expanded)}
      activeOpacity={0.8}
    >
      <Image
        source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/user-male-circle.png' }}
        style={styles.avatar}
      />
      <Text style={styles.name}>{name}</Text>
      {expanded && <Text style={styles.desc}>{description}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#2196F3',
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
    width: '48%',
    height: 160,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 4 },
  },
  expanded: {
    height: 200,
    padding: 16,
  },
  avatar: {
    width: 48,
    height: 48,
    marginBottom: 8,
    marginTop: 8,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  desc: {
    color: '#fff',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'center',
  },
});
