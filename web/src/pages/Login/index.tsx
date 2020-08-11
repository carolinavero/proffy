import React, { useState } from 'react';
import Input from '../../components/Input';

import logoImg from '../../assets/images/logo-proffy.svg';
import pinkHeartIcon from '../../assets/images/icons/pink-heart.svg';

import './styles.css';
import { Link } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState('');

    function handleSubmit() {
        console.log("submit login");
    }
    return (
        <div id="page-login">

            <div className="login__description">
                <div className="login__description__content">
                    <img src={logoImg} alt="Logo" className="logo-image" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>
            </div>

            <div className="login__form">

                <main>
                    <h1>Fazer login</h1>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <Input 
                                name="email"
                                label="E-mail"
                                value={email}
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                            <Input 
                                name="password"
                                type="password"
                                label="Senha"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                            />

                        </fieldset>
                        <footer>
                            <p>
                                <Input
                                    name="remember"
                                    type="checkbox"
                                    defaultValue={remember}
                                    label="Lembrar-me"
                                    onChange={e => setRemember(e.target.value)}
                                />
                                
                            </p>
                            <Link to="/forgot-password">
                            
                                Esqueci a senha
                            </Link>
                            
                            <button type="submit">
                                Entrar
                            </button>
                            
                        </footer>
                    </form>

                    <div className="footer-info">
                        <p>
                            Não tem conta? <br></br>
                            <Link to="/register">
                                Cadastre-se
                            </Link>
                        </p>
                        <p>
                            É de graça <img src={pinkHeartIcon} alt="Coração rosa" />
                        </p>
                    </div>

                </main>
            </div>


        

        </div>
    )
}

export default Login;