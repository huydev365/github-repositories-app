import RequestHelper from "../helpers/request.helper";
import { appConfig } from "../config/app.config";

export default class Api {
  static fetchRepositories() {
    return RequestHelper.get(appConfig.apiUrl + "repositories");
  }

  static fetchUser(login) {
    return RequestHelper.get(appConfig.apiUrl + "users/" + login);
  }
}
