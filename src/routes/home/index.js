import { h } from 'preact';
import style from './style.css';
import { useState } from 'preact/hooks';
import buildLetterLibrary from '../../data/letter-libraries';

const Home = () => {
  const letterLibrary = buildLetterLibrary();
  const [letters, addLetter] = useState([]);
  const [vowels, updateVowels] = useState(letterLibrary.vowels);
  const [consonents, updateConsonents] = useState(letterLibrary.consonents);


  const getRandomVowel = () => vowels[Math.floor(Math.random() * Math.floor(vowels.length))];
  const getRandomConsonent = () => consonents[Math.floor(Math.random() * Math.floor(consonents.length))];

  const handleRemoveVowel = (vowel) => {
    const before = vowels.slice(0, vowels.indexOf(vowel));
    const after = vowels.slice(vowels.indexOf(vowel) + 1);
    updateVowels([...before, ...after]);
  }

  const handleRemoveConsonent = (consonent) => {
    const before = consonents.slice(0, consonents.indexOf(consonent));
    const after = consonents.slice(consonents.indexOf(consonent) + 1);
    updateConsonents([...before, ...after]);
  }

  const addConsonent = () => {
    if (letters.length < 9) {
      const consonent = getRandomConsonent();
      addLetter([...letters, consonent]);
      handleRemoveConsonent(consonent);
    }
  };

  const addVowel = () => {
    if (letters.length < 9) {
      const vowel = getRandomVowel();
      addLetter([...letters, vowel]);
      handleRemoveVowel(vowel);
    }
  }

  const reset = () => {
    addLetter([]);
    updateVowels(letterLibrary.vowels);
    updateConsonents(letterLibrary.consonents)
  }

  return (
    <div class={style.home}>
      <h1>Countdown!</h1>
      <button type="button" onclick={addConsonent}>Add Consonent</button>
      <button type="button" onclick={addVowel}>Add Vowel</button>
      <button type="button" onclick={reset}>Reset</button>
      <ul>
        {letters.map((value, index) => {
        return <li key={index}>{value}</li>
        })}
      </ul>
    </div>
  )
};

export default Home;
