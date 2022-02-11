import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import WorkList from '../WorkBar/WorkList';
import './Home.css';

function Home() {
  const {work, render} = WorkList();
  return (
    <main className="containreAll">
      <h1 className='gitHubTitle'>Github <span>Jobs</span></h1>
      <Header/>
      <section className={work === undefined ? "loadingContentHome" : "containetMain"}>
          <Sidebar/>
          {render}
      </section>
      <Footer/>
    </main>
  );
}

export default Home;