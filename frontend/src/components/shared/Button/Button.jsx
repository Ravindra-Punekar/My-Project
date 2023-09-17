import React from 'react';
import styles from './Button.module.css';

const Button = ({ text, icon, onClick }) => {
    return (
        <button onClick={onClick} className={styles.button} >
            <img
                className={styles.icon}
                src={`/images/${icon}.png`}
                alt="icon"
                />
            <span>{text}</span>
        </button>
    );
};
export default Button;
