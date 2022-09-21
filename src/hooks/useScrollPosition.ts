import { useEffect, useState } from "react";

const useScrollPosition = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollDown, setScrollDown] = useState(false);
    
    const handleScroll = () => {
        const position = window.pageYOffset;
        position > scrollPosition ? setScrollDown(true) : setScrollDown(false);
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

    return () =>  window.removeEventListener('scroll', handleScroll); 
    }, [scrollPosition]);

return {scrollPosition, scrollDown}
}

export default useScrollPosition