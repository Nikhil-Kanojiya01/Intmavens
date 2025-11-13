import React, { useState, useEffect } from 'react'

const Carousel = ({ 
    items = [], 
    autoPlay = true, 
    autoPlayInterval = 5000,
    showDots = true,
    showArrows = true,
    className = '',
    renderItem
}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(autoPlay)

    // Auto-play functionality
    useEffect(() => {
        if (!isPlaying || items.length <= 1) return

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === items.length - 1 ? 0 : prevIndex + 1
            )
        }, autoPlayInterval)

        return () => clearInterval(interval)
    }, [isPlaying, items.length, autoPlayInterval])

    const goToSlide = (index) => {
        setCurrentIndex(index)
    }

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1)
    }

    const goToNext = () => {
        setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1)
    }

    const handleMouseEnter = () => {
        if (autoPlay) setIsPlaying(false)
    }

    const handleMouseLeave = () => {
        if (autoPlay) setIsPlaying(true)
    }

    if (!items.length) return null

    return (
        <div 
            className={`carousel ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="carousel__container">
                {/* Navigation Arrows */}
                {showArrows && items.length > 1 && (
                    <>
                        <button 
                            className="carousel__arrow carousel__arrow--prev"
                            onClick={goToPrevious}
                            aria-label="Previous slide"
                        >
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button 
                            className="carousel__arrow carousel__arrow--next"
                            onClick={goToNext}
                            aria-label="Next slide"
                        >
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </>
                )}

                {/* Carousel Content */}
                <div className="carousel__content">
                    <div 
                        className="carousel__track"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {items.map((item, index) => (
                            <div key={item.id || index} className="carousel__slide">
                                {renderItem ? renderItem(item, index) : (
                                    <div className="carousel__slide-content">
                                        {item.content || JSON.stringify(item)}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dot Indicators */}
                {showDots && items.length > 1 && (
                    <div className="carousel__dots">
                        {items.map((_, index) => (
                            <button
                                key={index}
                                className={`carousel__dot ${
                                    index === currentIndex ? 'carousel__dot--active' : ''
                                }`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Carousel