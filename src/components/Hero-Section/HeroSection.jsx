import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../../assests/images/hero-img1.png'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section id='home'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="hero_content">
                        <h2 className='mb-4'>Anytime Anywhere <br/>Learn on your Suitable <br/>Schedule</h2>
                        <p className='mb-5'>For every student, every classroom. <br/>Real results. We’re a nonprofit with <br/>the mission to provide a free, world-class<br/> education for anyone, anywhere.</p>
                    </div>
                        <div className="search">
                            <input type='text' placeholder='Search'/>
                            <button className="btn">Search</button>
                        </div>
                  
                </Col>

                <Col lg='6' md='6'>
                    <img src={heroImg} alt='' className=''/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default HeroSection