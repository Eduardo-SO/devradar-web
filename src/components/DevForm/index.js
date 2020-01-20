import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import api from '../../services/api'
import { Form } from './styles';

function DevForm() {    
    const dispatch = useDispatch();

    const [ github_username, setGithubusername ] = useState('');
    const [ techs, setTechs ] = useState('');
    const [ latitude, setLatitude ] = useState('');
    const [ longitude, setLongitude ] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const {latitude, longitude} = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        )
    }, [])

    
    async function handleAddDev(e) {
        e.preventDefault();

        const response = await api.post('/devs', {
            github_username,
            techs,
            latitude,
            longitude
        })

        const dev = response.data;
        
        dispatch({
            type:'ADD_DEV',
            dev
        })
    }

  return (
      <Form>
          <strong>Cadastrar</strong>
      
        <form onSubmit={handleAddDev}>
        <div className="input-block">
            <label htmlFor="github-user">Usuário do Github</label>
            <input 
                type="text"
                name="github-user"
                id="github-user"
                onChange={(e) => setGithubusername(e.target.value)}
            />
        </div>

        <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
                type="text" 
                name="techs" 
                id="techs" 
                onChange={(e) => setTechs(e.target.value)}
            />
        </div>

        <div className="input-group">
            <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input 
                type="number" 
                name="latitude" 
                id="latitude"
                onChange={(e) => setLatitude(e.target.value)}
                value={latitude}
            />
            </div>

            <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                onChange={(e) => setLongitude(e.target.value)}
                value={longitude}
            />
            </div>
        </div>

        <button type="submit">Salvar</button>
        </form>
    </Form>
  );
}

export default DevForm;
