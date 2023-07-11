import React, { Fragment } from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/Hero-Section/HeroSection'
import Company from '../components/Company-section/Company'
import Aboutus from '../components/About-us/Aboutus'
import Courses from '../components/Courses-section/Courses'
import ChooseUs from '../components/Choose-us/ChooseUs'
import Feature from '../components/Feature-section/Feature'
import FreeCourse from '../components/Free-course-section/FreeCourse'


const Home = () => {
  return (
    <Fragment>
        <Header />
        <HeroSection/>
        <Company />
        <Aboutus />
        <Courses/>
        <ChooseUs/>
        <Feature/>
        <FreeCourse/>
    </Fragment>
  )
}

export default Home