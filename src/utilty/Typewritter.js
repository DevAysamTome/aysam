import React, { useEffect, useRef } from "react";

const Typewriter = ({ text }) => {
  const textRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const letters = text.split("");
    let index = 0;

    const type = () => {
      if (index < letters.length) {
        textRef.current.innerHTML += letters[index++];
      } else {
        cursorRef.current.classList.add("hidden");
      }

      setTimeout(type, 100);
    };

    type();

    return () => {
      textRef.current.innerHTML = "";
      cursorRef.current.classList.remove("hidden");
      index = 0;
    };
  }, [text]);

  return (
    <div className="typewriter">
      <div className="text" ref={textRef}></div>
      <div className="cursor" ref={cursorRef}></div>
    </div>
  );
};

export default Typewriter;