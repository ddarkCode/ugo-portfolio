import EmailIcon from '@material-ui/icons/Email';

import './App.scss';

function App() {
  return (
    <div>
      <header>
        <div className='profile-img'>
          <img src='/images/coder.jpg' alt='Ugo' />
        </div>

        <div className='profile-details'>
          <div className='details'>
            <div className='info'>
              <h2>Nnamani Eze Chidozie Ugochukwu</h2>
              <p>Front-end developer</p>
            </div>
            <div className='contacts'>
              <EmailIcon />
              <span>royal.ugoh@gmail.com</span>
            </div>
          </div>
          <p>
            I am a detail-oriented self-taught front-end developer, who is
            willing to learn and create outstanding UI applications. Over the
            course of learning, I have developed proven problem-solving and
            communication skills. I am adept in bringing forth expertise in
            design implementation, installation, and maintenance of software
            systems. Equipped with a diverse and promising skill-set. Proficient
            in various platforms and the JavaScript ecosystem. Able to
            effectively self-manage during independent projects, as well as
            collaborate as part of a productive team.
          </p>
        </div>
      </header>

      <main>
        <section className='core-skills'>
          <h2>Core Skills</h2>
          <div className='skill'>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Redux</span>
            <span>React-Router</span>
            <span>Node</span>
            <span>Express</span>
          </div>
        </section>

        <section className='hobbies'>
          <h2>Hobbies</h2>

          <div className='hobby-list'>
            <div className='hobby'>
              <img
                src='https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                alt='gym'
              />
              <h3>Gym</h3>
              <p>
                physical exercises and activities performed inside, often using
                equipment
              </p>
            </div>

            <div className='hobby'>
              <img
                src='https://images.unsplash.com/photo-1598136490941-30d885318abd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmluZyUyMG1hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt='jogger'
              />
              <h3>Jogging</h3>
              <p>
                Jogging is a form of trotting or running at a slow or leisurely
                pace. The main intention is to increase physical fitness with
                less stress on the body
              </p>
            </div>

            <div className='hobby'>
              <img
                src='https://images.unsplash.com/photo-1544716278-e513176f20b5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                alt='Read'
              />
              <h3>Reading</h3>
              <p>
                One glance at a book and you hear the voice of another person,
                perhaps someone dead for 1,000 years. To read is to voyage
                through time.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
