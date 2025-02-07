"use client"

import { useState, useEffect } from "react"

export const useTypewriter = (text: string, typingSpeed: number, deletingSpeed: number) => {
  const [displayText, setDisplayText] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isTyping) {
      if (displayText.length < text.length) {
        timer = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length + 1))
        }, typingSpeed)
      } else {
        setIsTyping(false)
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(text.slice(0, displayText.length - 1))
        }, deletingSpeed)
      } else {
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timer)
  }, [displayText, isTyping, text, typingSpeed, deletingSpeed])

  return displayText
}

