import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem auto;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin: 50px 20px;
    padding: 25px;
  }
`

export const LinkCode = styled.a`
   position: absolute;
    bottom: 20px;
    right: 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    font-size: 0.9rem;
    font-weight: 700;
    text-decoration: none;
    background-color: #30363d;
    border: 1px solid #505152;
    border-radius: 8px;
    color: #ffffff;
    padding: 10px;

    transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }


  svg {
    font-size: 1rem;
  }
`