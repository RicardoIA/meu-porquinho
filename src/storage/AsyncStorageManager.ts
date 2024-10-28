import AsyncStorage from "@react-native-async-storage/async-storage";
import { IModelUser } from "../utils/interfaces";
import { log } from "../utils/log";
import { StoredItem } from "../utils/enums";

export class AsyncStorageManager {
  static async getItem<T>(key: StoredItem): Promise<T | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(StoredItem[key]);
      return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (error) {
      log.write(`AsyncStorageManager: Retrieve item "${key}" (failed)`, error);
      return null;
    }
  }

  static async setItem<T>(key: StoredItem, value: T): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(StoredItem[key], jsonValue);
    } catch (error) {
      log.write(`AsyncStorageManager: Save item "${key}" (failed)`, error);
    }
  }

  static async removeItem(key: StoredItem): Promise<void> {
    try {
      await AsyncStorage.removeItem(StoredItem[key]);
    } catch (error) {
      log.write(`AsyncStorageManager: Remove item "${key}" (failed)`, error);
    }
  }

  static async getUser(): Promise<IModelUser | null> {
    try {
      const jsonUser = await AsyncStorage.getItem(StoredItem[StoredItem.user]);
      if (jsonUser) {
        return JSON.parse(jsonUser) as IModelUser;
      }
      return null; // Retorna null se não houver um usuário armazenado
    } catch (error) {
      log.write("AsyncStorageManager: User Recovery (failed)", error);
      return null;
    }
  }

  static async setUser(user: IModelUser): Promise<void> {
    try {
      const jsonUser = JSON.stringify(user);
      await AsyncStorage.setItem(StoredItem[StoredItem.user], jsonUser);
    } catch (error) {
      log.write("AsyncStorageManager: User Storage (failed)", error);
    }
  }

  static async removeUser(): Promise<void> {
    try {
      await AsyncStorage.removeItem(StoredItem[StoredItem.user]);
    } catch (error) {
      log.write(`AsyncStorageManager: User Remove (failed)`, error);
    }
  }
}
