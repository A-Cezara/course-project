import Menu from '../Menu';
import { HiBookOpen, HiAcademicCap } from 'react-icons/hi';
import './Sidebar.css';
import { useEffect } from 'react';
import SidebarToggle from './SidebarToggle/SidebarToggle';
import { clsx } from 'clsx';
import MenuItem from 'components/MenuItem';

import React from 'react';
import useToggle from 'hooks/useToggle';

export default function Sidebar(props) {
  const [isSidebarExpanded, handleClick] = useToggle(true);

  const menuConfig = [
    {
      icon: <HiBookOpen />,
      name: 'University',
    },
    {
      icon: <HiAcademicCap />,
      name: 'Faculties',
    },
  ];

  useEffect(() => {
    setTimeout(() => console.log('Am inceput numaratoarea', 1000));

    return () => {
      clearTimeout();
    };
  }, []);

  return (
    <aside
      className={clsx('sidebar', !isSidebarExpanded && 'sidebar--collapsed')}
    >
      <SidebarToggle handleClick={handleClick} isExpanded={isSidebarExpanded} />

      {isSidebarExpanded && (
        <>
          <div className="sidebar-brand"></div>
          <ul className="sidebar-menu">
            {menuConfig.map((el, index) => {
              return <MenuItem key={index} item={el} isActive={index === 0} />;
            })}
          </ul>
        </>
      )}
    </aside>
  );
}

// ul > li > a - ok
// ul > a > li - not ok
