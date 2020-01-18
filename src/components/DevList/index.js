import React from 'react';
import { useSelector } from 'react-redux';

import { List } from './styles'

function DevList() {
    const devs = useSelector(state => state.dev);

    return(
        <List>
            <ul>
                {devs.map(dev => (
                    <li key={dev._id} className="dev-item">
                        <header>
                            <img src="https://avatars0.githubusercontent.com/u/28929274?v=4" alt="Imagem"/>    
                            <div className="dev-info">
                                <strong>{dev.name}</strong>
                                <span>{dev.github_username} • {dev.techs}</span>
                            </div>
                        </header>
                        <p>{dev.bio}</p>
                        <a href={`https://github.com/users/${dev.github_username}`}>Ver Mais</a>
                    </li>
                ))}
            </ul>
        </List>
    )
}


export default DevList;
