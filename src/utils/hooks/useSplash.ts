import { useState, useEffect } from "react";

export const useSplash =()=> {
    const [isInited, setIsInited] = useState(false);

    function hideSplash(){
      setIsInited(true);
    }
  
    useEffect(() =>{
      let timerId = setTimeout(hideSplash, 3000);
      return () => clearTimeout(timerId);
    }, []);

    return isInited;
};