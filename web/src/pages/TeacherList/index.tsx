import React, { useState, FormEvent, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';

import './styles.css';

import smileIcon from '../../assets/images/icons/smile.svg';

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

function TeacherList() {

    const [teachers, setTeachers] = useState([]);
    const [allTeachers, setAllTeachers] = useState(0);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    useEffect(() => {
        api.get('users').then(response => {
            const { total } = response.data;
            setAllTeachers(total);
        })
    }, []);

    async function seachTeachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });

        console.log("proff", response.data)
        console.log("schedule", response.data.schedule);

        setTeachers(response.data);

    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader 
                title="Estes são os proffys disponíveis" 
                headerTitle="Estudar"
                descriptionIcon={smileIcon}
                descriptionIconMessage={`Nós temos ${allTeachers} professores.`}
            >

                <form id="search-teachers" onSubmit={seachTeachers}>

                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => setWeekDay(e.target.value)}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                   <Input 
                        type="time" 
                        name="time" 
                        label="Horário"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />

                    <button type="submit">
                        Buscar
                    </button>

               </form>
            </PageHeader>

            <main>
                {
                
                teachers.length === 0 
                
                ? <div className="search-message-results">Nenhum professor encontrado com sua pesquisa</div>
               
                : teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />
                   })

                }
                
            </main>
        </div>
    )
}

export default TeacherList;