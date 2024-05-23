import { Routes, Route } from "react-router-dom";
import { About, Projects, Experience } from "./pages/index";
import Header from "./components/Header";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
            </Route>
        </Routes>
    );
}
