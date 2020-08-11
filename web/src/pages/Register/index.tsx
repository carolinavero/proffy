import React, { useState } from 'react';
import Input from '../../components/Input';

import logoImg from '../../assets/images/logo-proffy.svg';
import pinkHeartIcon from '../../assets/images/icons/pink-heart.svg';

import './styles.css';
import { Link } from 'react-router-dom';

function Register() {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState('');

    function handleSubmit() {
        console.log("submit register");
    }
    return (
        <div id="page-register">

            

            <div className="register__form">

                <main>
                    <h1>Cadastro</h1>
                    <p>Preencha os dados abaixo para começar</p>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <Input
                                name="firstname"
                                label="Nome"
                                value={firstname}
                                onChange={(e) => { setFirstname(e.target.value) }}
                            />
                            <Input
                                name="lastname"
                                label="Sobrenome"
                                value={lastname}
                                onChange={(e) => { setLastname(e.target.value) }}
                            />
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

                            <button type="submit">
                                Concluir cadastro
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

export default Register;