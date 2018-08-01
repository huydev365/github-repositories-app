import { Dimensions, Platform } from "react-native";
const { height, width } = Dimensions.get("window");

export const dimension = {};
export const dateFormat = {
  ddmmyyyy: "DD/MM/YYYY"
};

export const text = {
  emptyString: ""
};

export const appColor = {
  primary: "rgb(64, 96, 250)"
};

export const chartType = {
  oneMonth: {
    label: "1M",
    key: 1,
    milliseconds: 86400000 * 30
  },
  twoMonth: {
    label: "2M",
    key: 2,
    milliseconds: 86400000 * 60
  },
  threeMonth: {
    label: "3M",
    key: 3,
    milliseconds: 86400000 * 90
  },
  oneYear: {
    label: "1Y",
    key: 4,
    milliseconds: 86400000 * 30 * 12
  },
  threeYear: {
    label: "3Y",
    key: 5,
    milliseconds: 86400000 * 30 * 36
  }
};

export const event = {
  submitted: "submitted"
};
