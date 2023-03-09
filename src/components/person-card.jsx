import '../styles/person-card.css';

function PersonCard({
  imageSrc = '',
  altText = '',
  name,
  jobTitle,
  description = '',
  index,
  setOpenPopup,
  setPopupData,
}) {
  function openPopup() {
    setPopupData({ imageSrc, altText, name, jobTitle, description });
    setOpenPopup(true);
  }

  return (
    <li className="person-card" key={index} onClick={openPopup}>
      <img src={imageSrc} alt={altText} />
      <article>
        <h3>{name}</h3>
        <h4>{jobTitle}</h4>
      </article>
    </li>
  );
}

export default PersonCard;
