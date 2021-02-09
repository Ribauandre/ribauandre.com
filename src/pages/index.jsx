import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'
import { Gi3DHammer } from "react-icons/gi";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaExternalLinkSquareAlt } from "react-icons/fa";




// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import avatar from '../images/avatar.jpg'
import Contact from '../views/Contact'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
  grid-template-columns: 1fr;
  grid-gap: 6rem;
  }
  @media (max-width: 900px) {
    grid-gap: 4rem;
  }
  @media (max-width: 600px) {
    grid-gap: 2rem;
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
  text: center;
  justify-content: center;
  a {
  padding: 10px
  }
`
const AboutSub = styled.span`
  ${tw`text-center text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
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
    <Parallax pages={4}>
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
      </Hero>
        <Projects offset={1.4}>
              <Title>Projects</Title>
              <ProjectsWrapper>
               <ProjectCard title="Self-Service Portal" bg="#489ca3">
                                Utilizes full stack React, Postgres, and SpringBoot Rest API/Java backend,
                                to deliver an application that allows associates to determine source code automatically builds/deploys code to PAS infrastructure.
                                Along with persistent environment status overviews and status pages.
                </ProjectCard>
                <ProjectCard
                  title="Library-Lender"
                  link="https://thawing-citadel-50331.herokuapp.com/"
                  bg="#6648a3"
                >

                  Uses MongoDB Atlas cloud data-base on an elastic cluster. Node.js Express as the application server. Then
                  React as the front-end technology and Heroku for deployment. This MERN stack was used to create a fast,
                  responsive Library system that allows a user to Donate a book, Borrow/Return a book, or Delete the book.
                  Please feel free to add a book!
                  <br/>
                  Click here to access live the live demo!
                </ProjectCard>
                <ProjectCard title="SkillsBank" bg="#a3489a">
                  Utilizes full stack J2EE, AS400, and WebSphere, to deliver an application that allows an associate to rate
                  themselves on many different subjects and gain recognition for what they may know while also allowing
                  managers to identify gaps in skill and lead an associate to develop their skills.
                </ProjectCard>
                <ProjectCard
                  title="BudgetTime.io"
                  link="https://github.com/Ribauandre/BudgetTime.io"
                  bg="#a34848"
                >
                  A stand alone application that uses MySql as a database, Java in the middle and JavaFX as the front-end.
                  This application allows you to create an account and set categories in which you are allowed to alot a
                  precentage of your net income to. It then takes that information and creates charts and graphs that shows
                  how much of your money goes into each category.
                </ProjectCard>
              </ProjectsWrapper>
            </Projects>
        <Contact offset={3}>
        <Inner>
        <ContactText>
         <LinkWrapper>
         Check out my links below!
          </LinkWrapper>
        </ContactText>
        </Inner>
        <Footer>
        <BigTitle>
        <LinkWrapper>
         <a href="https://github.com/Ribauandre"><FaGithubSquare /></a>
         <a href="https://www.linkedin.com/in/ribauandre"><FaLinkedin /></a>
         <a href="https://triplebyte.com/tb/andre-ribau-uk5qixs"><FaExternalLinkSquareAlt /></a>
         </LinkWrapper>
         </BigTitle>
          <a href="https://github.com/Ribauandre/ribauandre.com">Source Code</a>
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index