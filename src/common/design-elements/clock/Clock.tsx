import React, { FC, useEffect, useRef } from 'react'
import './Clock.scss'

export type ClockProps = {
  className?: string
}

export const Clock : FC<ClockProps> = (props) => {

    const hours = useRef(null);
    const minutes = useRef(null);
    const seconds = useRef(null);

    const clock = () => {
        let today = new Date();
        let h = (today.getHours() % 12) + today.getMinutes() / 59; // 22 % 12 = 10pm
        let m = today.getMinutes(); // 0 - 59
        let s = today.getSeconds(); // 0 - 59
      
        h *= 30; // 12 * 30 = 360deg
        m *= 6;
        s *= 6; // 60 * 6 = 360deg
      
        rotation(hours, h);
        rotation(minutes, m);
        rotation(seconds, s);
      
        // call every second
        setTimeout(clock, 500);
    }
      
    const rotation = (target : any, val : number) => {
    if (target.current) {
        target.current.style.transform = `rotate(${val}deg)`;
      }
    }
      

    useEffect(() => {
        clock();
        console.log('tik')
      // window.addEventListener('load', clock);
    
      // return () => {
      //   window.removeEventListener('load', clock);
      // }
    }, [])
    

  return (
    <div className={`clock ${props.className}`}>
      <div ref={hours} className="hand hours"></div>
      <div ref={minutes} className="hand minutes"></div>
      <div ref={seconds} className="hand seconds"></div>
      <div className="point"></div>
      <div className="marker">
        <span className="marker__1"></span>
        <span className="marker__2"></span>
        <span className="marker__3"></span>
        <span className="marker__4"></span>
      </div>
    </div>
  )
}
