'use client';
import './assets/style/page.css';
import ham from './assets/image/hamburger.svg';
import Image from 'next/image';
import UserPage from './components/UserPage';
import AdminPage from './components/AdminPage';
import { useState } from 'react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('user');
  const [showMenu, setShowMenu] = useState(false);
  const handlePageChange = (page) => {
    setShowMenu(false);
    setCurrentPage(page);
  };

  let pageComponent;
  switch (currentPage) {
    case 'user':
      pageComponent = <UserPage />;
      break;
    case 'admin':
      pageComponent = <AdminPage />;
      break;
    default:
      pageComponent = <HomePage />;
  }
  return (
    <main>
      <header className='header'>
        <div className='line1'>
          <div>header</div>
          <Image
            src={ham}
            alt=''
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          />
        </div>
        <div className={`line2 `}>
          <div className='position-op' onClick={() => handlePageChange('user')}>
            User
          </div>
          <div
            className='position-op'
            onClick={() => handlePageChange('admin')}
          >
            Admin
          </div>
        </div>
      </header>
      <section className={`body ${currentPage}`}>{pageComponent}</section>
    </main>
  );
}
