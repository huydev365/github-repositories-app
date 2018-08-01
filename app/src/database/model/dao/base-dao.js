import { realm } from "../../realm";

export default class BaseDao<T> {
  constructor(typeName: string) {
    this.typeName = typeName;
  }

  create(object: T) {
    realm.write(() => {
      realm.create(this.typeName, object);
    });
  }

  update(object: T) {
    realm.write(() => {
      realm.create(this.typeName, object, true);
    });
  }

  remove(object: T) {
    realm.write(() => {
      return realm.delete(object);
    });
  }

  removeAll() {
    realm.write(() => {
      return realm.deleteAll();
    });
  }

  findAndRemove(field, value) {
    const query = `${field} = "${value}"`;
    const result = realm.objects(this.typeName).filtered(query);
    if (result.length >= 1) {
      realm.write(() => {
        return realm.delete(result[0]);
      });
    }
  }

  getAll(): Array<T> {
    const elements = realm.objects(this.typeName);
    if (elements) {
      return elements.map(element => {
        return Object.assign({}, element);
      });
    } else {
      return [];
    }
  }

  find(field, value) {
    const query = `${field} = "${value}"`;
    const result = realm.objects(this.typeName).filtered(query);
    return result.length >= 1 ? result[0] : undefined;
  }

  filter(field, value) {
    const query = `${field} = "${value}"`;
    const elements = realm.objects(this.typeName).filtered(query);
    if (elements) {
      return elements.map(element => {
        return Object.assign({}, element);
      });
    } else {
      return [];
    }
  }

  findAndDetach(field, value) {
    const query = `${field} = "${value}"`;
    const result = realm.objects(this.typeName).filtered(query);
    return result.length >= 1 ? Object.assign({}, result[0]) : undefined;
  }
}
