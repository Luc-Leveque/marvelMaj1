import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'

const List = () => {
  return (
    <div className='connexion-layout'>
      <section>
        <form>
          <div className='container connect'>
            <img
              src="http://previews.123rf.com/images/stodolskaya/stodolskaya1511/stodolskaya151100027/49219342-Connexion-de-l-utilisateur-ou-l-acc-s-authentification-ic-ne-Banque-d'images.jpg"
              className='avatar'
              alt='avatar'
            />
            <div className='form-input'>
              <FontAwesomeIcon icon={faUser} className='fa-user' size='2x' />
              <input
                type='text'
                placeholder='Entrez votre identifiant'
                required='required'
              />
            </div>
            <div className='form-input'>
              <FontAwesomeIcon icon={faLock} className='fa-lock' size='2x' />
              <input
                type='password'
                placeholder='Entrez votre mot de passe'
                required='required'
              />
            </div>
            <input type='submit' id='submit' value='Se Connecter' />
            <br />
            <div className='ins'>
              <a href='../Inscription'>S'inscrire</a>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default List
