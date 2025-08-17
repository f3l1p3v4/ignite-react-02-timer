import { FormContainer, MinutesAmountInput, TaskInput, ConentMinutesAmount } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Próxima ação</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="O que você vai fazer agora?"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestions">
        <option value="Desenvolvimento" /> 
        <option value="Conferência" />
        <option value="Pausa" />
      </datalist>

      <label htmlFor="minutesAmount">Durante</label>
      <ConentMinutesAmount>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={5}
          max={60}
          disabled={!!activeCycle}
          {...register('minutesAmount', { valueAsNumber: true })}
        />

        <span>minutos.</span>
      </ConentMinutesAmount>
    </FormContainer>
  )
}