import React from 'react';
import { Link } from 'react-router-dom';

import successIcon from '../../assets/images/icons/success-check-icon.svg';

import './styles.css';

export interface SuccessMessageItem {
    title: string;
    description: string;
}

interface SuccessMessageProps {
    message: SuccessMessageItem;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message }) => {

  

    return (
        <div id="page-success-message">

            <div className="password__description">
                <div className="password__description__content">
                    <main>
                        <img src={successIcon} alt="Redefinição enviada"/>
                        {/* <h1>{message.title}</h1>
                        <p>{message}</p> */}
 
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