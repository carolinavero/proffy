import React from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/8571289?s=460&u=9558359bd39d5b0700ef42296cf0cce9fc89d922&v=4" alt="Carolina Vero" />
                <div>
                    <strong>Carolina Vero</strong>
                    <span>JavaScript</span>
                </div>
            </header>

            <p>
                My name is Carolina Vero from Brazil.
                I've been working as Front-End Developer since 2015 at W42 - Tecnologia.
                <br />
                I'm currently learning about JavaScript and ReactJS.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;