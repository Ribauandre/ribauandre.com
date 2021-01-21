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
    grid-gap: 3rem;
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
        <Avatar src={avatar} alt="Andre Ribau" />
        <BigTitle>Andre Ribau,</BigTitle>
        <Subtitle>
          SRE/SE with a passion for all things tech 👨‍💻
          <br />
          ribauandre@yahoo.com | (347) 915-3973
        </Subtitle>
      </Hero>

      <About offset={1}>
        <Title>Experience</Title>
        <AboutHero>
          <AboutSub>
            <b>Site Reliability Engineer & Associate Programmer Analyst / Broadridge Financial Solutions</b>
            <br />
            <i>Jul 2018 - Current</i>
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Participate in every aspect of the software life cycle from completing sprints to production deployments.
          Through daily stand up meetings, sprint cycles, and test driven development insuring a high standard of code
          quality. Work with cross functional teams to meet development and deployment needs, creating an effective
          CI/CD pipeline, automated testing, and self healing. Developed and implement a REST api (Data Fabric) that is
          used by multiple high profile clients today
        </AboutDesc>
        <AboutHero>
          <AboutSub>
            <b>Java Developer & Associate Programmer Analyst / Broadridge Financial Solutions</b>
            <br />
            <i>Jul 2017 - Jul 2018</i>
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Led and took part in the design, development, deployment, and support of a full stack company wide management
          application. (Skillsbank) Troubleshoot real-time production issues to ensure smooth running of impacted
          application within SLAs. Recommend solutions and identified required program corrections. Deployed production
          enhancements and analyzed program changes to ensure uninterrupted operation.
        </AboutDesc>
        <AboutHero>
          <AboutSub>
            <b>Software developer / Penn State, The College of IST</b>
            <br />
            <i>Aug 2016 - Jan 2017</i>
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Worked with a team to debug a system written in Python that is used to rate Teaching Assistants. Released and
          tested patched versions of the system, and worked with users to better understand needs. Created and partook
          in team’s project management creating comprehensive plans and deadlines.
        </AboutDesc>
        <AboutHero>
          <AboutSub>
            <b>Web design & Web management Shadowing / Luce, Schwab & Kase, Inc.</b>
            <br />
            <i>May 2013 - Aug 2015</i>
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Shadowed Luce, Schwab & Kase, Inc.’s Website manager and developer. (lskair.com) Aided in maintaining the
          website using HTML/CSS. Helped design Luce, Schwab & Kase, Inc.’s website with interactive user design in
          mind.
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

      <Projects offset={3}>
        <Title>Skills</Title>
        <ProjectsWrapper>
          <ProjectCard title="Tech" bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"> 
            - Amazon Web Services
            <br/>
            - Cloud Foundry
            <br/>
            - Docker
            <br/>
            - Agile
            <br/>
            - Scrum
            <br/>
            - Continuous Integration
            <br/>
            - Test Driven Development
            <br/>
            - Jenkins
            <br/>
            - Linux
            <br/>
            - Nosql (Marklogic, MongoDB)
            <br/>
            - RDB (MySql, AS400)
          </ProjectCard>
          <ProjectCard title="Code" bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)">
            - Java
            <br/>
            - Python
            <br/>
            - JavaScript
            <br/>
            - Shell
            <br/>
            - Terraform
            <br/>
            - Yaml
            <br/>
            - Groovy
            <br/>
            - HTML, CSS
            <br/>
            - Jquery, JSTL
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>

      <Contact offset={4}>
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
