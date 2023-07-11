import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/Hero-Section/HeroSection'
import Company from '../components/Company-section/Company'
import Aboutus from '../components/About-us/Aboutus'
import Courses from '../components/Courses-section/Courses'
import ChooseUs from '../components/Choose-us/ChooseUs'


const Home = () => {
  return (
    <Fragment>
        <Header />
        <HeroSection/>
        <Company />
        <Aboutus />
        <Courses/>
        <ChooseUs/>
    </Fragment>
  )
}

export default Home