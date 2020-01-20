import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import api from '../../services/api';
import { List } from './styles';

function DevList() {
    const newDev = useSelector(store => store.dev);
    
    const [ devs, setDevs ] = useState([]);

    useEffect(() => {
        async function loadDevs() {
            const response = await api.get('devs');

            setDevs(response.data)
        }

        loadDevs();
    }, [newDev]);

    return(
        <List>
            <ul>
                {devs.map(dev => (
                    <li key={dev._id} className="dev-item">
                        <header>
                            <img src={dev.avatar_url} alt={dev.name}/>    
                            <div className="dev-info">
                                <strong>{dev.name}</strong>
                                <span>{dev.github_username} • {dev.techs.join(', ')}</span>
                            </div>
                        </header>
                        <p>{dev.bio ? dev.bio : 'Sem Bio'}</p>
                        <a href={`https://github.com/${dev.github_username}`}>Ver Mais</a>
                    </li>
                ))}
            </ul>
        </List>
    )
}


export default DevList;
