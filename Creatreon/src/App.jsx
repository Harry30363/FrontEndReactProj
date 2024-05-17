import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Loginpage from './loginpage'
import ReactDOM from 'react-dom/client'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
    <header>
        <div className="menu-btn"></div>
        <div className="navigation">
            <div className="navigation-items">
                <a href="#">Creators</a>
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Resources</a>
            </div>
        </div>
        <a href="#" className="brand">Creatreon</a>
        <div className="right items">
            <input type="search" className="onesearch" placeholder="Find a Creator" data-results="false" defaultValue=""
                inputMode="search" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
                aria-labelledby="search-label"/>
            <a className="onebut" href="/login">
                <button data-label="Log in">Log in</button>
            </a>
            <a className="twobut" href="src\loginpage.jsx">
                <button data-label="Get Started" className="">Get Started</button>
            </a>
        </div>
    </header>
    <section className="home">
        <video className="video-slide active" src="src\assets\2.mp4" autoPlay muted loop></video>
        <video className="video-slide" src="src\assets\4.mp4" autoPlay muted loop></video>
        <video className="video-slide" src="src\assets\6.mp4" autoPlay muted loop></video>

        <div className="content active">
            <h1>Make it<br/><span>making art</span></h1>
            <a href="#">Read More</a>
        </div>
        <div className="content">
            <h1>Your house<br/><span>Your rules</span></h1>
            <a href="#">Read More</a>
        </div>
        <div className="content">
            <h1>Speak<br/><span>volumes</span></h1>
            <a href="#">Read More</a>
        </div>
        <div className="slider-navigation">
            <div className="nav-btn active"></div>
            <div className="nav-btn"></div>
            <div className="nav-btn"></div>
        </div>
    </section>
    <div>
        <img className="main-two-img" src="src\assets\maintwo.jpg" alt="maintwo"/>
    </div>
    <div className="main-two-content">
        <h1>"Creatreon provides a space for artists to <br/> sustain themselves by connecting them <br/> directly to their own communities."</h1>
    </div>
    <div
      style={{ width: '100%', height: '2240px', backgroundImage: 'radial-gradient(rgba(0, 0, 255, 0.3), rgba(0, 0, 255, 0))', backgroundColor: 'rgba(148, 187, 255, 0.5)' }}>
        
    </div>
    <div className="img-main-3-1"><img src="src\assets\small_Component1.png" alt="Image one" width="300" height="150"/></div>
    <div className="img-main-3-2"><img src="src\assets\small_Component2.png" alt="Image one" width="300" height="270"/></div>
    <div className="img-main-3-3"><img src="src\assets\small_Component3.png" alt="Image one" width="300" height="250"/></div>
    <div className="img-main-3-4"><img src="src\assets\small_Component4.png" alt="Image one" width="300" height="365"/></div>
    <div className="img-main-3-5"><img src="src\assets\small_Component5.png" alt="Image one" width="400" height="310"/></div>

    <div className="main-3-content">
        <h1>Complete <span> Creative </span><span> Control </span></h1>
    </div>
    <div className="main-3-par">
        <p>Creatreon is your space to create what excites <br/> you most, rough or polished, big or <br/> small. Hundreds
            of thousands
            of creators <br/> use Creatreon to share videos, podcasts,<br/> writing, art, music, recipes, and more with
            <br/> their most
            passionate fans.</p>
    </div>
    <div className="main-content-4">
        <video className="main-content-4-vid" src="src\assets\main-content-4-vid.mp4" autoPlay muted loop></video>
    </div>

    <div className="main-content-4">
        <h1>Creators. Fans. <br/><span>Nothing in <br/> </span><span> between.</span></h1>
    </div>
    <div className="main-content-4-par">
        <p>Patreon gives you a direct line of access to your fan community, <br/> with no ads or algorithms in the
            way.<br/><br/> Through real-time group chats, comments, DMs, and even <br/> directly over email, you can
            connect more deeply and directly<br/> with your community here than anywhere else.</p>
    </div>
    <a className="main-content-4" href="https://www.patreon.com/create">
        <button >Build real community</button>
    </a>
    <div className="src\assets\main-content-5-img">
        <img src="src\assets\bgimg.jpg" alt="bgimg" style={{width: '100%', height: '100%'}}/ >
    </div>
    <div className="main-content-5-centre">
		<img src="src\assets\logo.webp" alt="logo.webp"/> <br/>
        <br/><h2>Your world to create</h2>
		<br/><a href="http://127.0.0.1:5501/loginpage.html"> <button>Get Started</button></a><br/>
		<h5><br/>Already have an account? Log in</h5>
	</div>



    <div className="footer">
        <div className="heading">
          <h2>Creatreon<sup>™</sup></h2>
        </div>
        <div className="content">
          <div className="services">
            <h4>Services</h4>
            <p><a href="#">Content creations</a></p>
            <p><a href="#">Web development</a></p>
            <p><a href="#"></a>Upload</p>
            <p><a href="#">Free Lancer</a></p>
          </div>
          <div className="social-media">
            <h4>Social</h4>
            <p>
              <a href="#"
                ><i className="fab fa-linkedin"></i> Linkedin</a
              >
            </p>
            <p>
              <a href="#"
                ><i className="fab fa-twitter"></i> Twitter</a
              >
            </p>
            <p>
              <a href=""
                ><i className="fab fa-github"></i> Github</a
              >
            </p>
            <p>
              <a href=""
                ><i className="fab fa-facebook"></i> Facebook</a
              >
            </p>
            <p>
              <a href=""
                ><i className="fab fa-instagram"></i> Instagram</a
              >
            </p>
          </div>
          <div className="links">
            <h4>Quick links</h4>
            <p><a href="#">Home</a></p>
            <p><a href="#">About</a></p>
            <p><a href="#">Blogs</a></p>
            <p><a href="#">Contact</a></p>
          </div>
          <div className="details">
            <h4 className="address">Address</h4>
            <p>
              chitkara university, punjab.
            </p>
            <h4 className="mobile">Mobile</h4>
            <p><a href="#">+91-437337</a></p>
            <h4 className="mail">@chitkara.edu.in</h4>
            <p><a href="#">creatron60@gmail.com</a></p>
          </div>
        </div>
        <footer>
          <hr />
          © 2024 FEE Project
        </footer>
      </div>
    
</div>
    </>
  )
}

export default App;
