import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import useAcceptCookies from "../../lib/hooks/useAcceptCookies";

/**
 * Cookies consent Banner
 *
 * @return {JSX.Element} Cookies consent banner for GDPR compliance
 */
export default function CookiesBanner() {
  const { acceptedCookies, onAcceptCookies } = useAcceptCookies();

  const variants = {
    hidden: { opacity: 0, y: -25 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -25 },
  };

  const router = useRouter();

  return (
    <AnimatePresence>
      {!acceptedCookies && router.pathname != "/privacy-cookies-policy" && (
        <motion.div
          className="fixed flex justify-center pt-10 top-0 left-0 right-0 h-screen items-start bg-grey-300 bg-opacity-75 z-50"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ type: "tween" }}
        >
          <div className="container max-w-[800px] bg-lynx rounded box-shadow-md p-4">
            <p>
              This website uses cookies to so we can understand how you use this
              website and make improvements. For furthe information please read
              our{" "}
              <Link href="/privacy-cookies-policy/">
                <a>privacy and cookies policy</a>
              </Link>
              .
            </p>
            <div className="flex mt-4">
              <button onClick={onAcceptCookies} className="mr-2">
                Accept and proceed
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
