import React, { useState } from 'react'
import './index.css';

const App = () => {
    const [ratingPage, setRatingPage] = useState(0);

    const goToNextPage = () => {
        setRatingPage(ratingPage + 1);
    };

    return (
        <div className='main-container'>
            {ratingPage === 0 && (
                <div className='container'>
                    <div className='title'>How did we do?</div>
                    <div className='under-title'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</div>
                    <div className='rating-circles'>
                        <h2>1</h2>
                        <h2>2</h2>
                        <h2>3</h2>
                        <h2>4</h2>
                        <h2>5</h2>
                    </div>
                    <button className='submit-button' onClick={goToNextPage}>Submit</button>
                </div>
            )}
            {ratingPage === 1 && (
                 <div className='container'>
                    <div className='title'>Thank you!</div>
                    <div className='under-title'>  We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</div>
                 </div>
                    
            )}
        </div>
    );
};

export default App;