
import './App.css';
import { useState } from 'react';
import profile from './assets/profile.avif';
import star from './assets/star.png';
import starFill from './assets/starFill.jpg';
import Star from './components/Star';


function App() {
  let [contact, setInfo] = useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (719) 555-1212",
    email: "itsmyemail@example.com",
    isFavorite: false,
  })
  function toggleFavorite() {
    setInfo(prevContact => {
      return {
        ...prevContact,
        isFavorite : !prevContact.isFavorite,
      }
    })
  }
  // let starIcon = (contact.isFavorite ? `${starFill}` : `${star}`);
  return (
    <main>
      <article className="card">
        <img src={profile} className="card--image" />
        <div className="card--info">
          <Star 
            isFilled={contact.isFavorite}
            handleClick={toggleFavorite}
          />
          {/* <img
            src={starIcon}
            className="card--favorite"
            onClick={toggleFavorite}
          /> */}
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>

      </article>
    </main>
  )
}


export default App;
