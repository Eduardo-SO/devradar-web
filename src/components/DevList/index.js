import React from 'react';
import './styles.css'

export default function DevList() {
    return(
        <div id="dev-list">
            <ul>
                <li className="dev-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/28929274?v=4" alt="Imagem"/>    
                        <div className="dev-info">
                            <strong>nome</strong>
                            <span>descricao</span>
                        </div>
                    </header>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum minima iusto dolor exercitationem neque repellendus, accusantium in quod praesentium.</p>
                    <a href="#asda">Teste</a>
                </li>
                <li className="dev-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/28929274?v=4" alt="Imagem"/>    
                        <div className="dev-info">
                            <strong>nome</strong>
                            <span>descricao</span>
                        </div>
                    </header>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum minima iusto dolor exercitationem neque repellendus, accusantium in quod praesentium.</p>
                    <a href="#asda">Teste</a>
                </li>
            </ul>
        </div>
    )
}