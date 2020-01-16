import React from 'react';
import './styles.css';

export default function DevForm() {
  return (
      <div id="dev-form">
          <strong>Cadastrar</strong>
      
        <form>
        <div className="input-block">
            <label htmlFor="github-user">Usuário do Github</label>
            <input type="text" name="github-user" id="github-user" />
        </div>

        <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input type="text" name="techs" id="techs" />
        </div>

        <div className="input-group">
            <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input type="number" name="latitude" id="latitude" />
            </div>

            <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input type="number" name="longitude" id="longitude" />
            </div>
        </div>

        <button type="submit">Salvar</button>
        </form>
    </div>
  );
}
