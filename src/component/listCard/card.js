import React from 'react';

export default ({ image, category, title, description, author }) => (
  <article
    style={{
      margin: 20,
      padding: 20,
      display: 'flex',
      boxShadow: '0 0.1875rem 1.5rem rgba(0,0,0,.2)',
      borderRadius: '.375rem',
      background: 'white',
      width: 480,
      height: 183,
    }}
  >
    <img src={image} alt={'articleImage'} style={{ height: '100%' }} />
    <div style={{ flex: 1, padding: 15 }} align="center">
      <h4>{category}</h4>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{author}</p>
    </div>
  </article>
);
