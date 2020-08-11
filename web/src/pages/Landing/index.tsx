import React, { useState, useEffect } from 'react';
import logoImg from '../../assets/images/logo-proffy.svg';
import landingImg from '../../assets/images/learning.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import pinkHeartIcon from '../../assets/images/icons/pink-heart.svg';

import './styles.css'
import { Link } from 'react-router-dom';
import api from '../../services/api';

function Landing() {

    const [ totalConnections, setTotalConnections ] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const {total} = response.data;
            setTotalConnections(total);
        })
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content">

                <div className="page-landing__description">
                    <div id="logo-container">
                        <img src={logoImg} alt="Logo" className="logo-image" />
                        <h2>Sua plataforma de estudos online</h2>
                    </div>

                    <img src={landingImg} alt="Landing" className="hero-image" />

                </div>

                <div className="page-landing__actions">

                    <div className="page-landing__actions-content">
                        <div className="welcome-message">
                            Seja bem-vindo! <br></br>
                            <strong>O que deseja fazer?</strong>
                        </div>
                        <span className="total-connections">
                            Total de {totalConnections} conexões <br></br> já realizadas
                            <img src={pinkHeartIcon} alt="Coração rosa" />
                        </span>

                        <div className="buttons-container">
                            <Link to="/study" className="study">
                                <img src={studyIcon} alt="Estudar" />
                            Estudar
                        </Link>
                            <Link to="/give-classes" className="give-classes">
                                <img src={giveClassesIcon} alt="Dar aulas" />
                            Dar aulas
                        </Link>
                        </div>
                    </div>

                    

                </div>
            </div>
        </div>
    )
}

export default Landing;