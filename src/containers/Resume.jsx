import React, { Component } from 'react';

export default class Resume extends Component {
  state = {
    name: '',
    title: '',
    summary: '',
    phone: '',
    email: '',
    sites: [],
    skills: [],
    experience: [],
    projects: [],
    education: []
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