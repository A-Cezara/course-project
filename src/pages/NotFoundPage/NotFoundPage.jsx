import React from 'react';
import NotFoundImg from '../../images/icon/browser-error-404-icon.svg';
import style from './NotFoundPage.module.css';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  return (
    <div className={style.notFoundContainer}>
      <img src={NotFoundImg} alt="Not Found" className={style.notFoundImg} />
      <p className={style.notFoundText}>Ruta nu exista</p>
      <button onClick={handleRedirect}>Inapoi la pagina principala!</button>
    </div>
  );
}
