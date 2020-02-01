import React, { Component } from 'react';

export default class Resume extends Component {
  state: {

  }

  render() {
    return (
      <>
        <Name />
        <Title />
        <Summary />
        <Contact />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </>
    );
  }
}