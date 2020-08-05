import React from 'react';

import './styles.css';

interface ButtonProps {
    title: string;
    type: string;
    icon?: any;
}

const ButtonApp: React.FC<ButtonProps> = ({ title, type, icon }) => {
    return(
        <button className={type}>
            {icon}
            {title}
        </button>
    );
}

export default ButtonApp;