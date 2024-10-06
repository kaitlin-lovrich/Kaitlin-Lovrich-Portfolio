import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {
    HomePage,
    About,
    Projects,
    Experience,
    Contact,
    Privacy,
} from "./pages/index";
import { Header, Footer, CookieConsentBanner } from "./components/index";

export default function App() {
    const location = useLocation();
    const navigate = useNavigate();
    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [endY, setEndY] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    // Mobile swipe navigation
    useEffect(() => {
        setIsMounted(true);

        // Capture the starting touch coordinates (X and Y)
        function handleTouchStart(e: TouchEvent) {
            setStartX(e.touches[0].clientX); // sets a numerical X axis value
            setStartY(e.touches[0].clientY); // sets a numerical Y axis value
        }

        // Capture the current touch coordinates (X and Y) as the touch moves
        function handleTouchMove(e: TouchEvent) {
            setEndX(e.touches[0].clientX);
            setEndY(e.touches[0].clientY);
        }

        // Determine if a swipe action occurred
        function handleTouchEnd() {
            if (!isMounted) return;

            // Calculate the differences (deltas) between starting and ending touch positions
            const deltaX = startX - endX; // Horizontal swipe distance
            const deltaY = startY - endY; // Vertical swipe distance

            const MIN_SWIPE_DISTANCE = 50; // Minimum distance to consider as a swipe
            const MAX_TAP_DISTANCE = 10; // Allow a small distance for tap detection

            // Check if swipe action is detected
            const isSwipe =
                Math.abs(deltaX) > Math.abs(deltaY) && // use abs because the value of delta can be negative depending on swipe direction
                Math.abs(deltaX) > MIN_SWIPE_DISTANCE;

            // Additional condition to distinguish taps from small swipes
            const isTap =
                Math.abs(deltaX) <= MAX_TAP_DISTANCE &&
                Math.abs(deltaY) <= MAX_TAP_DISTANCE;

            if (isSwipe) {
                if (deltaX > 0) {
                    // Swipe left (go to next route)
                    navigateToNextRoute(location.pathname);
                } else {
                    // Swipe right (go to previous route)
                    navigateToPreviousRoute(location.pathname);
                }
            } else if (isTap) {
                // If it's a tap, do nothing
                return;
            }

            // Reset all the touch coordinate values
            setStartX(0);
            setEndX(0);
            setStartY(0);
            setEndY(0);
        }

        function navigateToNextRoute(pathname: string) {
            switch (pathname) {
                case "/":
                    navigate("/about");
                    break;
                case "/about":
                    navigate("/projects");
                    break;
                case "/projects":
                    navigate("/experience");
                    break;
                case "/experience":
                    navigate("/contact");
                    break;
                default:
                    break;
            }
        }

        function navigateToPreviousRoute(pathname: string) {
            switch (pathname) {
                case "/about":
                    navigate("/");
                    break;
                case "/projects":
                    navigate("/about");
                    break;
                case "/experience":
                    navigate("/projects");
                    break;
                case "/contact":
                    navigate("/experience");
                    break;
                default:
                    break;
            }
        }

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
        <>
            <Header />
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
            </Routes>
            <CookieConsentBanner />
            <Footer />
        </>
    );
}
