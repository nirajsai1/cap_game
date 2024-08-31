import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [pv, setPv] = useState(null); 

    useEffect(() => {
        const pscore = localStorage.getItem('score');
        if (pscore !== null) {
            setPv(pscore);
        }
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '20%' }}>
            <h1>Welcome to the Cricket Quiz</h1>
            <Link 
                to='/game' 
                style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    margin: '20px 0',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontSize: '20px'
                }}
            >
                Start Game
            </Link>
            {pv !== null ? (
                <p style={{ fontSize: '18px', color: '#555' }}>Previous score: {pv}</p>
            ) : (
                <p style={{ fontSize: '18px', color: '#555' }}>No previous score available</p>
            )}
        </div>
    );
}

export default Home;

