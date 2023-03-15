import React from 'react';

const PlayArrow = ({ fill="#fff" }) => {
    return (
        <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M9.525 18.025C9.19167 18.2417 8.854 18.254 8.512 18.062C8.17067 17.8707 
                8 17.575 8 17.175V6.82499C8 6.42499 8.17067 6.12899 8.512 5.93699C8.854 
                5.74566 9.19167 5.75832 9.525 5.97499L17.675 11.15C17.975 11.35 18.125 
                11.6333 18.125 12C18.125 12.3667 17.975 12.65 17.675 12.85L9.525 
                18.025ZM10 15.35L15.25 12L10 8.64999V15.35Z" 
                fill={fill}
            />
        </svg>
    )
}

export default PlayArrow