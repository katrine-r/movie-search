import React from 'react';

const Image = ({ fill="#333", width, height }) => {
    return (
        <svg 
            width={width} 
            height={height} 
            viewBox="0 0 256 256" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path 
                d="M216 40H40C35.7565 40 31.6869 41.6857 28.6863 44.6863C25.6857 47.6869 
                24 51.7565 24 56V200C24 204.243 25.6857 208.313 28.6863 211.314C31.6869 
                214.314 35.7565 216 40 216H216C220.243 216 224.313 214.314 227.314 
                211.314C230.314 208.313 232 204.243 232 200V56C232 51.7565 230.314 
                47.6869 227.314 44.6863C224.313 41.6857 220.243 40 216 40ZM216 
                56V158.75L189.93 132.69C188.444 131.204 186.68 130.025 184.739 
                129.221C182.797 128.416 180.716 128.002 178.615 128.002C176.514 
                128.002 174.433 128.416 172.491 129.221C170.55 130.025 168.786 
                131.204 167.3 132.69L147.3 152.69L103.3 108.69C100.3 105.692 96.2316 
                104.007 91.99 104.007C87.7484 104.007 83.6803 105.692 80.68 108.69L40 
                149.37V56H216ZM40 172L92 120L172 200H40V172ZM216 200H194.63L158.63 
                164L178.63 144L216 181.38V200ZM144 100C144 97.6266 144.704 95.3066 
                146.022 93.3332C147.341 91.3598 149.215 89.8217 151.408 88.9134C153.601 
                88.0052 156.013 87.7676 158.341 88.2306C160.669 88.6936 162.807 89.8365 
                164.485 91.5147C166.164 93.1929 167.306 95.3311 167.769 97.6589C168.232 
                99.9867 167.995 102.399 167.087 104.592C166.178 106.785 164.64 108.659 
                162.667 109.978C160.693 111.296 158.373 112 156 112C152.817 112 149.765 
                110.736 147.515 108.485C145.264 106.235 144 103.183 144 100Z" 
                fill={fill}
            />
        </svg>                   
    )
}

export default Image