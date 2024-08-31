import React, { useState, useEffect } from "react";
import "./Games3.css";
import test from './myjson/test.json';
import t20 from './myjson/test2.json';
import odi from './myjson/test3.json';
import { Navigate, useNavigate } from "react-router-dom";
import Home from "./Home";
function Game3() {
    const [clue1, setClue1] = useState('');
    const [clue2, setClue2] = useState('');
    const [options, setOptions] = useState([]);
    const [crct, setCrct] = useState('');
    const [ans, setAns] = useState('');
    const [ansClass, setAnsClass] = useState('');
    const [qno,setQno]=useState(1);
    const [crctans,setCrctans]=useState(0);
    const navigate=useNavigate();
    const getoptions = () => {
        if(qno<=4)
        {
        const ind = Math.floor(Math.random() * 3);
        let i, n, m, o, a, b, c;
        let selectedList;

        if (ind === 0) {
            i = Math.floor(Math.random() * (test.length - 5)) + 248;
            selectedList = test;
        } else if (ind === 1) {
            i = Math.floor(Math.random() * (t20.length - 5)) + 47;
            selectedList = t20;
        } else {
            i = Math.floor(Math.random() * (odi.length - 5)) + 178;
            selectedList = odi;
        }

        n = selectedList.find(item => item.number === i);
        m = selectedList.find(item => item.number === i - 1);
        o = selectedList.find(item => item.number === i + 1);
        a = selectedList.find(item => item.number === i + 2);
        b = selectedList.find(item => item.number === i + 3);
        setCrct(n.name);
        let ii = i;
        while (ii === i || ii === i + 2 || ii === i + 3) {
            ii = Math.floor(Math.random() * (selectedList.length - 5)) + (ind === 0 ? 248 : (ind === 1 ? 47 : 178));
        }
        c = selectedList.find(item => item.number === ii);

        setClue1(`${ind === 0 ? 'Test' : ind === 1 ? 'T20' : 'ODI'} Cap Number ${i - 1} is ${m.name}`);
        setClue2(`${ind === 0 ? 'Test' : ind === 1 ? 'T20' : 'ODI'} Cap Number ${i + 1} is ${o.name}`);
        const newOptions = [n.name, a.name, b.name, c.name].sort(() => Math.random() - 0.5);
        setOptions(newOptions);
        setAns(''); 
        setAnsClass('');
    }
    else
    {
        localStorage.setItem('score',crctans);
        navigate('/')
    }
    };

    useEffect(() => {
        getoptions();
    }, []);

    const cns = (pname) => {
        console.log(qno);
        if (pname === crct) {
            setAns('Correct Answer');
            setAnsClass('correct');
            setCrctans(c => c+1);
        } else {
            setAns('Wrong Answer');
            setAnsClass('wrong');
        }
        setQno(c => c+1);
        if(qno<=4)
        {
        setTimeout(() => {
            getoptions();
        }, 1000);
    }
    else
    {
        getoptions();
    }
    };

    return (
        <div className="container">
            <h1>Cricket Quiz</h1>
            <div className="data">
            <p>Question No:{qno}</p>
            <p>{clue1}</p>
            <p>{clue2}</p>
            </div>
            <div className="options">
                {options.map((option, index) => (
                    <p key={index} onClick={() => cns(option)}>
                        {index + 1}. {option}
                    </p>
                ))}
            </div>
            <p className={`answer ${ansClass}`}>{ans}</p>
        </div>
    );
}

export default Game3;
