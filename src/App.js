import './App.css';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Expense from './pages/Expense'
import Gallery from './pages/Gallery'
import Home from './pages/Home'
import About from './pages/About'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/expense",
    element: <Expense />,
  }
]);


function App() {
  return (
    <div className="App">
      <header className="">
      </header>
      <RouterProvider router={router}/>

    </div>
  );
}


export default App;
