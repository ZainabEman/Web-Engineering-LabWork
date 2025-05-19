import React from 'react';

export default function Alert({ message }) {
  return (
    <div style={{ backgroundColor: 'lightgreen', padding: '10px', margin: '10px 0' }}>
      {message}
    </div>
  );
}