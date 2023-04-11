// import './App.css';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import Calendar from './pages/Calendar'
import MyDay from './pages/MyDay'
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
    path: "/myday",
    element: <MyDay />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  }
]);


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <RouterProvider router={router}/>

    </div>
  );
}

function NavBar() {
  return (
    <nav>
      <link to="/">Home</link>
      {/* <link to="./PAGES/Calendar">Calendar</link> */}
      <link to="/about">About</link>
    </nav>
  )
}

// function Home() {
//   return <div>home</div>
// }

// function About() {
//   return <div>about</div>
// }

export default App;
