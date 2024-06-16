import { GithubLogo } from '@phosphor-icons/react'

import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'

import { LayoutContainer, LinkCode } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <LinkCode href='https://github.com/f3l1p3v4/ignite-react-02-timer' >
        < GithubLogo />
        Ver Código
      </LinkCode>
    </LayoutContainer>
  )
}