import React from "react";

/**
 * Componenet for additional <head> scripts for the website, e.g. Google Tag Manager
 *
 * @return {JSX.Element}
 */
export default function HeadScripts() {
  return (
    /**
     * Used to set the default consent values for Google tag manager.
     *
     * Default onsent values that can be used are below:
     *   'analytics_storage': 'denied',
     *   'ad_storage': 'denied',
     *   'functionality_storage': 'denied',
     *   'personalization_storage': 'denied',
     *   'security_storage': 'denied',
     */
    <script
      dangerouslySetInnerHTML={{
        __html: `
                // Define dataLayer and the gtag function.
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}

                // Default ad_storage to 'denied'.
                gtag('consent', 'default', {
                    'analytics_storage': 'denied',
                    'wait_for_update': 500
                });
            `,
      }}
    />
  );
}
