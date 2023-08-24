import React from 'react';
import styles from './Home.module.css';
// import Button from '../../components/shared/Button/Button';
import Card from '../../components/shared/Card/Card';
import useFetch from '../../useFetch';

const Home = () => {
  
  const { data, error } = useFetch('http://localhost:8000/todos');
 
  return (
    <div className={styles.home}>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
            {error && <h1>{error}</h1>}
            {data && <Card todos={data} />}
        </div>
      </div>
    </div>
  )
}

export default Home;