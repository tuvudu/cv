import {
  BookOpen,
  Briefcase,
  Circle,
  MapPin,
  Phone,
  User,
} from "react-feather";
import "./App.css";
import {
  Wrapper,
  Role,
  Content,
  LeftContent,
  RightContent,
  Skill,
} from "./Wrapper.styles";

function App() {
  return (
    <page size="A4">
      <Wrapper>
        <div className="App">
          <header className="App-header">
            <div className="avatar" />
            <h1>TUYEN VU DUC</h1>
          </header>
          <Role>
            <span>Frontend Developer</span>
            <span>
              <MapPin size={12} />
              Ha Noi, Viet Nam
            </span>

            <span>
              <Phone size={12} />
              +84 975 128 596
            </span>
          </Role>
          <Content>
            <LeftContent>
              <h2 style={{ marginTop: 0 }}>
                <Circle size={8} strokeWidth={3} />
                DETAILS
                <Circle size={8} strokeWidth={3} />
              </h2>
              <p>Ha Noi, Viet Nam</p>
              <p>+84 975 128 596</p>
              <p>tuyenvd596@gmail.com</p>
              <h3>DATE / PLACE OF BIRTH</h3>
              <p>28/05/1996</p>
              <p>Vinh Phuc</p>

              <h3>NATIONALLY</h3>
              <p>Viet Nam</p>
              <br />
              <h2>
                <Circle size={8} strokeWidth={3} />
                SKILLS
                <Circle size={8} strokeWidth={3} />
              </h2>
              <Skill level={80}>HTML & CSS</Skill>
              <Skill level={80}>Javascript</Skill>
              <Skill level={85}>ReactJs</Skill>
              <Skill level={50}>ReactNative</Skill>
              <Skill level={80}>Git</Skill>
              <Skill level={40}>NodeJS</Skill>
              <Skill level={40}>Ruby on Rails</Skill>
            </LeftContent>
            <RightContent>
              <h2 style={{ marginTop: 0 }}>
                <User size={13} strokeWidth={2} /> PROFILE
              </h2>
              <div className="content">
                Front end developer with 3 years of experience building and
                maintaining a responsive website in the kindergarten management
                system and building a platform creating websites. Proficient in
                HTML, CSS and Javascript; plus modern libraries and frameworks.
              </div>
              <br />
              <h2 style={{ marginTop: 0 }}>
                <Briefcase size={13} strokeWidth={2} /> EMPLOYMENT HISTORY
              </h2>
              <div className="content">
                <h3>Frontend Team leader at Bunbu Soft, Ha Noi</h3>
                <span>March 2020 - Present</span>
                <p>
                  <strong>
                    <i>BunbuSoft</i>
                  </strong>{" "}
                  is an outsourcing company. Most of the products come from the
                  Japanese market. As a Front end Team leader. The core value
                  that I bring is: <br />
                  <ul>
                    <li>
                      Initialize, structure and deploy front-end projects.
                    </li>
                    <li>
                      Creating new features, functionality, and capabilities on
                      the kindergarten management system of Japanese.
                    </li>
                    <li>
                      Recommending solutions and a streamlined, user-friendly
                      with the design team.
                    </li>
                    <li>Performing bug fixes and code review.</li>
                    <li>
                      Leading and Managing a Team of 8-member Front-end
                      Developers and Client Developers.
                    </li>
                    <li>
                      Training Front end Internship about (Front end skills, Git
                      flow, Teamwork, Unit test,...).
                    </li>
                    <li>
                      Leading and Managing a Team of 8-member Front-end
                      Developers and Client Developers.
                    </li>
                    <li>Organizational activities (push up, running, ...)</li>
                    <li>
                      <strong>Achieve the Most Valuable Person in 2020.</strong>
                    </li>
                  </ul>
                </p>
                <h3>Frontend Developer at Tekmate Soft, Ha Noi</h3>
                <span>August 2019 - March 2020</span>
                <p>
                  <strong>
                    <i>TekmateSoft</i>
                  </strong>{" "}
                  is an outsourcing company. China and Vietnam are the two
                  markets that the company is serving. My core activities
                  include:
                  <br />
                  <ul>
                    <li>
                      Build a single-page application (SPA), responsive design
                      for the admin coupon page of a fashion company (ReactJS
                      and Nodejs).
                    </li>
                    <li>
                      Application development to manage coupons on mobile apps
                      (React Native).
                    </li>
                  </ul>
                </p>
                <h3>Backend Developer at Sun*(Framgia), Ha Noi</h3>
                <span>March 2017 - July 2019</span>
                <p>
                  <strong>
                    <i>Sun*</i>
                  </strong>{" "}
                  is an outsourcing company. The target market is Japan. I
                  learned web programming using React JS myself through real
                  projects there. My main jobs are:
                  <br />
                  <ul>
                    <li>
                      Build a platform for creating the website (Rails, ReacJS).
                    </li>
                    <li>
                      Maintain and create some new features to build a
                      construction chat application (ReactJS, Nodejs and
                      Cordova).
                    </li>
                    <li>
                      Build internal projects on company asset management.
                    </li>
                  </ul>
                </p>
              </div>
              <h2 style={{ marginTop: 0 }}>
                <BookOpen size={13} strokeWidth={2} /> EDUCATION
              </h2>
              <div className="content">
                <h3>Software Engineering at HA NOI UNIVERSITY OF INDUSTRY</h3>
                <span>SEPTEMBER 2010 - AUGUST 2024</span>
                <p>
                  <strong>
                    <i>GPA: 3.26</i>
                  </strong>
                </p>
              </div>
            </RightContent>
          </Content>
        </div>
      </Wrapper>
    </page>
  );
}

export default App;
