import React from 'react';
import { RouteComponentProps } from 'react-router';

import '../App.css'; //

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
            <div className='App-main'>
              <div>
                <p>Software Engineer</p>
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