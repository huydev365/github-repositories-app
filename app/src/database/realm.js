import Realm from "realm";
import { Setting } from "./model/v1/setting";
import { Tracking } from "./model/v1/tracking";

const schemas = [{ schema: [Setting, Tracking], schemaVersion: 0 }];

let currentSchemaIndex = Realm.schemaVersion(Realm.defaultPath);
if (currentSchemaIndex !== -1) {
  while (currentSchemaIndex < schemas.length) {
    const migratedRealm = new Realm(schemas[currentSchemaIndex++]);
    migratedRealm.close();
  }
}

export const realm = new Realm(schemas[schemas.length - 1]);
