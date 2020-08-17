import React, { useState } from 'react';
import Input from '../../components/Input';

import logoImg from '../../assets/images/logo-proffy.svg';
import pinkHeartIcon from '../../assets/images/icons/pink-heart.svg';

import './styles.css';
import { Link } from 'react-router-dom';

function ForgotPassword() {

    const [email, setEmail] = useState('');
    
    function handleSubmit() {
        console.log("submit register");

        const message = 'Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha e aproveitar os estudos.'
    }
    return (
        <div id="page-register">

            <div className="register__form">

                <main>
                    <h1>Eita, esqueceu sua senha?</h1>
                    <p>Não esquenta, vamos dar um jeito nisso</p>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            
                            <Input
                                name="email"
                                label="E-mail"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                          

                        </fieldset>
                        <footer>

                            <button type="submit">
                                Enviar
                            </button>

                        </footer>
                    </form>

                    <div className="footer__info">
                        <p>
                            Já tem conta? <br></br>
                            <Link to="/login">
                                Fazer login
                            </Link>
                        </p>
                        <p>
                            É de graça <img src={pinkHeartIcon} alt="Coração rosa" />
                        </p>
                    </div>

                </main>
            </div>

            <div className="register__description">
                <div className="register__description__content">
                    <img src={logoImg} alt="Logo" className="logo-image" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>
            </div>




        </div>
    )
}

export default ForgotPassword;