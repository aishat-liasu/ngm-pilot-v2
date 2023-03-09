import { useState } from 'react';
import '../styles/person-popup.css';

import closeIcon from '../assets/images/close-icon.png';

function PersonPopup({
  imageSrc = '',
  altText = '',
  name,
  description = '',
  popupControl,
  jobTitle,
}) {
  const [popupState, setPopupState] = useState(false);

  const closeStyle = {
    display: 'block',
  };

  function closePopup() {
    setPopupState(true);
    popupControl(false);
  }

  return (
    <div className="person-popup" style={!popupState ? closeStyle : {}}>
      <article className="person-content">
        <button className="close-btn" onClick={closePopup}>
          <img src={closeIcon} alt="Close Icon" />
        </button>
        <div className="person-profile">
          <img src={imageSrc} alt={altText} />
          <h3>{name}</h3>
          <h4>{jobTitle}</h4>
        </div>
        <p>{description}</p>
      </article>
    </div>
  );
}

export default PersonPopup;
