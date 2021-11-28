import React from 'react';
import { TodoProvider } from '../TodoContext';
import Header from './Header';
import { BtnInstall } from './BtnInstall';
import { Notificationt } from './Notification';
import OneSignal from 'react-onesignal';

const Layout = ({ children }) => {


    React.useEffect(() => {
        //OneSignal.push(function () {
        OneSignal.init({
            appId: "3feaffeb-6d82-497b-90ea-3767f61d0fbf",
        });
        //});
    }, []);

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