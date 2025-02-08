import { useState, useEffect } from "react";

export const useTypewriter = (
  text1: string,
  text2: string,
  typingSpeed: number = 150,
  pauseDuration: number = 1000
) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState(text1);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      // Escrevendo o texto
      if (displayText.length < currentText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        // Pausa antes de começar a apagar
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Apagando o texto
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        }, typingSpeed / 2);
      } else {
        // Troca o texto e começa a escrever novamente
        setIsDeleting(false);
        setCurrentText(currentText === text1 ? text2 : text1);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentText, text1, text2, typingSpeed, pauseDuration]);

  return displayText;
};