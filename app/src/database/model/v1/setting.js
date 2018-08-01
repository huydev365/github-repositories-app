export class Setting {}

Setting.schema = {
  name: "Setting",
  primaryKey: "key",
  properties: {
    key: "string",
    value: "string"
  }
};
