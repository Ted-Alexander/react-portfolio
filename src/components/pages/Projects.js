import React from 'react';
import Img1 from '../../images/shield-logo.png';
import Img2 from '../../images/calendont.JPG';
import Img3 from '../../images/globe_flag.png';
// import Img4 from '../../images/03.png';
import Img5 from '../../images/workday.PNG';
import Img6 from '../../images/weather.png';
import Img7 from '../../images/2.jpg';
import Img8 from '../../images/reader.PNG';

export default function Projects() {
  return (
    <section id="work" className="work">
    <h2>Examples of Previous Work:</h2>
    <br/>

    <div className="row">
        <div className="col-sm-4">
            <div className="card" style={{width: '18rem'}}>
                <img src={Img1} className="card-img-top" alt="SHIELD logo" height="200px"
                    width="200px"/>
                <div className="card-body">
                    <h5 className="card-title">S.H.I.E.L.D. Database</h5>
                    <p className="card-text">Displays information on searched comic book characters using data from
                        Superhero API</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Requires CORS Anywhere access to use.</li>

                </ul>
                <div className="card-body">
                    <a href="https://endlessashley.github.io/Shield-ID/" className="card-link">Link to the app</a>
                    <a href="https://github.com/endlessashley/Shield-ID" className="card-link">GitHub Link</a>
                    <a href="https://cors-anywhere.herokuapp.com/corsdemo" className="card-link">CORS Anywhere</a>
                </div>
            </div>
        </div>
        <br/>
        <div className="col-sm-4">
            <div className="card" style={{width: '18rem'}}>
                <img src={Img2} className="card-img-top" alt="CalenDont" height="200px" width="200px"></img>
                <div className="card-body">
                    <h5 className="card-title">CalenDon't</h5>
                    <p className="card-text">"The Antisocial Social Planner,"
                    a concept site for an app that allows users to descretely cancel plans</p>
                </div>
                <ul className="list-group list-group-flush">

                </ul>
                <div className="card-body">
                    <a href="https://pacific-badlands-48977.herokuapp.com/" className="card-link">Link to the app</a>
                    <a href="https://github.com/rjr2/CalenDont" className="card-link">GitHub Link</a>
                </div>
            </div>
        </div>
        <br/>
        <div className="col-sm-4">
            <div className="card" style={{width: '18rem'}}>
                <img src={Img8} className="card-img-top" alt="flags and globe" height="200px"
                    width="200px"/>
                <div className="card-body">
                    <h5 className="card-title">Reader, Set, Go!</h5>
                    <p className="card-text">An app for users to keep track of books they've read to compete to reach the highest "ReaderScore"</p>
                </div>
                <ul className="list-group list-group-flush">


                </ul>
                <div className="card-body">
                    <a href="https://pure-dawn-95351.herokuapp.com/" className="card-link">Link to the app</a>
                    <a href="https://github.com/endlessashley/reader-set-go-clean" className="card-link">GitHub Link</a>
                </div>
            </div>
        </div>
    </div>


    <br/>
    <div className="row">






    </div>


    <br/>
    {/* <div className="row">
        <br/>
        <div className="col-sm-4">
            <div className="card" style={{width: '18rem'}}>
                <img src={Img3} className="card-img-top" alt="flags and globe" height="200px"
                    width="200px"/>
                <div className="card-body">
                    <h5 className="card-title">Flag Quiz</h5>
                    <p className="card-text">A timed quiz on the flags of various nations</p>
                </div>
                <ul className="list-group list-group-flush">


                </ul>
                <div className="card-body">
                    <a href="https://ted-alexander.github.io/quiz/" className="card-link">Link to the app</a>
                    <a href="https://github.com/ted-alexander/quiz" className="card-link">GitHub Link</a>
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="card" style={{width: '18rem'}}>
                <img src={Img4} className="card-img-top" alt="password generator"
                    height="200px" width="400px"/>
                <div className="card-body">
                    <h5 className="card-title">Password Generator</h5>
                    <p className="card-text">Creates a randomized password based on given parameters.</p>
                </div>
                <ul className="list-group list-group-flush">


                </ul>
                <div className="card-body">
                    <a href="https://ted-alexander.github.io/password-generator/" className="card-link">Link to the
                        app</a>
                    <a href="https://github.com/ted-alexander/password-generator" className="card-link">GitHub Link</a>

                </div>
            </div>
        </div>



        <div className="col-sm-4">
            <div className="card" style={{width: '18rem'}}>
                <img src={Img5} className="card-img-top" alt="listmaker" height="200px" width="200px"/>
                <div className="card-body">
                    <h5 className="card-title">Workday Scheduler</h5>
                    <p className="card-text">A listmaker that marks passed hours in real time.</p>
                </div>
                <ul className="list-group list-group-flush">


                </ul>
                <div className="card-body">
                    <a href="https://ted-alexander.github.io/Schedule/" className="card-link">Link to the app</a>
                    <a href="https://github.com/ted-alexander/Schedule" className="card-link">GitHub Link</a>
                </div>
            </div>
        </div>
        <br/>
        <div className="col-sm-4">
            <div className="card" style={{width: '18rem'}}>
                <img src={Img6} className="card-img-top" alt="Weather Dashboard" height="200px"
                    width="400px"/>
                <div className="card-body">
                    <h5 className="card-title">Weather Dashboard</h5>
                    <p className="card-text">Gives the current weather in a searched city</p>
                </div>
                {/* <ul className="list-group list-group-flush"> */}

                    {/* <div className="card-body">
                        <a href="https://ted-alexander.github.io/weather-dashboard/" className="card-link">Link to the app</a>
                        <a href="https://github.com/ted-alexander/weather-dashboard" className="card-link">GitHub Link</a>
                    </div> */}
            {/* </div>
        </div>
    </div>


    <br/>

    <div className="work-placeholder card col-sm-4">
        <img src={Img7} alt="check back later!" height="100px" width="200px"/>
        <p>Check back later to see more projects!</p>
    </div>  */}

</section>


    );
}