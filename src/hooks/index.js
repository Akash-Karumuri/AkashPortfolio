import { useState, useEffect } from "react";

/**
 * Typing / typewriter animation hook
 */
export function useTyping(words, speed = 80, pause = 1800) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wi];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length)
            setTimeout(() => setDeleting(true), pause);
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setDeleting(false);
            setWi((wi + 1) % words.length);
          }
        }
      },
      deleting ? 40 : speed,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, wi, words, speed, pause]);

  return text;
}

/**
 * Animates a number from 0 → target when `start` becomes true
 */
export function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const prog = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(prog * target));
      if (prog < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}
