import Toast from "@remobile/react-native-toast";
import axios from "axios";
import qs from "qs";
import { getToken, getAPIAddress } from "./storage.helper";
import { appConfig } from "../config/app.config";

const instance = axios.create({
  timeout: 30000
});

const handleError = error => {
  if (error.response) {
    const message =
      error.response && error.response.error && error.response.error.message;
    Toast.show(message);
  } else if (error.request) {
    Toast.show("Please check network connection and try again!");
  } else {
    Toast.show("An unknown error occurred!");
  }
};

const chainResponse = response => {
  const data = response.data;
};

export default class RequestHelper {
  static async getHeader(config = {}): void {
    return {
      "Content-Type": "application/json",
      ...config
    };
  }

  static async getHeaderUploadFile(): void {
    const token = await getToken();
    return {
      Accept: "application/json",
      "Content-Type": "multipart/form-data"
    };
  }

  static async get(url: string, params: {}): void {
    const header = await this.getHeader();
    return instance
      .get(url, {
        headers: header,
        params: params
      })
      .then(data => {
        chainResponse(data);
        return data.data;
      })
      .catch(e => {
        handleError(e);
        throw e;
      });
  }

  static async post(url: string, data: {}, config): void {
    return instance({
      method: "POST",
      url: url,
      headers: await this.getHeader(config),
      data: data
    })
      .then(data => {
        chainResponse(data);
        return data.data;
      })
      .catch(e => {
        handleError(e);
        throw e;
      });
  }

  static async put(apiUrl: string, data: {}): void {
    return instance({
      method: "PUT",
      url: apiUrl,
      headers: await this.getHeader(),
      data: data
    })
      .then(data => {
        chainResponse(data);
        return data.data;
      })
      .catch(e => {
        handleError(e);
        throw e;
      });
  }

  static async delete(apiUrl: string, data: {}): void {
    return instance({
      method: "DELETE",
      url: apiUrl,
      headers: await this.getHeader(),
      data: data
    })
      .then(data => {
        chainResponse(data);
        return data.data;
      })
      .catch(e => {
        handleError(e);
        throw e;
      });
  }
}
