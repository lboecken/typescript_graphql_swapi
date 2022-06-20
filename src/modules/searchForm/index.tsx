import { ChangeEvent, useState } from 'react';
import axios from 'axios';

import SearchFormContainer from './style';

interface SearchFormProps {
  setSearchResults: Function;
}

interface GraphQLres {
  getFuzzyPerson?: any[];
}

function SearchForm({ setSearchResults }: SearchFormProps) {
  const [charName, setCharName] = useState('lukeskywalker');
  async function handleSubmit() {
    const { data } = await axios({
      method: 'post',
      url: 'https://swapi.skyra.pw/',
      data: {
        query: `query($person: String!) {getFuzzyPerson(person: $person) {name species {name} homeworld {name} birthYear height mass}}`,
        variables: { person: charName },
      },
    });
    setSearchResults(data);
  }
  function handleChange(e: ChangeEvent) {
    const processed = (e.target as HTMLInputElement).value
      .toLowerCase()
      .replace(/\s+/g, '');
    setCharName(processed);
  }

  return (
    <SearchFormContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
        <input
          onChange={(e) => handleChange(e)}
          placeholder='Search for your favorite character here'
        />
        <button>SEARCH</button>
      </form>
    </SearchFormContainer>
  );
}

export default SearchForm;
