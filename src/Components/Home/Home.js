import React, {useState} from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import WorkList from '../WorkBar/WorkList';
import './Home.css';

function Home() {
  let [userSearch, setUserSearch] = useState("");
  let [fullTime, setFullTime] = useState(false);
  console.log(fullTime);
  /* console.log(work[5].MatchedObjectDescriptor.PositionSchedule[0].Name);  */
  const {work, render} = WorkList(userSearch);
  return (
    <main className="containreAll">
      <h1 className='gitHubTitle'>Github <span>Jobs</span></h1>
      <Header setUserSearch={setUserSearch}/>
      <section className={work === undefined ? "loadingContentHome" : "containetMain"}>
          <Sidebar setFullTime={setFullTime} fullTime={fullTime}/>
          {render}
      </section>
      <Footer/>
    </main>
  );
}

export default Home;