import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  );

  const nextCard = () => {
    if (data) {
      // rajout du if (data) pour vérifier que data est défini
      setTimeout(
        () => setIndex(index < byDateDesc.length - 1 ? index + 1 : 0), // ajout du -1 pour la length
        5000
      );
    }
  };
  useEffect(() => {
    nextCard();
  });
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div
          key={event.title}
          className={`SlideCard SlideCard--${
            index === idx ? "display" : "hide"
          }`}
        >
          <img src={event.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>
      ))}

      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc?.map( // sortie de la 2eme boucle pour les conflits de key
            (eventSlide,radioIdx) => ( // ajout de eventSlide
              <input
                key={eventSlide.title} // remplacement de la key
                type="radio"
                name="radio-button"
                checked={index === radioIdx} // remplacement du idx par index
                readOnly // ajout du readOnly 
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Slider;
