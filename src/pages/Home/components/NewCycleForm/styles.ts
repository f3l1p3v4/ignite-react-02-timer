import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    display: grid;

    label {
      font-size: 0.9rem;
    }
  }
`

const BaseInput = styled.input`
  background: transparent;
  width: 100%;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }
  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }

  @media (max-width: 768px) {
    height: 2rem;
    font-size: 0.9rem;
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const ConentMinutesAmount = styled.div`

  @media (max-width: 768px) {
    display: flex;
    justify-content: left;
    align-items: end;
    gap: 5px;

    span {
      font-size: 0.9rem
    }
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`