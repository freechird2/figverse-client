import { useEffect, useRef, useState } from 'react'

const useTyping = (sentence: string, delay: number = 5) => {
    const [word, setWord] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)
    const lastTimestamp = useRef<number | null>(null)
    const lastSentence = useRef<string | null>(null)

    useEffect(() => {
        let animationFrameId: number = 0

        const animateTyping = (timestamp: number) => {
            if (!sentence) return
            if (lastTimestamp.current === null) lastTimestamp.current = timestamp
            if (lastSentence.current === null) lastSentence.current = sentence
            else if (lastSentence.current !== sentence) {
                setWord('')
                setCurrentIndex(0)
                lastSentence.current = sentence
            }

            const elapsed = timestamp - lastTimestamp.current

            if (elapsed > 0) {
                lastTimestamp.current = timestamp

                if (sentence.length > currentIndex) {
                    setWord((state) => {
                        const newState = (state += sentence[currentIndex])
                        setCurrentIndex((prevIndex) => prevIndex + 1)
                        return newState
                    })
                }
            }
            animationFrameId = requestAnimationFrame(animateTyping)
        }

        animationFrameId = requestAnimationFrame(animateTyping)

        return () => {
            cancelAnimationFrame(animationFrameId)
        }
    }, [currentIndex, delay, sentence])

    return { word }
}

export default useTyping
