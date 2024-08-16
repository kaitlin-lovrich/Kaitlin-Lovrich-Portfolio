import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { HomePage, About, Projects, Experience, Contact } from "./pages/index";
import Header from "./components/Header";
import Contact2 from "./pages/Contact2";

export default function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            setStartX(e.touches[0].clientX);
        };

        const handleTouchMove = (e: TouchEvent) => {
            setEndX(e.touches[0].clientX);
        };

        const handleTouchEnd = () => {
            const deltaX = startX - endX;

            if (deltaX > 50) {
                // Swipe left (go to next route)
                if (location.pathname === "/") {
                    navigate("/about");
                } else if (location.pathname.includes("/about")) {
                    navigate("/projects");
                } else if (location.pathname.includes("/projects")) {
                    navigate("/experience");
                } else if (location.pathname.includes("/experience")) {
                    navigate("/contact");
                }
                // Add more routes as needed
            } else if (deltaX < -50) {
                // Swipe right (go to previous route)
                if (location.pathname.includes("/about")) {
                    navigate("/");
                } else if (location.pathname.includes("/projects")) {
                    navigate("/about");
                } else if (location.pathname.includes("/experience")) {
                    navigate("/projects");
                } else if (location.pathname.includes("/contact")) {
                    navigate("/experience");
                }
                // Add more routes as needed
            }

            // Reset values
            setStartX(0);
            setEndX(0);
        };

        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [startX, endX, location.pathname, navigate]);

    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route index element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact2" element={<Contact2 />} />
            </Route>
        </Routes>
    );
}
