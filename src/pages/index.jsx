import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import { Gi3DHammer } from "react-icons/gi";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";




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
  ${tw`text-center flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`
const AvatarWrapper = styled.div`
  ${tw`items-center flex`};
  margin:0 auto;
  justify-content: center;
`
const LinkWrapper = styled.div`
  ${tw`items-center flex`};
  width: 100%
  justify-content: center;
  a {
  padding: 10px
  }
`

const AboutSub = styled.span`
  ${tw`text-center text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-blue font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={3}>
      <Hero offset={0} factor={1}>
        <AvatarWrapper>
        <Avatar src={avatar} alt="Andre Ribau" />
        </AvatarWrapper>
        <BigTitle><span>Andre Ribau</span> </BigTitle>
         <BigTitle>
        <Gi3DHammer />
        </BigTitle>
        <Subtitle>
          SRE/SWE at Broadridge with a passion for all things tech!
        </Subtitle>
        <br/>
         <BigTitle>
         <LinkWrapper>
          <a href="https://github.com/Ribauandre"><FaGithubSquare /></a>
          <a href="mailto:ribauandre@yahoo.com"><FaEnvelopeSquare /></a>
          <a href="https://www.linkedin.com/in/ribauandre"><FaLinkedin /></a>
          </LinkWrapper>
          </BigTitle>
      </Hero>
      <Projects offset={1} factor={2}>
                    <Title>Projects</Title>
                    <ProjectsWrapper>
                      <ProjectCard
                        title="Library-Lender"
                        link="https://thawing-citadel-50331.herokuapp.com/"
                        bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
                      >
                        Uses MongoDB Atlas cloud data-base on an elastic cluster. Node.js Express as the application server. Then
                        React as the front-end technology and Heroku for deployment. This MERN stack was used to create a fast,
                        responsive Library system that allows a user to Donate a book, Borrow/Return a book, or Delete the book.
                        Please feel free to add a book!
                      </ProjectCard>
                      <ProjectCard title="SkillsBank" bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)">
                        Utilizes full stack J2EE, AS400, and WebSphere, to deliver an application that allows an associate to rate
                        themselves on many different subjects and gain recognition for what they may know while also allowing
                        managers to identify gaps in skill and lead an associate to develop their skills. Led a team in an agile
                        environment delegating sprints and holding SCRUM meetings to ensure strict deadlines were meet
                      </ProjectCard>
                      <ProjectCard
                        title="BudgetTime.io"
                        link="https://github.com/Ribauandre/BudgetTime.io"
                        bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
                      >
                        A stand alone application that uses MySql as a database, Java in the middle and JavaFX as the front-end.
                        This application allows you to create an account and set categories in which you are allowed to alot a
                        precentage of your net income to. It then takes that information and creates charts and graphs that shows
                        how much of your money goes into each category.
                      </ProjectCard>
                      <ProjectCard title="Region Compare Utility" bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)">
                        This utility was made in a full stack JEE for use by the client services department to effectively compare
                        multiple client regions across different LPARS. This is achieved by running as400 commands to create an
                        overview object and then SQL commands to read in the data to java which then quantities and displays the
                        differences between the regions in a simple and user friendly manner.
                      </ProjectCard>
                    </ProjectsWrapper>
                  </Projects>
    </Parallax>
  </>
)

export default Index