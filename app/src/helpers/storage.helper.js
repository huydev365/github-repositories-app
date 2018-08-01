import { AsyncStorage } from "react-native";

const KEY_FCM_TOKEN = "fcm_token";

export const saveFCMToken = fCMToken =>
  AsyncStorage.setItem(KEY_FCM_TOKEN, fCMToken);

export const getFCMToken = () => {
  return AsyncStorage.getItem(KEY_FCM_TOKEN);
};
