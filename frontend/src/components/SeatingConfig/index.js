import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import * as eventActions from '../../store/events';
import * as rsvpActions from '../../store/rsvps';
import url from '../MainContent/images/proposal.jpeg';
import { useHistory } from 'react-router';

function SeatingConfig({event}) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const rsvps = useSelector(state => state.rsvps);
  const history = useHistory();
  const {eventId} = useParams();
  console.log(rsvps)

  useEffect(() => {
    dispatch(rsvpActions.showRSVPs(rsvps));
  }, [dispatch])

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(eventActions.cancelCurrentEvent(eventId));
    history.push("/events")
  }

  return (
    <div className='center'>
      <div className='large-card'>
        <div className='large-card-main'>
          <h2>{event?.name} Seating Chart</h2>
            <div>
                {/* {Object.values(rsvps)?.map(rsvp =>
                <div>
                  <div>{rsvp?.User?.fullname}</div>
                  <div>{rsvp?.plusOne}</div>
                </div>
                )} */}
            </div>
        </div>
        <div className='large-card-table-foot'>
          <a className='link right-bottom pad-right'><NavLink className="unset" to={`/events/${event.id}/edit`}>Edit »</NavLink></a>
          <button className="link unset right-bottom pad-right" onClick={handleDelete}>Cancel Event »</button>
          <a className='link right-bottom'><NavLink className="unset" to={`/events`}>Back to Events »</NavLink></a>
        </div>
      </div>
    </div>
  )
}

export default SeatingConfig
