import React from 'react';
import styles from './Navigation.module.css';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate  = useNavigate();
    
  function todo() {
      navigate("/");
  }
  function contact() {
      navigate("/contact");
  }
  
  return (
    <div className={styles.navbar}>
      <h1 className={styles.logo}>
      <Link to='/'>ToDo</Link>

      </h1>
      
      <h1 clasName={styles.contact}>
        <Link to='/contact'>Connect with me </Link>
      </h1>
    </div>
    
  )
}

export default Navigation;