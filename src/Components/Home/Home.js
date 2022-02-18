import React, {useState} from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import WorkList from '../WorkBar/WorkList';
import './Home.css';

function Home() {
  let [ejemplo, setEjmplo] = useState("hola")
  let [ejemplo2, setEjmplo2] = useState("hola2")
  let [ejemplo3, setEjmplo3] = useState("hola3")
  let [userSearch, setUserSearch] = useState("");
  console.log(userSearch);
  const {work, render} = WorkList(ejemplo, ejemplo2, ejemplo3);
  return (
    <main className="containreAll">
      <h1 className='gitHubTitle'>Github <span>Jobs</span></h1>
      <Header/>
      <section className={work === undefined ? "loadingContentHome" : "containetMain"}>
          <Sidebar setUserSearch={setUserSearch}/>
          {render}
      </section>
      <Footer/>
    </main>
  );
}

export default Home;