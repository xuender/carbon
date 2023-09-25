export const Browser = (): string => {
  const timezone = new Date().getTimezoneOffset();
  const userAgent = window.navigator.userAgent;
  const platform = navigator.platform ? navigator.platform : '';
  const plugins = getPlugins();
  const webdriver = window.navigator.webdriver;
  const isNaNLength = isNaN.toString().length;

  return `${timezone}-${userAgent}-${platform}-${plugins}-${webdriver}-${isNaNLength}`;
};

const getPlugins = (): string => {
  let plugins = '';
  let length = 0;

  if (navigator.plugins && navigator.plugins.length) {
    length = navigator.plugins.length;
  }

  for (let i = 0; i < length; i++) {
    plugins +=
      navigator.plugins[i].name == null ? '' : navigator.plugins[i].name;
    plugins +=
      navigator.plugins[i].filename == null
        ? ''
        : navigator.plugins[i].filename;
    plugins +=
      navigator.plugins[i].description == null
        ? ''
        : navigator.plugins[i].description;
  }

  return plugins;
};
