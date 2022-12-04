import './App.scss';
import NavBar from './components/NavBar';
import PostsBanner from './components/PostsBanner';

import Posts from './components/Posts';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <NavBar/>
      <PostsBanner/>
      <Posts/>
    </div>
  );
}

export default App;
