/**
 * create at 12/17/17
 */
import React from 'react';
import { View, Text, StyleSheet, Animated, Dimensions, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Lightbox from './BaseLightBox'

const DemoLightbox = ({ children }) => (
  <Lightbox verticalPercent={0.5} horizontalPercent={0.9} jusContent="flex-end">
    <Text>Demo Lightbox</Text>
    <Text>Allows transparency for background</Text>
  </Lightbox>
);

export default DemoLightbox;