export const getTime = (timestamp) => new Date(timestamp * 1000).toISOString().slice(-13, -5);

export const getDayAndTime = (str) => `${str.split(' ')[0].slice(5).replace('-', '/')} ${str.split(' ')[1].slice(0, -3)}`;
