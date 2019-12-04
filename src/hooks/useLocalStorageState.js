import { useState, useEffect } from 'react';

function useLocalStorageState(key, initialValue) {
  const [state, setState] = useState( () => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(initialValue)
      );
    } catch (error) {
      value = initialValue;
    }
    return value;
  });

  useEffect( () => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [state]);
  return [state, setState];
};

export default useLocalStorageState;