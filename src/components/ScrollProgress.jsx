import { useEffect, useState } from "react";
export default function ScrollProgress(){
  const [w, setW] = useState(0);
  useEffect(()=>{
    const onScroll = () => {
      const s = window.scrollY;
      const h = document.body.scrollHeight - window.innerHeight;
      setW(h > 0 ? (s/h)*100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return ()=> window.removeEventListener("scroll", onScroll);
  }, []);
  return <div className="scrollbar" style={{width:`${w}%`}} aria-hidden />;
}
