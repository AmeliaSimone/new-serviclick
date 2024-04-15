import React from 'react'

import styles from "./Logo.module.scss"

interface Ilogo {width: string, height: string}
const Logo = ({width, height}:Ilogo) => {
  return (
    <img style={{width, height}} src="/img/hero/logo.png" alt="" />
  )
}

export default Logo;