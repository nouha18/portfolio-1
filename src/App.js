import React from 'react';
import './style.css';
//import logo from './assets/images/blobby.png';
import { Grid, Button, makeStyles } from '@material-ui/core';
import { Instagram } from '@trejgun/material-ui-icons-social-networks';
function App() {
  //const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className="App">
      <div className="whitebox">
        <header>
          <div className="navibar">Portfolio</div>
        </header>
        <div className="nav1"> </div>
        <div className="nav2"> </div>
        <div className="nav3"> </div>
        <h3
          style={{
            fontFamily: 'Brush Script MT,cursive'
          }}
        >
          About me
        </h3>
        <div className="bio">
          <div className="svgfolio">
            <img
              className="photo"
              src={
                'https://www.village-justice.com/articles/local/cache-gd2/8c/076c04a328e00c3319caeed9487a53.jpg?1610740180'
              }
            />
          </div>

          <p className="textbio">
            I’m passionate about words, language, grammar, punctuation and
            style, and I’ve been known to engage in lengthy discussions about
            hyphens and compound modifiers (that stuff is actually fun to me).
            People call me “outgoing,” “optimistic” and “enthusiastic,” all of
            which fit.
          </p>
        </div>
        <p className="separator" />
        <h3
          style={{
            fontFamily: 'Brush Script MT,cursive'
          }}
        >
          Projects
        </h3>
        <br />
        <br />
        <br />
        <div className="content">
          <div className="item1of4">
            <div className="paper">
              <img
                src={
                  'https://res.cloudinary.com/practicaldev/image/fetch/s--pcSkTMZL--/c_limit,f_auto,fl_progressive,q_80,w_190/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png'
                }
                alt="dev image"
                className="round"
              />{' '}
              <h5>Developer Community</h5>
              <h6>Dev Projects</h6>
              <p>
                Developers have, out of necessity, built up an immunity to
                traditional marketing tactics
              </p>
              <a href="#">More</a>
            </div>
          </div>

          <div className="item1of4">
            <div className="paper">
              <img
                src={
                  'https://i1.wp.com/storage.googleapis.com/torbjorn-wp-images/2016/01/codeigniter10-1.png?fit=1024%2C1024&ssl=1'
                }
                alt="dev image"
                className="round"
              />
              <h5>CodeIgniter Responsive WebSite</h5>
              <h6>subtitle</h6>
              <p>content of project description</p>
              <a href="#">Learn More</a>
            </div>
          </div>

          <div className="item1of4">
            <div className="paper">
              <img
                src={
                  'https://dwglogo.com/wp-content/uploads/2017/03/AngularJS_logo_004.svg'
                }
                alt="dev image"
                className="round"
              />{' '}
              <h5>Responsive web and mobile app</h5>
              <h6>Code review data</h6>
              <p>
                It’s hard to believe where the time has gone but Digital
                Transformation in Action is celebrating its 20th episode! The
                first episode aired on 9th October 2019, and it would be fair to
                say a lot’s changed since then
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
          <div className="item1of4">
            <div className="paper">
              <img
                src={
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBBTdLFHbtyV7dkj3f_wJowN3TjrCUh3i4cW278YsBO5Bml6M9MakhWC6uh7-n9h5bjg&usqp=CAU'
                }
                alt="dev image"
                className="round"
              />{' '}
              <h5>title</h5>
              <h6>subtitle</h6>
              <p>content of project description</p>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
        <div className="footer3of3">
         
          <div>
          <i class="fab fa-facebook-f" />
            &nbsp;
            <i class="fab fa-twitter" />
            &nbsp;
            <i class="fab fa-google" />
            &nbsp;
            <i class="fab fa-instagram" />
            &nbsp;
            <i class="fab fa-linkedin-in" />
            &nbsp;
           <i class="fab fa-github" />

          
          </div>
          
        </div>
        <Button variant="outlined">
            <Instagram /> Instagram
          </Button>
      </div>
    </div>
  );
}

export default App;
