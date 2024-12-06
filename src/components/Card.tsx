import React, { useEffect, useState } from 'react';
import "../app/styles/card.css"

type propsType = {
  title: string;
  desc: string;
  img: string;
  tags: string[];
};

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // UseEffect to handle window.innerWidth only on the client-side
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 640);
    };

    // Run the check on mount
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className={`card ${isLargeScreen ? 'card-image-sm' : ''}`}
      data-aos="zoom-in-up"
    >
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
        <img src={img} alt={title} />
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
