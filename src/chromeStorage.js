export const setState = state => new Promise((resolve, reject) => {
  chrome.storage.local.set(state, () => {
    if (chrome.runtime.error) {
      reject(chrome.runtime.error);
    } else {
      resolve();
    }
  });
});

export const getState = () => new Promise((resolve, reject) => {
  chrome.storage.local.get(null, (state) => {
    if (chrome.runtime.error) {
      reject(chrome.runtime.error);
    } else {
      resolve(state);
    }
  });
});

export const onChange = callback => chrome.storage.onChanged.addListener(callback);
