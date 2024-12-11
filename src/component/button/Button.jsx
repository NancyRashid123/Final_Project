import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Button({ text, customClick, slug }) {
  const navigate = useNavigate();
  return (
    <button
      className="view_gallery"
      onClick={() => {
        if (slug) {
          navigate(`/ourteam?slug=${slug}`); 
          scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        } else if (customClick) {
          customClick();
        }
      }}
    >
      {text}
    </button>
  );
}
