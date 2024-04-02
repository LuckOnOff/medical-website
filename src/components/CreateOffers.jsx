import React from "react";

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
              <button className='primary-button offers-container__button'>{offer.buttonText}</button>
            </div>
          ))}
        </div>
      )
}

export default CreateOffers;