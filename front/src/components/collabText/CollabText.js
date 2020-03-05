import React, {useEffect, useState} from 'react'
import Navbar from '../navbar/Navbar';
import {url} from '../../api/api'
import Card from '../accueil/Card';

const CollabText = () => {
    const [texts, setTexts] = useState([])


    useEffect(() => {
        fetch(`${url}/api/texte/collab`)
        .then(res => res.json())
        .then(res => setTexts(res))
    }, [])

    return(
        <div className="containerAccueil">
            <Navbar/>
            <div className="contentAccueil">
                <img className="backDams" alt="back sing" src={require('./image/back_collab.jpg')}/>
                {texts.map(text => {
                    return(
                    <Card collab={text.collab} textId={text.id} username={text.username} title={text.title} rate={text.rate} content={text.content} phone={text.phone} email={text.email} rateDone={text.rate_done}/>
                    )
                })}
                
            </div>
        </div>
    )
}

export default CollabText