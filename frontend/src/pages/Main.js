import React from 'react';

import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';

import './Main.css';

export default function Main({ match }){
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                
            <li>
                    <img src="https://www.medicalnewstoday.com/content//images/articles/322/322868/golden-retriever-puppy.jpg" alt="" />
                    <footer>
                        <strong>Nrj</strong>
                        <p>Teste de Teste</p>
                    </footer>
                    <div className="buttons">
                        <button type="button" >
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button" >
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                
                <li>
                    <img src="https://www.medicalnewstoday.com/content//images/articles/322/322868/golden-retriever-puppy.jpg" alt="" />
                    <footer>
                        <strong>Nrj</strong>
                        <p>Teste de Teste</p>
                    </footer>
                    <div className="buttons">
                        <button type="button" >
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button" >
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                
                <li>
                    <img src="https://www.medicalnewstoday.com/content//images/articles/322/322868/golden-retriever-puppy.jpg" alt="" />
                    <footer>
                        <strong>Nrj</strong>
                        <p>Teste de Testeasd asudha usdhua shduash udasdh asudhausd uashdu ahsudahsu hdasudh</p>
                    </footer>
                    <div className="buttons">
                        <button type="button" >
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button" >
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://www.medicalnewstoday.com/content//images/articles/322/322868/golden-retriever-puppy.jpg" alt="" />
                    <footer>
                        <strong>Nrj</strong>
                        <p>Teste de Teste</p>
                    </footer>
                    <div className="buttons">
                        <button type="button" >
                            <img src={dislike} alt="Dislike" />
                        </button>
                        <button type="button" >
                            <img src={like} alt="Like" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    );
}