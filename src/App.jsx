// import { useState } from 'react'
import reactLogo from './assets/Pavan.jpg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <div class="Navbar" >
        <p class="nbp1">Portfolio</p>
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Skills">Skills</a>
        <a href="#Service">Service</a>
        <a href="#Contact">Contact</a>
      </div>
      <div class="main">
        <p class="p1" id="Home">
          <h1 class="h1">Welcome to my Portfolio ....</h1>
        <p class="Home" id="Home">
          <div class="image">
            <img src={reactLogo} class="logo" alt="DP" />
            {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
          </div>
          <div class="home">
            <h3>Hello, I'm </h3>
            <h1 class="hmp2">DURGA PAVAN B</h1>
            <h3 class="hmp3">And I'm a <span>Web Developer</span></h3>
            <p>
              I am a <span class="highlight">Web Developer</span> and I love to
              create beautiful and functional websites.
            </p>
          </div>
        </p>
        </p>

        <h1 id="About">About Me</h1>
        <p class="About" id="About">
          <div class="para">
            <p class="pp1" id="card">I am a web developer with a passion for creating beautiful and
            functional websites. I have experience in HTML, CSS, JavaScript,
            React, and Node.js. I love to learn new technologies and improve my
            skills.
            </p>
            <p class="pp2" id="card">
            I recently graduated in B.Tech(Bachelor of Technology) degree with stream of Mechanical Engineering and I passed out with 6.87 CGPA in the year of 2024 and looking for jobs, I am interested on Web Developer, Java Developer, MERN Stack Developer and Nodejs Developer.
            </p>
            // {/* <p class="pp3" id="card">
            // In my free time, I enjoy reading books, watching movies, and
            // playing video games. I also love to travel and explore new places.
            // I am always looking for new challenges and opportunities to grow as
            // a developer.
            // </p> */}
         </div>
        </p>
        <p class="Skills" id="Skills">
          <h1>My Skills</h1>
          <p class="sp1">
            I have Knowledge in the following technologies:
          </p>
          <div class="skill">
            <div class="frontend">
              <h2>Frontend</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Bootstrap</li>
              </ul>
            </div>
            <div class="backend">
              <h2>Backend</h2>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>REST APIs</li>
                <li>Java</li>
                <li>JDBC</li>
                <li>Servlets</li>
                <li>Hibernate</li>
                <li>Spring</li>
              </ul>
            </div>
            <div class="database">
              <h2>Database</h2>
              <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div class="tools">
              <h2>Tools</h2>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>Visual Studio Code</li>
                <li>Eclipse</li>
              </ul>
            </div>
          </div>
        </p>
        <p class="Service" id="Service">
          <h1>My Services</h1>
          <p class="sp2">
            I offer a range of web development services, including:
          </p>
          <div class="service">
            <div class="web">
              <h1>Website Design and Development</h1>
            </div>
            <div class="application">
              <h1>Web Application Development</h1>
            </div>
            <div class="troubleshoot">
              <h1>System Troubleshooting</h1>
            </div>
          </div>
          {/* <ul>
            <li>Website Design and Development</li>
            <li>Responsive Web Design</li>
            <li>Web Application Development</li>
            <li>E-commerce Development</li>
            <li>Content Management Systems (CMS)</li>
          </ul> */}
          {/* <p>
            I also offer website maintenance and support services to ensure
            that your website is always up-to-date and running smoothly.
          </p> */}
        </p>
        <p class="Contact" id="Contact">
          <h1>Contact Me</h1>
          <div className="contact">
            <p class="cp1">
            If you would like to get in touch with me, please feel free to
            reach out via email or social media. I would love to hear from you!
            </p>
            <form action="https://api.web3forms.com/submit" method="post">
            <table>
              <tr>
                <td>
                  <label for="name">Name:</label>
                </td>
                <td>
                  <input type="hidden" name="access_key" value="500128f8-c38f-4751-89ae-3050797f2016" />
                  <input type="text" id="name" name="name" required />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="email">Email:</label>
                </td>
                <td>
                  <input type="email" id="email" name="email" required />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="message">Message:</label>
                </td>
                <td>
                  <textarea id="message" name="message" required></textarea>
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <input type="submit" value="Submit" />
                </td>
              </tr>
            </table>
          </form>
          </div>
        </p>
        <button class="btn">
          <a href="#Home" >Back to Top</a>
        </button>
        <p class="Footer">
          <h6>This is a simple portfolio website created using React. It is
            designed to showcase my skills and projects. The website is
            responsive and works well on all devices. It is also optimized for
            performance and accessibility. The website is hosted on GitHub
            Pages. You can find the source code on my GitHub profile.</h6>
          <p class="fp1">
            &copy; 2025 Durga Pavan B. All rights reserved.
          </p>
          <p class="social">
            <h5>Connect with me on social media:</h5>
            <a href="https://www.linkedin.com/in/durga-pavan-budigi-433932258" target="_self">LinkedIn</a>
            <a href="https://github.com/PavanMech321" target="_self">GitHub</a>
{/*             <a href="" target="_self">Twitter</a> */}
{/*             <a href="" target="_self">Instagram</a> */}
          </p>
        </p>
      </div>
    </>
  )
}



export default App
