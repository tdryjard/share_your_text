import React, {useState, useEffect} from 'react'
import {url, origin} from '../../api/api';

const Card = (props) => {


    const [classText, setClassText] = useState('contentText');
    const [seeButton, setSeeButton] = useState('voir plus')
    const [classContentRate, setClassContentRate] = useState('contentRate')
    const [classSeeMore, setClassSeeMore] = useState('seeMore')
    const [seeMore, setSeeMore] = useState(false)
    const [rateDone, setRateDone] = useState('0')
    const [textId, setTextId] = useState()

    const takeRate = (event) => {
        const rateDonate = event.target.id
        setRateDone(rateDonate)
        let rateDone = (props.rateDone + 1);
        let rateFinal = props.rate + (rateDonate/rateDone)
        console.log(rateFinal)

        fetch(`${url}/api/texte/update/${textId}`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': `${origin}`
                },
            body: JSON.stringify({
            rate: rateFinal,
            rate_done: rateDone
            })
        });
        }

    return (
        <div className={classText}>
            <h4 className="autor">{props.username}</h4>
            <div className={classContentRate}>
                <h4 className="titleText">{props.title}</h4>
                {Math.round(props.rate) === 1 ?
                    <div className="starContainer">
                        <img className="starGood" alt="star good" src={require('./image/star_good.png')}/>
                        <img className="starNone" alt="star none" src={require('./image/star_none.png')}/>
                        <img className="starNone" alt="star none" src={require('./image/star_none.png')}/>
                        <img className="starNone" alt="star none" src={require('./image/star_none.png')}/>
                        <img className="starNone" alt="star none" src={require('./image/star_none.png')}/>
                    </div>
                : Math.round(props.rate) === 2 ?
                    <div className="starContainer">
                        <img className="starGood" alt="star good" src={require('./image/star_good.png')}/>
                        <img className="starGood" alt="star good" src={require('./image/star_good.png')}/>
                        <img className="starNone" alt="star none" src={require('./image/star_none.png')}/>
                        <img className="starNone" alt="star none" src={require('./image/star_none.png')}/>
                        <img className="starNone" alt="star none" src={require('./image/star_none.png')}/>
                    </div>
                : Math.round(props.rate) === 3 ?
                    <div className="starContainer">
                        <img className="starGood" alt="star good" src={require('./image/star_good.png')}/>
                        <img className="starGood" alt="star good" src={require('./image/star_good.png')}/>
                        <img className="starGood" alt="star good" src={require('./image/star_good.png')}/>
                        <img className="starNone" alt="star none" src={require('./image/star_none.png')}/>
                        <img className="starNone" alt="star none" src={require('./image/star_none.png')}/>
                    </div>
                : Math.round(props.rate) === 4 ?
                    <div className="starContainer">
                        <img className="starGood" alt="star good" src={require('./image/star_good.png')}/>
                        <img className="starGood" alt="star good" src={require('./image/star_good.png')}/>
                        <img className="starGood" alt="star good" src={require('./image/star_good.png')}/>
                        <img className="starGood" alt="star good" src={require('./image/star_good.png')}/>
                        <img className="starNone" alt="star none" src={require('./image/star_none.png')}/>
                    </div>
                :
                    <div className="starContainer">
                        <img className="starGood" alt="star good" src={require('./image/star_good.png')}/>
                        <img className="starGood" alt="star good" src={require('./image/star_good.png')}/>
                        <img className="starGood" alt="star good" src={require('./image/star_good.png')}/>
                        <img className="starGood" alt="star good" src={require('./image/star_good.png')}/>
                        <img className="starGood" alt="star good" src={require('./image/star_good.png')}/>
                    </div>
                }
                {(seeMore && props.phone) &&
                    <div className="containerContactCard">
                        <img className="iconContact" alt="phone icon" src={require("./image/tel_icon.png")}/>
                        <h4 className="contactArtistCard">{props.phone}</h4>
                        <img className="iconContact" alt="mail icon" src={require("./image/mail_icon.png")}/>
                        <h4 className="contactArtistCard">{props.email}</h4>
                    </div>
                }
            </div>
            <p className="textContent">{props.content}</p>
            <div className="bottomCard">
                {rateDone === "0" && seeMore === true ?
                <div className="starContainerBot">
                        <h4 className="textRate">Juge le !</h4>
                        <div>
                            <img id="1" onClick={takeRate} className="starNoneDone" alt="star none" src={require('./image/star_none.png')}/>
                            <img id="2" onClick={takeRate} className="starNoneDone" alt="star none" src={require('./image/star_none.png')}/>
                            <img id="3" onClick={takeRate} className="starNoneDone" alt="star none" src={require('./image/star_none.png')}/>
                            <img id="4" onClick={takeRate} className="starNoneDone" alt="star none" src={require('./image/star_none.png')}/>
                            <img id="5" onClick={takeRate} className="starNoneDone" alt="star none" src={require('./image/star_none.png')}/>
                        </div>
                </div>
                : rateDone === "1" && seeMore === true ?
                <div className="starContainerBot">
                        <h4 className="textRate">Juge le !</h4>
                        <div>
                            <img id="1" onClick={takeRate} className="starGoodDone" alt="star none" src={require('./image/star_good.png')}/>
                            <img id="2" onClick={takeRate} className="starNoneDone" alt="star none" src={require('./image/star_none.png')}/>
                            <img id="3" onClick={takeRate} className="starNoneDone" alt="star none" src={require('./image/star_none.png')}/>
                            <img id="4" onClick={takeRate} className="starNoneDone" alt="star none" src={require('./image/star_none.png')}/>
                            <img id="5" onClick={takeRate} className="starNoneDone" alt="star none" src={require('./image/star_none.png')}/>
                        </div>
                </div>
                : rateDone === "2" && seeMore === true ?
                <div className="starContainerBot">
                        <h4 className="textRate">Juge le !</h4>
                        <div>
                            <img id="1" onClick={takeRate} className="starGoodDone" alt="star none" src={require('./image/star_good.png')}/>
                            <img id="1" onClick={takeRate} className="starGoodDone" alt="star none" src={require('./image/star_good.png')}/>
                            <img id="3" onClick={takeRate} className="starNoneDone" alt="star none" src={require('./image/star_none.png')}/>
                            <img id="4" onClick={takeRate} className="starNoneDone" alt="star none" src={require('./image/star_none.png')}/>
                            <img id="5" onClick={takeRate} className="starNoneDone" alt="star none" src={require('./image/star_none.png')}/>
                        </div>
                </div>
                : rateDone === "3" && seeMore === true ?
                <div className="starContainerBot">
                        <h4 className="textRate">Juge le !</h4>
                        <div>
                            <img id="1" onClick={takeRate} className="starGoodDone" alt="star none" src={require('./image/star_good.png')}/>
                            <img id="1" onClick={takeRate} className="starGoodDone" alt="star none" src={require('./image/star_good.png')}/>
                            <img id="1" onClick={takeRate} className="starGoodDone" alt="star none" src={require('./image/star_good.png')}/>
                            <img id="4" onClick={takeRate} className="starNoneDone" alt="star none" src={require('./image/star_none.png')}/>
                            <img id="5" onClick={takeRate} className="starNoneDone" alt="star none" src={require('./image/star_none.png')}/>
                        </div>
                </div>
                : rateDone === "4" && seeMore === true ?
                <div className="starContainerBot">
                        <h4 className="textRate">Juge le !</h4>
                        <div>
                            <img id="1" onClick={takeRate} className="starGoodDone" alt="star none" src={require('./image/star_good.png')}/>
                            <img id="2" onClick={takeRate} className="starGoodDone" alt="star none" src={require('./image/star_good.png')}/>
                            <img id="3" onClick={takeRate} className="starGoodDone" alt="star none" src={require('./image/star_good.png')}/>
                            <img id="4" onClick={takeRate} className="starGoodDone" alt="star none" src={require('./image/star_good.png')}/>
                            <img id="5" onClick={takeRate} className="starNoneDone" alt="star none" src={require('./image/star_none.png')}/>
                        </div>
                </div>
                : rateDone === "5" && seeMore === true ?
                <div className="starContainerBot">
                        <h4 className="textRate">Juge le !</h4>
                        <div>
                            <img id="1" onClick={takeRate} className="starGoodDone" alt="star none" src={require('./image/star_good.png')}/>
                            <img id="2" onClick={takeRate} className="starGoodDone" alt="star none" src={require('./image/star_good.png')}/>
                            <img id="3" onClick={takeRate} className="starGoodDone" alt="star none" src={require('./image/star_good.png')}/>
                            <img id="4" onClick={takeRate} className="starGoodDone" alt="star none" src={require('./image/star_good.png')}/>
                            <img id="5" onClick={takeRate} className="starGoodDone" alt="star none" src={require('./image/star_good.png')}/>
                        </div>
                </div>
                : null}
                <button className={classSeeMore} onClick={() => {return(setSeeMore(!seeMore), setTextId(props.textId), seeMore === true ? setClassText('contentText') : setClassText('contentTextFull'), seeMore ? setSeeButton('voir plus') : setSeeButton('voir moin'), seeMore ? setClassContentRate('contentRate') : setClassContentRate('contentRateFull'), seeMore ? setClassSeeMore('seeMore') : setClassSeeMore('seeMoreFull'))}}>{seeButton}</button>
            </div>
        </div>
    )

   
}

export default Card;