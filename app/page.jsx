'use client';

import { useState } from 'react';
import Link from 'next/link';



export default function MyFunction() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
<div>
    <div>
    <div  onSubmit={handleSubmit}>
      <input      
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Tapez quelque chose"
      />
<Link href={`/${encodeURIComponent(inputValue)}`}>
        <button  type="submit">Appuie</button>
      </Link>
    </div>
  </div>
</div>
  );
}