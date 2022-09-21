import React, {FC} from 'react'
import { Route, Routes } from 'react-router-dom'

type Props = {
    children: React.ReactNode
}

export const RouteNotFound : FC<Props> = (props) => {
  return (
    <Routes>
        {props.children}
        <Route path='*' element={<div>Not found</div>}></Route>
    </Routes>
  )
}
