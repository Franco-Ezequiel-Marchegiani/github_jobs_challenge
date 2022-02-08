import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import WorkList from '../WorkBar/WorkList';
import './Home.css';

function Home() {
  return (
    <main className="containreAll">
      <h1 className='gitHubTitle'>Github <span>Jobs</span></h1>
      <Header/>
      <section className='containetMain'>
          <Sidebar/>
          <WorkList/>
      </section>
      <Footer/>
    </main>
  );
}

export default Home;