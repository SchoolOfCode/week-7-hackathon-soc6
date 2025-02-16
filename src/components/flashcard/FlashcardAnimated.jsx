import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import classes from './Flashcard.module.css';

function FlashcardAnimated({ flashcard }) {
    const [isFlipped, setIsFlipped] = useState(false);

    function handleClick() {
        setIsFlipped(!isFlipped);
    }

    return (
        <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="horizontal" // You can change this to "vertical" if you want a different flip direction
        // containerClassName={classes.cardContainer} // Optionally apply a wrapper class for styles
        >
            <div
                className={classes.unFlipped}
                onClick={handleClick}
            >
                <img src='images/unflipped-emoji.png' alt="Thinking emoji" />
                {flashcard.question}
            </div>

            <div
                className={classes.flipped}
                onClick={handleClick}
            >

            <img src='images/flipped-emoji.png' alt="Mind-blown emoji" />
                {flashcard.answer}
            </div>
        </ReactCardFlip>
    );
}

export default FlashcardAnimated;
