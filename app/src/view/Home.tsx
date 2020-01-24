import React from 'react';
import { RouteComponentProps } from 'react-router';

import '../App.css';

const Home = (props: RouteComponentProps) => {

  return (
      <div>
        <div className='App-container'>
            <div className='App-sidebar'>
              <p>Side Bar</p>
            </div>
            <div className='App-header'>
              <h1>Harish</h1>
            </div>
            <div className='App-body'>
              <div>
                <h2>Software Engineer</h2>
                <h3>About</h3>
                <p>As a highly motivated, talented and committed ITprofessional looking for opportunities to demonstrate my abilities, knowledge and skills. I am trying to get into the IT field and become an independent person. I’m always interested in hearing from former acquaintances or new acquaintances so feel free to contact me if you’d like to connect.</p>
              </div>
            </div>
            <div className='App-footer'>
              <p>Footer</p>
            </div>
        </div>
      </div>
  );
}

export default Home;