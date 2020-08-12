import React from 'react';
import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export interface Teacher {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    name: string;
    subject: string;
    whatsapp: string;
    schedule: ScheduleItem[];
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id
        })
    }
    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
               {teacher.bio}
            </p>

            <div className="schedule-list">

                <div className="schedule-list__item">
                    <div className="schedule__label">Dia</div>
                    <div>Segunda</div>
                    <div className="schedule__label">Horário</div>
                    <div>8h - 18h</div>
                </div>

                <div className="schedule-list__item time-disabled">
                    <div className="schedule__label">Dia</div>
                    <div>Segunda</div>
                    <div className="schedule__label">Horário</div>
                    <div>8h - 18h</div>
                </div>

                <div className="schedule-list__item">
                    <div className="schedule__label">Dia</div>
                    <div>Segunda</div>
                    <div className="schedule__label">Horário</div>
                    <div>8h - 18h</div>
                </div>

                <div className="schedule-list__item">
                    <div className="schedule__label">Dia</div>
                    <div>Segunda</div>
                    <div className="schedule__label">Horário</div>
                    <div>8h - 18h</div>
                </div>

                <div className="schedule-list__item time-disabled">
                    <div className="schedule__label">Dia</div>
                    <div>Segunda</div>
                    <div className="schedule__label">Horário</div>
                    <div>8h - 18h</div>
                </div>
                <div className="schedule-list__item">
                    <div className="schedule__label">Dia</div>
                    <div>Segunda</div>
                    <div className="schedule__label">Horário</div>
                    <div>8h - 18h</div>
                </div>

                <div className="schedule-list__item">
                    <div className="schedule__label">Dia</div>
                    <div>Segunda</div>
                    <div className="schedule__label">Horário</div>
                    <div>8h - 18h</div>
                </div>

                {/* {teacher.schedule && teacher.schedule.map(item => {
                    <div>
                        <div>Dia</div>
                        <div>{item.week_day}</div>
                        <div>Horário</div>
                        <div>{item.from}</div> - 
                        <div>{item.to}</div> 
                    </div>
                })} */}
                
            </div>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost}</strong>
                </p>
                <a 
                    target="_blank" 
                    href={`https://wa.me/${teacher.whatsapp}`} 
                    onClick={createNewConnection}
                >
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;