import amplitude from "amplitude-js";

export const initAmplitude = () => {
  amplitude.getInstance().init("f0556afde1dab605cbfc62a1c6ba2c2c");
};

export const logAmplitudeEvent = (event, data) => {
  amplitude.getInstance().logEvent(event, data);
};
