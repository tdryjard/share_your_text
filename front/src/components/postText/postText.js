import React, {useRef, useState} from 'react'
import {url, origin} from '../../api/api'
import {Redirect} from 'react-router-dom'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer'
import './postText.css'

const PostText = () => {

    const [anonyme, setAnonyme] = useState(false)
    const [redirection, setRedirection] = useState('')
    const [share, setShare] = useState(0)

    const inputsRef = {
		pseudo: useRef(null),
		title: useRef(null),
		text: useRef(null),
		phone: useRef(null),
        email: useRef(null)
  }

  async function postText () {

    let textBody = {}

    if (anonyme === true){
        textBody = {
            username : inputsRef.pseudo.current.value || null,
            title: inputsRef.title.current.value || null,
            content: inputsRef.text.current.value || null,
            phone: inputsRef.phone.current.value || null,
            email: inputsRef.email.current.value || null,
            rate: 1,
            rate_done: 1,
            collab: share
        }
}
    else{
        textBody = {
            username : inputsRef.pseudo.current.value || null,
            title: inputsRef.title.current.value || null,
            content: inputsRef.text.current.value || null,
            rate: 1,
            rate_done: 1,
            collab: share
        }
    }


    if (textBody.username === null || textBody.title === null || textBody.content === null){
        alert('Champ(s) vide(s)')
    }

    else{

    try{
        fetch(url + '/api/texte/post', {
          method: 'POST',
          headers: {
            'Content-Type' :'application/json',
            'Acces-Control-Allow-Origin' : {origin}	
          },
          body: JSON.stringify(textBody)
        });
      } catch (error)  {
        console.log(error);
      }

      if (textBody.username !== null || textBody.title !== null || textBody.content == null){
        setTimeout(() => setRedirection(<Redirect to="/" />), 1500)
      }
  }
}

    return (
        <div className="contentPostText">
            <Navbar/>
            { redirection }
            <div className="contentFormPostText">
                <input ref={inputsRef.pseudo} type="text" name="pseudo" maxLength="30" placeholder="pose ton blaze" className="inputPseudo"/>
                <input ref={inputsRef.title} type="text" name="title" maxLength="30" placeholder="pose un titre" className="inputTitle"/>
                <div className="contentCheckShare">
                        <h4 className="textCheck">texte collaboratif</h4>
                        {share === 0 ?
                        <div onClick={() => {setShare(1)}} className="checkBox"/>
                        :
                        <div onClick={() => {setShare(0)}} className="checkBox">
                            <img src={require('./image/checkBox.png')} className="imgCheck" />
                        </div> }
                </div>
                <input ref={inputsRef.text} type="text" name="texte" maxLength="3500" placeholder="texte" className="inputText"/>
                {anonyme &&
                <div className="contentContact">
                    <h4 className="titleContact">Partages t'es contacts</h4>
                    <input ref={inputsRef.phone} className="contactInput" name="phone" type="text" maxLength="20" placeholder="téléphone"/>
                    <input ref={inputsRef.email} className="contactInput" name="email" type="text" maxLength="150" placeholder="email"/>
                </div>
                }
                <div className="contentButtonChoice">
                    <button className="choiceContact" onClick={() => {setAnonyme(true)}}>célébrité</button>
                    <button className="choiceContact2" onClick={() => {setAnonyme(false)}}>anonymat</button>
                    <button onClick={postText} className="sendText">Poster</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PostText;