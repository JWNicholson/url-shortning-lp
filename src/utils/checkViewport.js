import  { useState,useEffect} from 'react';

const checkViewport = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight,setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleScreenResize = () => {
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        }

        window.addEventListener("resize", handleScreenResize);
        return () => window.removeEventListener("resize", handleScreenResize);
        
    }, []);

    return (
       {screenWidth,screenHeight}
      
    )
}

export default checkViewport;



