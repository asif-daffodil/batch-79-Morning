import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import MarketPlace from './Pages/MarketPlace';
import Resources from './Pages/Resources';
import Posts from './Pages/Posts';
import Post from './Pages/Post';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/market-place' element={<MarketPlace />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/allpost' element={<Posts />} />
        <Route path='/allpost/:postId' element={<Post />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
