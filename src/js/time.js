// eslint-disable-next-line import/prefer-default-export
export const getTime = (timestamp) => new Date(timestamp * 1000).toISOString().slice(-13, -5);
