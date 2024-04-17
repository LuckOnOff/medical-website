import React from "react";
import ModalButton from "./ModalButton";

const CreateOffers = ({offers}) => {

  if(offers.length < 1) return;

    return (
        <div className='offers'>
          {offers.map((offer) => (
            <div key={offer.id} className='offers-container'>
              <div className="text-container">
                <h3 className='offers-container__title'>{offer.title}</h3>
                <p className='offers-container__price'>{offer.price}</p>
              </div>
              <ModalButton className='primary-button offers-container__button'>Заказать</ModalButton>
            </div>
          ))}
        </div>
      )
}

export default CreateOffers;