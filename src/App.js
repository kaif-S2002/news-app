import "./App.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import News from "./components/news";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route
            path="/news-app"
            // element={<News key="general" categories="top" />}
            element={<News key="general" categories="general" />}
          />
          <Route
            path="/technology"
            element={<News key="technology" categories="technology" />}
          />
          <Route
            path="/business"
            element={<News key="business" categories="business" />}
          />
          <Route
            path="/sports"
            element={<News key="sports" categories="sports" />}
          />
          <Route
            path="/health"
            element={<News key="health" categories="health" />}
          />
          <Route
            path="/entertainment"
            element={<News key="entertainment" categories="entertainment" />}
          />
          <Route
            path="/science"
            element={<News key="science" categories="science" />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
