import React from 'react';
import './Layout.scss'; // Import your stylesheet
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import CreateTask from '../components/CreateTask/CreateTask';

const Layout = ({ children }) => {
    return (
        <div className="layoutContainer">
            <header className="navbar">
                <Navbar />
            </header>

            <div className="mainContainer">
                <aside className="sidebar">
                    <Sidebar />
                </aside>

                <main className="mainContent">
                    <main className='tasklistContainer'>{children}</main>
                    <footer className='inputContainer'><CreateTask /></footer>
                </main>
            </div>
        </div>
    );
};

export default Layout;
