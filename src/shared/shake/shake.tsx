import { useEffect } from 'react';

const ShakeEmoji = () => {
  useEffect(() => {
    const emojiElement = document.querySelector('.shake-emoji');

    const shakeEmoji = () => {
      if (emojiElement) {
        emojiElement.classList.add('shake');
        setTimeout(() => {
          emojiElement.classList.remove('shake');
        }, 5000); // Remove 'shake' class after 5 seconds
      }
    };

    shakeEmoji();

    // Optionally, you can add event listeners to trigger shake on specific actions.
    // For example, you can add it to a button click or any other event.

    // Clean up the effect
    return () => {
      if (emojiElement) {
        emojiElement.classList.remove('shake');
      }
    };
  }, []); // Run this effect only once when component mounts

  return (
    <h1 className="text-2xl text-surface-900 font-medium shake-emoji">
      👋
    </h1>
  );
};

export default ShakeEmoji;
