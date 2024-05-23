import { Routes, Route } from "react-router-dom";
import { HomePage, Projects, Experience, Contact } from "./pages/index";
import Header from "./components/Header";
import Contact2 from "./pages/Contact2";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<HomePage />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact2" element={<Contact2 />} />
            </Route>
        </Routes>
    );
}
