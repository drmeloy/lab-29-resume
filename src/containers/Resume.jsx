import React, { Component } from 'react';
import data from '../data/resume.json';
import Name from '../components/name/Name.jsx';
import Title from '../components/title/Title.jsx';
import Summary from '../components/summary/Summary.jsx';
import Contact from '../components/contact/Contact.jsx';
import Skills from '../components/skills/Skills.jsx';
import Experience from '../components/experience/Experience.jsx';
import Projects from '../components/projects/Projects.jsx';
import Education from '../components/education/Education.jsx';

export default class Resume extends Component {
  state = {
    name: data.name,
    title: data.title,
    summary: data.summary,
    phone: data.phone,
    email: data.email,
    sites: data.sites,
    skills: data.skills,
    experience: data.experience,
    projects: data.projects,
    education: data.education
  }

  render() {
    const { name, title, summary, phone, email, sites, skills, experience, projects, education } = this.state;

    return (
      <>
        <Name name={name} />
        <Title title={title} />
        <Summary summary={summary} />
        <Contact phone={phone} email={email} sites={sites} />
        <Skills skills={skills} />
        <Experience experience={experience} />
        <Projects projects={projects} />
        <Education education={education} />
      </>
    );
  }
}