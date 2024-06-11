import Landingpage from './store/components/Landingpage';
import MobilePage from './store/pages/MobilePage.jsx';
import ComputerPage from './store/pages/ComputerPage';
import FridgePage from './store/pages/FridgePage';
import FurniturePage from './store/pages/FurniturePage';
import KitchenPage from './store/pages/KitchenPage';
import MenPage from './store/pages/MenPage';
import SpeakerPage from './store/pages/SpeakerPage';
import TvPage from './store/pages/TvPage';
import WatchPage from './store/pages/WatchPage';
import WomenPage from './store/pages/WomenPage';
import BooksPage from './store/pages/BooksPage';
import MobileSinglePro from './store/SingleProducts/MobileSinglePro';
import HomeSingle from './store/SingleProducts/HomeSingle';
import ComputerSingle from './store/SingleProducts/ComputerSingle';
import FridgeSingle from './store/SingleProducts/FridgeSingle';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import FurnitureSingle from './store/SingleProducts/FurnitureSingle';
import KitchenSingle from './store/SingleProducts/KitchenSingle';
import MenSingle from './store/SingleProducts/MenSingle';
import SpeakerSingle from './store/SingleProducts/SpeakerSingle';
import TvSingle from './store/SingleProducts/TvSingle';
import WatcheSingle from './store/SingleProducts/WatchSingle.jsx';
import WomenSingle from './store/SingleProducts/WomenSingle';
import BookSingle from './store/SingleProducts/BookSingle';
import UseCart from './store/UseCart';
function App() {
  return (
    <Routes>
     <Route path='/' element={<Landingpage />} />
     <Route path='/mobile' element={<MobilePage />} />
     <Route path='/computer' element={<ComputerPage />} />
     <Route path='/fridge' element={<FridgePage />} />
     <Route path='/fruniture' element={<FurniturePage />} />
     <Route path='/kitchen' element={<KitchenPage />} />
     <Route path='/men' element={<MenPage />} />
     <Route path='/speakers' element={<SpeakerPage />} />
     <Route path='/televisions' element={<TvPage />} />
     <Route path='/watches' element={<WatchPage />} />
     <Route path='/women' element={<WomenPage />} />
     <Route path='/books' element={<BooksPage />} />
        
        <Route path='/:model' element={<HomeSingle />} />
        <Route path='/mobile/:id' element={<MobileSinglePro />} />
        <Route path='/computer/:id' element={<ComputerSingle />} />
        <Route path='/fridge/:id' element={<FridgeSingle />} />
        <Route path='/fruniture/:id' element={<FurnitureSingle />} />
        <Route path='/kitchen/:id' element={<KitchenSingle />} />
        <Route path='/men/:id' element={<MenSingle />} />
        <Route path='/televisions/:id' element={<TvSingle />} />
        <Route path='/watches/:id' element={<WatcheSingle />} />
        <Route path='/women/:id' element={<WomenSingle />} />
        <Route path='/speakers/:model' element={<SpeakerSingle />} />
        <Route path='/books/:id' element={<BookSingle />} />
        <Route path="/cart" element={<UseCart />} />
  
    </Routes>
    
  
  );
}

export default App;
