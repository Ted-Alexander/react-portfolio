import React from 'react';
// import Img1 from '../../images/shield-logo';
import Img2 from '../../images/calendont.JPG';
import Img3 from '../../images/globe_flag.png';

export default function Projects() {
  return (
    <section id="work" class="work">
    <h2>Examples of Previous Work:</h2>
    <br/>

    <div class="row">
        <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
                {/* <img src={Img1} class="card-img-top" alt="SHIELD logo" height="200px"
                    width="200px"/> */}
                <div class="card-body">
                    <h5 class="card-title">S.H.I.E.L.D. Database</h5>
                    <p class="card-text">Displays information on searched comic book characters using data from
                        Superhero API</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Requires CORS Anywhere access to use.</li>

                </ul>
                <div class="card-body">
                    <a href="https://endlessashley.github.io/Shield-ID/" class="card-link">Link to the app</a>
                    <a href="https://github.com/endlessashley/Shield-ID" class="card-link">GitHub Link</a>
                    <a href="https://cors-anywhere.herokuapp.com/corsdemo" class="card-link">CORS Anywhere</a>
                </div>
            </div>
        </div>
        <br/>
        <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
                <img src={Img2} class="card-img-top" alt="CalenDont" height="200px" width="200px"></img>
                <div class="card-body">
                    <h5 class="card-title">CalenDon't</h5>
                    <p class="card-text">The Antisocial Social Planner</p>
                </div>
                <ul class="list-group list-group-flush">

                </ul>
                <div class="card-body">
                    <a href="https://pacific-badlands-48977.herokuapp.com/" class="card-link">Link to the app</a>
                    <a href="https://github.com/rjr2/CalenDont" class="card-link">GitHub Link</a>
                </div>
            </div>
        </div>
        <br/>
        <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
                <img src={Img3} class="card-img-top" alt="flags and globe" height="200px"
                    width="200px"/>
                <div class="card-body">
                    <h5 class="card-title">Flag Quiz</h5>
                    <p class="card-text">A timed quiz on the flags of various nations</p>
                </div>
                <ul class="list-group list-group-flush">


                </ul>
                <div class="card-body">
                    <a href="https://ted-alexander.github.io/quiz/" class="card-link">Link to the app</a>
                    <a href="https://github.com/ted-alexander/quiz" class="card-link">GitHub Link</a>
                </div>
            </div>
        </div>
    </div>


    <br/>
    <div class="row">






    </div>


    <br/>
    <div class="row">
        <br/>
        <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
                <img src="./assets/digital-marketing-meeting.jpg" class="card-img-top" alt="Horiseon Refactor"
                    height="200px" width="400px"/>
                <div class="card-body">
                    <h5 class="card-title">Password Generator</h5>
                    <p class="card-text">Creates a randomized password based on given parameters.</p>
                </div>
                <ul class="list-group list-group-flush">


                </ul>
                <div class="card-body">
                    <a href="https://ted-alexander.github.io/password-generator/" class="card-link">Link to the
                        app</a>
                    <a href="https://github.com/ted-alexander/password-generator" class="card-link">GitHub Link</a>

                </div>
            </div>
        </div>



        <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
                <img src="./assets/workday.PNG" class="card-img-top" alt="listmaker" height="200px" width="200px"/>
                <div class="card-body">
                    <h5 class="card-title">Workday Scheduler</h5>
                    <p class="card-text">A listmaker that marks passed hours in real time.</p>
                </div>
                <ul class="list-group list-group-flush">


                </ul>
                <div class="card-body">
                    <a href="https://ted-alexander.github.io/Schedule/" class="card-link">Link to the app</a>
                    <a href="https://github.com/ted-alexander/Schedule" class="card-link">GitHub Link</a>
                </div>
            </div>
        </div>
        <br/>
        <div class="col-sm-4">
            <div class="card" style="width: 18rem;">
                <img src="./assets/comingsoon2.jpg" class="card-img-top" alt="Horiseon Refactor" height="200px"
                    width="400px"/>
                <div class="card-body">
                    <h5 class="card-title">Weather Dashboard</h5>
                    <p class="card-text">Currently in development</p>
                </div>
                {/* <ul class="list-group list-group-flush"> */}

                    <div class="card-body">
                        <a href="https://ted-alexander.github.io/weather-dashboard/" class="card-link">TBA</a>


                    </div>
            </div>
        </div>
    </div>


    <br/>

    <div class="work-placeholder card col-sm-4">
        <img src="./assets/comingsoon4.jpg" alt="check back later!" height="100px" width="200px"/>
        <p>Check back later to see more projects!</p>
    </div>

</section>


    );
}