// Toolbar.tsx
import React from 'react'
import { styled } from '@mui/system'
// import { Menu } from '../types/Menu'
import { AppBar, Toolbar, Button, IconButton } from '@mui/material'
import type { ToolbarProps } from '../types/Menu'
import { Link as RouterLink } from 'react-router-dom'

const StyledAppBar = styled(AppBar)`
  background-color: #333;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`
export default function NavBar (props: ToolbarProps): JSX.Element {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <IconButton edge='start' color='inherit' aria-label='menu' />
        {props.subs.map((menu) => (
          <Button
            color="inherit"
            component={RouterLink}
            to={menu.url}
            key={menu.id}
          >
            {menu.name}
          </Button>
        ))}
      </Toolbar>
    </StyledAppBar>
  )
}
