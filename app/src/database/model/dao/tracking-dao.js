import BaseDao from "./base-dao";
import { Tracking } from "../v1/tracking";
import { realm } from "../../realm";

export default class TrackingDao extends BaseDao<Tracking> {
  constructor() {
    super("Tracking");
  }

  filterGreaterThan(field, value) {
    const query = `${field} > "${value}"`;
    const elements = realm.objects(this.typeName).filtered(query);
    if (elements) {
      return elements.map(element => {
        return Object.assign({}, element);
      });
    } else {
      return [];
    }
  }
}
