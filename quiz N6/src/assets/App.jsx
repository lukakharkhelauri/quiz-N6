import React, { useState } from 'react';
import './index.css';

const App = () => {
    const [ratingPage, setRatingPage] = useState(0);
    const [selectedRating, setSelectedRating] = useState(0);

    const handleRatingClick = (value) => {
        setSelectedRating(value);
    };

    const goToNextPage = () => {
        setRatingPage(ratingPage + 1);
    };

    return (
        <div className='main-container'>
            {ratingPage === 0 && (
                <div className='container'>
                    <div className='title'>How did we do?</div>
                    <div className='under-title'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</div>
                    <div className='rating-circle-container'>
                        {[1, 2, 3, 4, 5].map((value) => (
                            <div
                                key={value}
                                className={`rating-circle ${selectedRating === value ? 'selected' : ''}`}
                                onClick={() => handleRatingClick(value)}
                            >
                                {value}
                            </div>
                        ))}
                    </div>
                    <button className='submit-button' onClick={goToNextPage}>Submit</button>
                </div>
            )}

            {ratingPage === 1 && (
                <div className='container'>
                    <div className='title'>Thank you!</div>
                    <div className='under-title'>We appreciate you taking the time to give a rating. You selected: {selectedRating}</div>
                </div>
            )}
        </div>
    );
};

export default App;