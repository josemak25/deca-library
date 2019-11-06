import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function MaterialButtonShare(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Icon name="chevron-right" style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F51B5',
    elevation: 2,
    minWidth: 40,
    minHeight: 40,
    borderRadius: 28,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: '#111',
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    color: '#fff',
    fontFamily: 'panton-bold',
    fontSize: 40,
    height: 40,
    width: 40
  }
});
