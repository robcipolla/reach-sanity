import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import TagManager from "react-gtm-module";
const COOKIE_NAME = "accept_cookies";

/**
 * Update google consent manager's consent to granted.
 */
function gtmConsentUpdate() {
  gtag("consent", "update", {
    analytics_storage: "granted",
  });
}

/**
 * Custom hook to handle cookie acceptance.
 */
export default function useAcceptCookies() {
  const [acceptedCookies, setAcceptedCookies] = useState(false);

  const GoogleTagManagerArgs = {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID,
  };

  useEffect(() => {
    // Function to initialize Google Tag Manager
    TagManager.initialize(GoogleTagManagerArgs);

    // If no cookie exists - set accepted cookies to false
    if (!Cookies.get(COOKIE_NAME)) {
      setAcceptedCookies(false);
    }

    // If cookie exists and is equal to accepted
    if (Cookies.get(COOKIE_NAME) === "accepted") {
      setAcceptedCookies(true);
      gtmConsentUpdate();
    }
  }, []);

  /**
   * Function to accept cookies
   */
  function acceptCookies() {
    setAcceptedCookies(true);
    Cookies.set(COOKIE_NAME, "accepted", { expires: 365 });
    gtmConsentUpdate();
  }

  return {
    acceptedCookies,
    onAcceptCookies: acceptCookies,
  };
}
