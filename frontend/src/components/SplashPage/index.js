import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from '../SignupFormModal/SignupForm';

import './SplashPage.css'

function SplashPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="splash-card">
        <form className='splash-form'>
          <h2>Want your guests to choose their own seating?</h2>
          <div className='space'>Sign up for Guestly today so you can skip the seating charts!</div>
          <div className='space'>Guestly allows you your guests to RSVP, select seating, and view your registry all in one place.</div>
          <button onClick={() => setShowModal(true)} className='splash-button'>Start Planning!</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <SignupForm />
            </Modal>
          )}
          <button className='splash-button'>Attending a wedding? RSVP here!
          </button>
        </form>
      </div>
    </div>
  )
}

export default SplashPage;