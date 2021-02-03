import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 4rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 4rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={2}>
      <Hero offset={0}>
        <Avatar src={avatar} alt="Andre Ribau" />
        <BigTitle>Andre Ribau,</BigTitle>
        <Subtitle>
          SRE/SE with a passion for all things tech 👨‍💻
          <br />
          ribauandre@yahoo.com | (347) 915-3973
        </Subtitle>
      </Hero>

      <Contact offset={1}>
        <Inner>
          <Title>Contact Me</Title>
          <ContactText>
            Feel free to email me <a href="mailto:ribauandre@yahoo.com">(ribauandre@yahoo.com)</a> or checkout my other links:{' '}
            <a href="https://www.linkedin.com/in/ribauandre">LinkedIn</a> &{' '}
            <a href="https://github.com/Ribauandre">GitHub</a>
          </ContactText>
        </Inner>
        <Footer>
          <a href="https://github.com/Ribauandre/ribauandre.com">Source Code</a>
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
