import { h } from 'preact';
import { useState } from 'preact/hooks';
import buildLetterLibrary from '../../data/letter-libraries';
import Timer from '../../components/timer';

const Home = () => {
  const letterLibrary = buildLetterLibrary();
  const [letters, addLetter] = useState([]);
  const [vowels, updateVowels] = useState(letterLibrary.vowels);
  const [consonants, updateConsonants] = useState(letterLibrary.consonants);

  const getRandomVowel = () => vowels[Math.floor(Math.random() * Math.floor(vowels.length))];
  const getRandomConsonant = () => consonants[Math.floor(Math.random() * Math.floor(consonants.length))];

  const handleRemoveVowel = (vowel) => {
    const before = vowels.slice(0, vowels.indexOf(vowel));
    const after = vowels.slice(vowels.indexOf(vowel) + 1);
    updateVowels([...before, ...after]);
  }

  const handleRemoveConsonant = (consonant) => {
    const before = consonants.slice(0, consonants.indexOf(consonant));
    const after = consonants.slice(consonants.indexOf(consonant) + 1);
    updateConsonants([...before, ...after]);
  }

  const addConsonant = () => {
    if (letters.length < 9) {
      const consonant = getRandomConsonant();
      addLetter([...letters, consonant]);
      handleRemoveConsonant(consonant);
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
    updateConsonants(letterLibrary.consonants)
  }

  return (
    <div class="flex flex-col min-h-screen items-center p-12 bg-countdown-bg">
      <h1 class="mb-8 text-5xl font-bold text-white">Countdown!</h1>
      <div class="mb-4">
        <button type="button" class="bg-blue-700 p-4 text-white font-bold uppercase shadow-md" onclick={addConsonant}>Add Consonant</button>
        <button type="button" class="bg-blue-700 p-4 text-white font-bold uppercase mx-4 shadow-md" onclick={addVowel}>Add Vowel</button>
      </div>
      {letters.length < 9 &&
        <p class="text-white text-lg">Letters left: {9 - letters.length}</p>
      }
      {letters.length === 9 &&
        <p class="text-white text-lg">Ready!</p>
      }
      {letters.length > 0 &&
        <>
          <ul class="flex flex-wrap gap-2 justify-center p-2 bg-countdown-border mb-4">
            {letters.map((value, index) => {
            return <li class="text-5xl bg-countdown-tile text-white p-6 text-center w-20" key={index}>{value}</li>
            })}
          </ul>
          {/* <div class="mb-4">
            <button type="button" class="bg-blue-700 p-4 text-white font-bold uppercase mx-2 shadow-md" onclick={reset}>Reset</button>
          </div> */}
        </>
      }
    {letters.length === 9 &&
      <Timer />
    }
    </div>
  )
};

export default Home;
