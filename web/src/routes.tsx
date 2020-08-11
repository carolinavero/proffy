import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/give-classes" component={TeacherForm} />
            <Route path="/study" component={TeacherList} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgot-password" component={ForgotPassword} />
        </BrowserRouter>
    )
}

export default Routes;