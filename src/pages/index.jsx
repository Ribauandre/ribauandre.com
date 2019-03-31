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
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
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
    <Parallax pages={5}>
      <Hero offset={0}>
      <Avatar src={avatar} alt="John Doe" />
        <BigTitle>
          Andre Ribau,
        </BigTitle>
        <Subtitle>SRE/SE with a passion for all things tech. 👨‍💻</Subtitle>
      </Hero>
      <About offset={1}>
        <Title>Work</Title>
        <AboutHero>
          <AboutSub>
          <b>Site Reliability Engineer & Associate Programmer Analyst / Broadridge Financial Solutions
          </b>
          <br/><i>Jul 2018 - Current</i>
          </AboutSub>
        </AboutHero>
        <AboutDesc>
        Participate in every aspect of the software life cycle from completing sprints to production deployments. Through daily stand up meetings, sprint cycles, and test driven development insuring a high standard of code quality. Work with cross functional teams to meet development and deployment needs, creating an effective CI/CD pipeline, automated testing, and self healing. Developed and implement a REST api (Data Fabric) that is used by multiple high profile clients today
        </AboutDesc>
        <br/>
        <AboutHero>
          <AboutSub>
          <b>Java Developer & Associate Programmer Analyst / Broadridge Financial Solutions
          </b>
          <br/><i>Jul 2017 - Jul 2018</i>
          </AboutSub>
        </AboutHero>
        <AboutDesc>
        Led and took part in the design, development, deployment, and support of a full stack company wide management application. (Skillsbank) Troubleshoot real-time production issues to ensure smooth running of impacted application within SLAs. Recommend solutions and identified required program corrections. Deployed production enhancements and analyzed program changes to ensure uninterrupted operation.
        </AboutDesc>
      </About>
      <Projects offset={2}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Library-Lender"
            link="https://thawing-citadel-50331.herokuapp.com/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            Uses MongoDB Atlas cloud data-base on an elastic cluster. Node.js Express as the application server. Then React as the front-end technology and Heroku for deployment. This MERN stack was used to create a fast, responsive Library system that allows a user to Donate a book, Borrow/Return a book, or Delete the book. Please feel free to add a book!
          </ProjectCard>
          <ProjectCard
            title="SkillsBank"
            link=""
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Utilizes full stack J2EE, AS400, and WebSphere, to deliver an application that allows an associate to rate themselves on many different subjects and gain recognition for what they may know while also allowing managers to identify gaps in skill and lead an associate to develop their skills. Led a team in an agile environment delegating sprints and holding SCRUM meetings to ensure strict deadlines were meet
          </ProjectCard>
          <ProjectCard
            title="BudgetTime.io"
            link="https://github.com/Ribauandre/BudgetTime.io"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            A stand alone application that uses MySql as a database, Java in the middle and JavaFX as the front-end. This application allows you to create an account and set categories in which you are allowed to alot a precentage of your net income to. It then takes that information and creates charts and graphs that shows how much of your money goes into each category.
          </ProjectCard>
          <ProjectCard
            title="Region Compare Utility"
            link=""
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            This utility was made in a full stack JEE for use by the client services department to effectively compare multiple client regions across different LPARS. This is achieved by running as400 commands to create an overview object and then SQL commands to read in the data to java which then quantities and displays the differences between the regions in a simple and user friendly manner.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:plizNoSp4m@domain.tld">Hi</a> or find me on other platforms:{' '}
            <a href="https://dribbble.com/LekoArts">Dribbble</a> &{' '}
            <a href="https://www.instagram.com/lekoarts.de/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Gatsby Starter Portfolio Cara.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>. Made by{' '}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index