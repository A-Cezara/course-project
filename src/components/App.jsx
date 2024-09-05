import React from 'react';

import Sidebar from './Sidebar';
import data from '../utils/data.json';
import { useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import UniversityPage from 'pages/UniversityPage/UniversityPage';
import FacultiesPage from 'pages/FacultiesPage/FacultiesPage';
import FacultyContent from './FacultyContent/FacultyContent';
import HistoryContent from './HistoryContent/HistoryContent';
import DescriptionContent from './DescriptionContent/DescriptionContent';

export default function App() {
  useEffect(() => {
    localStorage.setItem('tutors', JSON.stringify(data?.tutors));
  }, []);

  return (
    <div className="wrapper">
      <Sidebar />
      <main className="main">
        <Routes>
          <Route path="/" element={<UniversityPage />} />
          <Route path="/university" element={<UniversityPage />} />
          <Route path="/faculties" element={<FacultiesPage />} />
          <Route path="/faculties/:facultyName" element={<FacultyContent />}>
            <Route path="" element={<DescriptionContent />} />
            <Route path="description" element={<DescriptionContent />} />
            <Route path="history" element={<HistoryContent />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

// /faculties/:facultyName/history
