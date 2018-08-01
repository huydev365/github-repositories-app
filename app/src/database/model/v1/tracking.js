export class Tracking {}

Tracking.schema = {
  name: "Tracking",
  primaryKey: "key",
  properties: {
    key: "string",
    dateTime: "double",
    hardToBreathe: "float",
    sleepiness: "float",
    phlegm: "float",
    coughing: "float"
  }
};
