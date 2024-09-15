import React, { Suspense, lazy } from 'react';

import Sidebar from './Sidebar';
import data from '../utils/data.json';
import { useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import UniversityPage from 'pages/UniversityPage/UniversityPage';
import FacultiesPage from 'pages/FacultiesPage/FacultiesPage';
import FacultyContent from './FacultyContent/FacultyContent';
import HistoryContent from './HistoryContent/HistoryContent';
import DescriptionContent from './DescriptionContent/DescriptionContent';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import LoadingPage from 'pages/LoadingPage/LoadingPage';
import { FaRegFileCode } from 'react-icons/fa';

const LazyUniversityPage = lazy(() =>
  import('pages/UniversityPage/UniversityPage')
);
const LazyFacultiesPage = lazy(() =>
  import('pages/FacultiesPage/FacultiesPage')
);
const LazyFacultyContent = lazy(() =>
  import('./FacultyContent/FacultyContent')
);

export default function App() {
  useEffect(() => {
    localStorage.setItem('tutors', JSON.stringify(data?.tutors));
  }, []);

  return (
    <div className="wrapper">
      <Sidebar />
      <main className="main">
        <Suspense fallback={<LoadingPage />}>
          <Routes>
            <Route path="/" element={<UniversityPage />} />
            <Route path="/university" element={<LazyUniversityPage />} />
            <Route path="/faculties" element={<LazyFacultiesPage />} />
            <Route
              path="/faculties/:facultyName"
              element={<LazyFacultyContent />}
            >
              <Route path="" element={<DescriptionContent />} />
              <Route path="description" element={<DescriptionContent />} />
              <Route path="history" element={<HistoryContent />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

// /faculties/:facultyName/history
