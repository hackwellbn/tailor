// src/components/Collaborators.js
import React from 'react';
import './Collaborators.css';
import { collaborationVideo } from '../../../../assets/assets';


const Collaborators = () => {
    const view = (event) => {
        event.preventDefault();
        window.location.href = 'https://www.elevatedsteelsolution.online';
    }
    return (
        <div className="collaborators">
            <div className="collaborations">
                <div className="collaborators-content">
                    <h1>Collaborators</h1>
                    <p>Our collaboration has spurred mutual growth, both personally and professionally. By working together, we've pushed each other to expand our horizons, develop new skills, and overcome challenges that we wouldn't have tackled alone.</p>            <button className='btn' onClick={view}>view</button>
                </div>
                <div className="collaborators-content">
                    <div className="video-collaborators">
                        <img src={collaborationVideo[0].video} alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Collaborators;
