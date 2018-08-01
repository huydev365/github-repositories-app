import BaseDao from "./base-dao";
import { Setting } from "../v1/setting";

export default class SettingDao extends BaseDao<Setting> {
  constructor() {
    super("Setting");
  }
}
