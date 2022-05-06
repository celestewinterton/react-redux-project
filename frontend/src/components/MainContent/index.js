import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./MainContent.css"
import * as eventActions from '../../store/events';
import * as rsvpActions from '../../store/rsvps';
import EventCard from '../EventCard';
import RSVPCard from '../RSVPCard';
import { Route } from 'react-router';
import { Modal } from '../../context/Modal';
import Search from '../Search'
import SearchInput from '../Search/SearchInput'

function MainContent({isLoaded}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const events = useSelector(state => state.events)
  const rsvps = useSelector(state => state.rsvps)
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(eventActions.showAllEvents(events));
    dispatch(rsvpActions.showRSVPs(rsvps));
  }, [dispatch])

  return (
    <div className='main-content-container'>
      <h2>Upcoming Events!</h2>
      <div>
        {events ? <div><h3 className='text-center'>Planning</h3><div>{
        Object.values(events).map(event => <EventCard key={event?.id} event={event} />
        )}</div>
          <NavLink to='/events/new'>
            <div className='muted'>
              <a className='link center'>Plan a new event!</a>
            </div>
          </NavLink>
        </div> : null}
      </div>
      <div>
        {rsvps && events ? <div><h3>Attending</h3><div>{
        Object.values(rsvps).map(rsvp => <RSVPCard key={rsvp.id} rsvp={rsvp} />
        )}</div></div> : null}
      </div>
      <div className='muted'>Don't see your event? <span> </span>
      <button className='link unset' onClick={() => setShowModal(true)}><span> </span>Search here</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SearchInput />
        </Modal>
      )}
      </div>
    </div>
  )
}

export default MainContent;
