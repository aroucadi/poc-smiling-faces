
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FeedScreen } from '../../features/posts/screens/FeedScreen';
import { ProfileScreen } from '../../features/profile/screens/ProfileScreen';
import { LeadsDashboard } from '../../features/leads/screens/LeadsDashboard';
import { CalendarScreen } from '../../features/appointments/screens/CalendarScreen';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Leads" component={LeadsDashboard} />
      <Tab.Screen name="Appointments" component={CalendarScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
