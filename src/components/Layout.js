import React from 'react';
import { TodoProvider } from '../TodoContext';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <TodoProvider>
                <Header />
                <main>
                    {children}
                </main>
            </TodoProvider>
        </React.Fragment>
    );
};

export default Layout;