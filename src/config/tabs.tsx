import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {ReactElement, useState} from 'react';
import {EventRegister} from 'react-native-event-listeners';
import Icon from 'react-native-vector-icons/Ionicons';

import AllClientDebtsScreen from '../screens/all_client_debt_screen';
import AddClientScreen from '../screens/add_client_screen';
import ClientScreen from '../screens/client_screen';
import ClientsScreen from '../screens/clients_screen';
import CreateDebtScreen from '../screens/create_debt_screen';
import HomeScreen from '../screens/home_screen';

import AlertModal from '../components/alert_modal';
import PayDebtAlertModal from '../components/pay_debt_alert_modal';

const Tab = createBottomTabNavigator();

const containerStyle = {
  backgroundColor: '#FAFAFA',
};

const screenOptions = {
  headerShown: false,
  tabBarActiveBackgroundColor: '#FFFFFF',
  tabBarActiveTintColor: '#62A856',
  tabBarInactiveBackgroundColor: '#FFFFFF',
  tabBarInactiveTintColor: '#62A856',
  tabBarShowLabel: false,
  tabBarStyle: {
    height: 60,
  },
  tabBarIconStyle: {
    width: 54,
    height: 54,
  },
};

export default function Tabs(): ReactElement {
  const [canShowTheModal, setCanShowTheModal] = useState(false);
  const [dividaId, setDividaId] = useState(null);
  const [canShowAlertModal, setCanShowAlertModal] = useState(false);
  const [alertModalIsSuccess, setAlertModalIsSuccess] = useState(false);
  const [alertModalMessage, setAlertModalMessage] = useState('');

  EventRegister.addEventListener('canShowTheDebtConfimationModal', data => {
    setCanShowTheModal(data.canShowTheModal);
    setDividaId(data.dividaId);
  });

  EventRegister.addEventListener('canShowTheAlertModal', data => {
    setCanShowAlertModal(data.canShowAlertModal);
    setAlertModalIsSuccess(data.alertModalIsSuccess);
    setAlertModalMessage(data.alertModalMessage);
  });

  return (
    <>
      <Tab.Navigator sceneContainerStyle={containerStyle}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            ...screenOptions,
            tabBarItemStyle: {
              alignItems: 'flex-end',
              paddingRight: 70,
            },
            tabBarIcon: ({color}) => (
              <Icon name="home-outline" color={color} size={34} />
            ),
          }}
        />
        <Tab.Screen
          name="ClientsScreen"
          component={ClientsScreen}
          options={{
            ...screenOptions,
            tabBarItemStyle: {
              alignItems: 'flex-start',
              paddingLeft: 70,
            },
            tabBarIcon: ({color}) => (
              <Icon name="person-outline" color={color} size={34} />
            ),
          }}
        />
        <Tab.Screen
          name="ClientScreen"
          component={ClientScreen}
          options={{
            ...screenOptions,
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="AllClientDebtsScreen"
          component={AllClientDebtsScreen}
          options={{
            ...screenOptions,
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="AddClientScreen"
          component={AddClientScreen}
          options={{
            ...screenOptions,
            tabBarButton: () => null,
          }}
        />
        <Tab.Screen
          name="CreateDebtScreen"
          component={CreateDebtScreen}
          options={{
            ...screenOptions,
            tabBarButton: () => null,
          }}
        />
      </Tab.Navigator>
      <PayDebtAlertModal
        visible={canShowTheModal}
        setVisible={setCanShowTheModal}
        dividaId={dividaId!}
      />
      <AlertModal
        visible={canShowAlertModal}
        setVisible={setCanShowAlertModal}
        isSuccess={alertModalIsSuccess}
        message={alertModalMessage}
      />
    </>
  );
}
