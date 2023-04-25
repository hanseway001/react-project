import './App.css';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Expense from './pages/Expense';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import About from './pages/About';

// import { Link } from "react-router-dom";
// import { styles } from "./Home";



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

      {/* <Link style={styles.link} to={'/expense'}>
            Expenses
          </Link>
          <Link style={styles.link} to={'/gallery'}>
            Gallery
          </Link>
          <Link style={styles.link} to={'/about'}>
            About
          </Link> */}

      </header>
      <RouterProvider router={router}/>
    </div>
  );
}


export default App;
