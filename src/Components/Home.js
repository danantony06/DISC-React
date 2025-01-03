import "./Home.css";
import NavBar from './NavBar.js';
import Profile from './Profile.js';
import Footer from './Footer.js';

function Home() {
    return (
      <div className="App">
        <NavBar />
        <div className="profile-row">
          <Profile picture={"https://i.postimg.cc/FRHjPqnz/Daniel-Antony-jpg.png"} Fname={"Daniel"} Lname={"Antony"} sport={"Basketball"} biography={"Hi, I'm Daniel! Basketball is my passion. If you don't think Lebron is the GOAT, please do not click on my profile."} />
          <Profile picture = {"https://i.postimg.cc/s2QBvr8p/Screenshot-2024-12-20-235351.png"} Fname={"Iga"} Lname={"Świątek"} sport={"Tennis"} biography={"Hi, I’m Iga Swiatek, a tennis pro passionate about the game and connecting with fellow athletes. Let’s rally!"}/>
        </div>
        <div className="profile-row">
          <Profile picture={"https://i.postimg.cc/y86c62sP/Screenshot-2024-12-20-235340.png"} Fname={"Beyoncé"} Lname={""} sport={"Pickeball"} biography={"Hi, I’m Beyoncé! When I’m not performing, you can catch me on the pickleball court bringing the same energy and rhythm. Let’s connect!"} />
          <Profile picture={"https://i.postimg.cc/DwYJvZCv/Screenshot-2024-12-20-235358.png"} Fname={"Sabrina"} Lname={"Ionescu"} sport={"Basketball"} biography={"Hi, I’m Sabrina Ionescu! I’m all about hoops, teamwork, and connecting with other athletes. Let’s chat and share our love for sports!"} />
        </div>
        <div className="profile-row">
          <Profile picture={"https://i.postimg.cc/qqd6P512/Screenshot-2024-12-20-235422.png"} Fname={"Taylor"} Lname={"Swift"} sport={"Volleyball"} biography={"Hi, I’m Taylor Swift! When I’m not writing songs, I’m spiking and serving on the volleyball court. Always up for a game and making new connections!"} />
          <Profile picture = {"https://i.postimg.cc/c408TPgS/Screenshot-2024-12-20-235406.png"} Fname={"LeBron"} Lname={"Raymone James"} sport={"Basketball"} biography={"Hi, I’m LeBron. I play basketball and I am the GOAT. Let’s Connect!"}/>
        </div>
  
        <Footer />
      </div>
    );
  }
  
  export default Home;
  