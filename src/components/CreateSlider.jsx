import React, { useState } from 'react';

const CreateSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    return (
        <div className="slider">
            <div className="slider__current-slide" style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
                {slides.map((slide, index) => (
                    <img
                        key={index} 
                        src={slide} 
                        alt='слайд не прогрузился, извините =(' 
                        className={index === currentIndex ? 'current-slide-img active' : 'current-slide-img'}
                    />
                ))}
            </div>
            <div className="slider__box-buttons">
            <button className='previous-button' onClick={prevSlide}>&lt;</button>
            <button className='next-button' onClick={nextSlide}>&gt;</button>
            </div>
        </div>
    );
};

export default CreateSlider;