import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
    return (
        <div className={styles.nav}>
            <Link to={`/`}>Home</Link>
            <Link to={'/movie'}>Movie</Link>
            <Link to={'/Wak'}>Wak</Link>
            <Link to={'/DnD'}>DnD</Link>
            <Link to={'/Drag'}>Drag</Link>
            <Link to={'/TaskList'}>TaskList</Link>
            <Link to={'/Login'}>Login</Link>
            <Link to={`/about`}>About</Link>
            
        </div>
    );
}

export default Navigation;

// https://velog.io/@raverana96/react-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%9D%98-%ED%8F%B4%EB%8D%94%EA%B5%AC%EC%A1%B0