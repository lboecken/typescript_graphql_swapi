import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import Theme from './modules/theme/index';
import SearchForm from './modules/searchForm/index';

function App() {
  const [searchResult, setSearchResult] = useState([]);
  return (
    <div className='App'>
      <ThemeProvider theme={Theme}>
        <h1>SWAPI -- TS & GRAPHQL</h1>
        <SearchForm setSearchResults={setSearchResult} />
      </ThemeProvider>
    </div>
  );
}

export default App;
