import React from 'react';
import { TodoProvider } from '../TodoContext';
import Header from './Header';
import { BtnInstall } from './BtnInstall';
import { Notificationt } from './Notification';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <TodoProvider>
                <Header />
                <main>
                    {children}
                    <BtnInstall />
                    <Notificationt />
                </main>
            </TodoProvider>
        </React.Fragment>
    );
};

export default Layout;