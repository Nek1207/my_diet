import React from 'react'

import Button from "../../components/Button/Button"
import Input from '../../components/Input/InputOld'

import { useScrollAnimation } from '../../smoothscrolling'
import { useScrollAnimationL } from '../../smoothscrolling-l'


import logo from "./../../assets/logotype/logotype_darkgreen.svg"
import projectnekLogo from "./../../assets/logotype/logotype_projectnek_darkgreen.svg"

import rounds from "./../../assets/content/cont_sectors.png"
import branch from "./../../assets/content/information_branch.svg"
import branch2 from "./../../assets/content/information_branch2.svg"
import branches from "./../../assets/content/cont_branches.svg"
import waves from "./../../assets/content/cont_waves.svg"

import leaf1 from "./../../assets/content/cont_leaf.svg"
import leaf2 from "./../../assets/content/cont_leaf2.svg"
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'


const Account = () => {
  const sectionRefs = useScrollAnimation(0.6)
  const branchesRefs = useScrollAnimationL(0.3)

  return (
    <>
      <Header />
      
      <Footer />
    </>
  )
}

export default Account