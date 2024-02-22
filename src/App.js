import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./components/Home";
import AboutPage from "./components/About";

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

// import { useEffect, useState } from "react";

// function App() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch("/api/items")
//       .then((res) => res.json())
//       .then((data) => setItems(data));
//   }, []);

//   function renderItems() {
//     return items.map((item, i) => {
//       return (
//         <div key={i}>
//           <h3>{item.name}</h3>
//           <p>Price: {item.price}</p>
//         </div>
//       );
//     });
//   }

//   return (
//     <main>
//       <h1>Hello World</h1>
//       {renderItems()}
//     </main>
//   );
// }

// export default App;
