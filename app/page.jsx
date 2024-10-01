'use client';

import { useState } from 'react';
import Link from 'next/link';
import './globals.css';

export default function MyFunction() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div 
      onSubmit={handleSubmit} 
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',  // Pour que le contenu soit centré verticalement sur toute la hauteur de la page
        flexDirection: 'column'  // Pour aligner les éléments verticalement
      }}
    >
      <input
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Tapez quelque chose"
        style={{
          marginBottom: '20px',  // Espace entre l'input et le bouton
          padding: '10px',        // Un peu de padding pour rendre l'input plus large
          fontSize: '16px'        // Taille du texte
        }}
      />
      <Link href={`/${encodeURIComponent(inputValue)}`}>
        <button 
          type="submit"
          style={{
            padding: '10px 20px',  // Ajuste la taille du bouton
            fontSize: '16px'        // Taille du texte du bouton
          }}
        >
          Appuie
        </button>
      </Link>
    </div>
  );
}