import React from "react";
import "./Rvideo.css";
import ReactPlayer from "react-player";

function RVideo() {
    return (
        <div className="videos">
            <div className="video">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=u4Lc6PjTPkQ&ab_channel=EmnaMoufid"
                    height="170px"
                    width="280px"
                    controls />
                <br />
                <div className="logo">
                    <img src="/images/emna.jpg" alt="emna" style={{ height: "35px", width: "35px", borderRadius: "50%" }} />
                    <div> Python with Emna Moufid </div>
                </div>
                <br />
                <div className="view">
                    160 k vues 29 nov. 2016

                </div>
               
                </div>
            <div className="video">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=gQwd7MgTk4s"
                    height="170px"
                    width="280px"
                    controls />
                <br />
                <div className="logo">
                    <img src="/images/ghofrane.jpg" alt="Ghofrane" style={{ height: "35px", width: "35px", borderRadius: "50%" }} />
                    <div> Tuto C with Ghofrane  </div>
                </div>
                <br />
                <div className="view">
                    171 k vues 23 jan 2020

                </div>
            </div>
            <div className="video">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=fvW31D93AB8"
                    height="170px"
                    width="280px"
                    controls />
                <br />
                <div className="logo">
                    <img src="/images/issam.jpg" alt="issam" style={{ height: "35px", width: "35px", borderRadius: "50%" }} />
                    <div> ESSECT - Filiére E-Business with Issam Fekih </div>
                </div>
                <br />
                <div className="view">
                    120k vues   01 dec 2020

                </div>
            </div>
            <div className="video">
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=uQ0UMh8QQh8&ab_channel=KarimBabchia"
                    height="170px"
                    width="280px"
                    controls />
                <br />
                <div className="logo">
                    <img src="/images/karim.jpg" alt="karim" style={{ height: "35px", width: "35px", borderRadius: "50%" }} />
                    <div> HTML5| Les balise sémantiques | with Karim Babchia </div>
                </div>
                <br />
                <div className="view">
                    207k vues   01 dec 2020

                </div>
            </div>
            
            
        </div>
    );
}
export default RVideo;
