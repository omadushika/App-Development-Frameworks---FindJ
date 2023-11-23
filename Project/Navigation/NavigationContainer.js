import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PopularJobs from './path/to/PopularJobs';
import JobDetails from '../app/job-details/JobDetails';

const Stack = createStackNavigator();

const NavigationContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PopularJobs">
        <Stack.Screen name="PopularJobs" component={PopularJobs} />
        <Stack.Screen name="JobDetails" component={JobDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationContainer;
