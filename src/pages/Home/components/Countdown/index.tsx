import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect, useRef } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { CountdownContainer, Separator } from './styles'

function playBeep(frequency: number, duration: number, volume: number = 0.5) {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
  const oscillator = audioContext.createOscillator()
  const gainNode = audioContext.createGain()

  oscillator.connect(gainNode)
  gainNode.connect(audioContext.destination)

  oscillator.type = 'sine'
  oscillator.frequency.value = frequency
  gainNode.gain.value = volume

  oscillator.start()
  oscillator.stop(audioContext.currentTime + duration)
}

// ADICIONE ESTA FUNÇÃO AQUI (logo após a playBeep)
function playPomodoroBeeps(secondsRemaining: number) {
  if (secondsRemaining === 10) {
    // Primeiro beep (tum)
    playBeep(440, 0.2, 0.3)
  } else if (secondsRemaining === 9) {
    // Segundo beep (tum)
    playBeep(440, 0.2, 0.3)
  } else if (secondsRemaining === 8) {
    // Segundo beep (tum)
    playBeep(440, 0.2, 0.3)
  } else if (secondsRemaining === 7) {
    // Segundo beep (tum)
    playBeep(440, 0.2, 0.3)
  } else if (secondsRemaining === 6) {
    // Segundo beep (tum)
    playBeep(440, 0.2, 0.3)
  } else if (secondsRemaining === 5) {
    // Segundo beep (tum)
    playBeep(440, 0.2, 0.3)
  } else if (secondsRemaining === 4) {
    // Segundo beep (tum)
    playBeep(440, 0.2, 0.3)
  } else if (secondsRemaining === 3) {
    // Segundo beep (tum)
    playBeep(440, 0.2, 0.3)
  } else if (secondsRemaining === 2) {
  // Segundo beep (tum)
  playBeep(440, 0.2, 0.3)
  } else if (secondsRemaining === 1) {
    // Beep final mais longo (tummmm)
    playBeep(880, 0.5, 0.5)
  }
}

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const hasPlayedFinalSound = useRef(false)

  useEffect(() => {
    let interval: number
  
    if (activeCycle) {
      // Resetar a ref quando um novo ciclo começar
      hasPlayedFinalSound.current = false
      
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )
  
        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
          
          // Tocar sons quando faltarem 3, 2 e 1 segundos
          const secondsRemaining = totalSeconds - secondsDifference
          
          // SUBSTITUA ESTE BLOCO IF:
          if (secondsRemaining <= 10 && secondsRemaining > 0 && !hasPlayedFinalSound.current) {
            playPomodoroBeeps(secondsRemaining)
            
            // Marcar que o som final foi tocado no último segundo
            if (secondsRemaining === 1) {
              hasPlayedFinalSound.current = true
            }
          }
        }
      }, 1000)
    }
  
    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    setSecondsPassed,
    markCurrentCycleAsFinished,
  ])

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}