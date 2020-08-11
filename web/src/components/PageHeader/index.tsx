import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo-proffy.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
    title: string;
    description?: string;
    headerTitle: string;
    descriptionIcon: string;
    descriptionIconMessage: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar" />
                    </Link>
                    <p>{props.headerTitle}</p>
                    <img src={logoImg} alt="Logo" />
                </div>
            </div>

            <div className="header-content">

                <div className="header-content__title-block">

                    <strong>{props.title}</strong>
                    {props.description && <p>{props.description}</p>}
                </div>

                <div className="header-content__description">
                    <img src={props.descriptionIcon} alt={props.descriptionIcon} />
                    <p>{props.descriptionIconMessage}</p>
                </div>

                {props.children}
            </div>

        </header>
    );
}

export default PageHeader;