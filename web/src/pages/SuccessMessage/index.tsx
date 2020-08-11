import React from 'react';
import { Link } from 'react-router-dom';

import successIcon from '../../assets/images/icons/success-check-icon.svg';

import './styles.css';

function SuccessMessage() {
   
    return (
        <div id="page-success-message">

            <div className="password__description">
                <div className="password__description__content">
                    <main>
                        <img src={successIcon} alt="Redefinição enviada"/>
                        <h1>Redefinição enviada</h1>
                        <p>Boa, agora é só checar o e-mail que foi enviado para você redefinir sua senha 
                            e aproveitar os estudos.</p>
 
                        <Link to="/login">
                            Voltar ao login
                        </Link>
  
                    </main>
                </div>
            </div>




        </div>
    )
}

export default SuccessMessage;