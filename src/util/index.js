import React from 'react';

export const useWindowUnloadEffect = (fn, cleanUp) => {
  const { useEffect, useRef } = React;
  const callBack = useRef();
  callBack.current = fn;
  
  useEffect(() => {
    const handler = () => callBack.current();
    window.addEventListener('beforeunload', handler);
    
    return () => {
      if(cleanUp) handler()
      window.removeEventListener('beforeunload', handler);
    }
  }, [cleanUp]);
};


export const jsonParse = v => {
  try {
    return JSON.parse(v);
  } catch {
    return {};
  }
};