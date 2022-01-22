import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import WorkList from '../WorkBar/WorkList';
import './Home.css';

function Home() {
  return (
    <main className="homeContainreAll">
      <h1 className='gitHubTitle'>Github <span>Jobs</span></h1>
      <Header/>
      <section className='containetMainHome'>
          <Sidebar/>
          <WorkList/>
      </section>
    </main>
  );
}

export default Home;