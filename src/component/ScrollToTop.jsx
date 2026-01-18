import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component - scrolls window to top when route changes
 * This ensures that when navigating via footer links or other navigation,
 * the page always starts from the top.
 */
export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
