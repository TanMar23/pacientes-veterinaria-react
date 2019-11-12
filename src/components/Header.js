import React from 'react'

//Como parametro se pueden utilizar los props
const Header = ({ titulo }) => (
  <header>
    <h1 className="text-center">{titulo}</h1>
  </header>
)

export default Header
