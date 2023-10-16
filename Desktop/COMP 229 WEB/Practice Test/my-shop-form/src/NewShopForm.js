// NewShopForm.jsの中身

import React, { useState } from 'react';

function NewShopForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', { name, description });
  };

  return (
    <div>
      <h2>New Shop</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">SUBMIT</button>
          <button type="button" onClick={() => {
            setName('');
            setDescription('');
          }}>CANCEL</button>
        </div>
      </form>

</div>
);
}

export default NewShopForm;

