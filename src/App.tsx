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
    const [startY, setStartY] = useState(0);
    const [endY, setEndY] = useState(0);
    const [isMounted, setIsMounted] = useState(false); // Add this state

    useEffect(() => {
        setIsMounted(true); // Set mounted status to true after the first render

        const handleTouchStart = (e: TouchEvent) => {
            setStartX(e.touches[0].clientX);
            setStartY(e.touches[0].clientY);
        };

        const handleTouchMove = (e: TouchEvent) => {
            setEndX(e.touches[0].clientX);
            setEndY(e.touches[0].clientY);
        };

        const handleTouchEnd = () => {
            if (!isMounted) return; // Only proceed if components are mounted

            const deltaX = startX - endX;
            const deltaY = startY - endY;

            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
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
                } else if (deltaX < 0) {
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
                }
            }

            // Reset values
            setStartX(0);
            setEndX(0);
            setStartY(0);
            setEndY(0);
        };

        window.addEventListener("touchstart", handleTouchStart);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchend", handleTouchEnd);

        return () => {
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [startX, endX, startY, endY, location.pathname, navigate, isMounted]);

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
