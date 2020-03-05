import React, {useEffect,useState} from 'react';
import Navbar from '../navbar/Navbar';
import {url} from '../../api/api'
import Card from './Card';
import './accueil.css'

const Accueil = () => {
    const [texts, setTexts] = useState([])


    useEffect(() => {
        fetch(`${url}/api/texte/all`)
        .then(res => res.json())
        .then(res => setTexts(res))
    }, [])


    return (
        <div className="containerAccueil">
            <Navbar/>
            <div className="contentAccueil">
                <img className="backDams" alt="back sing" src={require('./image/back_dams.png')}/>
                {texts.map(text => {
                    console.log(text.rate_done)
                    return(
                    <Card textId={text.id} username={text.username} title={text.title} rate={text.rate} content={text.content} phone={text.phone} email={text.email} rateDone={text.rate_done}/>
                    )
                })}
                
            </div>
        </div>
    )
}

export default Accueil