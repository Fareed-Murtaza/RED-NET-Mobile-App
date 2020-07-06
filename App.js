import React from 'react';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import MainNavigator from './Navigation/navigator';
import profileReducer from './Store/Reducers/profile';
import FriendReducer from './Store/Reducers/friends';
import NotificationReducer from './Store/Reducers/notification';
import DonorReducer from './Store/Reducers/donor';
import UserReducer from './Store/Reducers/user';
import { SafeAreaView, View, StatusBar } from 'react-native';

const rootReducer = combineReducers({
  user: UserReducer,
  profile: profileReducer,
  friends: FriendReducer,
  notification: NotificationReducer,
  donorsList: DonorReducer
})

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store} >
        <MainNavigator />
    </Provider>
  );
}
