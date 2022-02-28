import React from "react";
import SEO from "../components/common/SEO";
import Layout from "../components/Layouts/Layout";

/**
 * Privacy and Cookies page
 *
 * @return {JSX.Element} JSX Code for the privacy and cookies page
 */
export default function PrivacyCookiesPolicy() {
    return (
        <Layout>
            <SEO
                title="Privacy and Cookies Policy"
                description="Please find our privacy and cookies policy on this page."
            />
            <div className="container py-8">
                <main>
                    <div className="text-container">
                        <h1>Privacy &amp; Cookies Policy</h1>
                        <p>
                            We are committed to protecting your privacy. We value our visitors
                            and endeavour to create an enjoyable and safe shopping experience
                            when visiting our website.
                        </p>
                        <p>
                            This privacy policy sets out how we use and protect any
                            information that you give when you use this website. We are
                            committed to ensuring that your privacy is protected. Should we
                            ask you to provide certain information by which you can be
                            identified when using this website, then you can be assured that
                            it will only be used in accordance with this privacy statement. We
                            may change this policy from time to time by updating this page.
                        </p>

                        <nav>
                            <ul className="pl-5 my-4 list-disc">
                                <li>
                                    <a href="#one">Information collected by our website</a>
                                </li>
                                <li>
                                    <a href="#two">Controlling your personal information</a>
                                </li>
                                <li>
                                    <a href="#three">Website Security</a>
                                </li>
                                <li>
                                    <a href="#four">An Introduction to cookies</a>
                                </li>
                                <li>
                                    <a href="#five">
                                        Your consent for cookie deployment by our website
                                    </a>
                                </li>
                                <li>
                                    <a href="#six">Cookies used by our website</a>
                                </li>
                                <li>
                                    <a href="#seven">How to disable cookies</a>
                                </li>
                            </ul>
                        </nav>

                        <section id="one">
                            <h2>Information collected by our website</h2>
                            <h3>What we collect</h3>
                            <p>
                                When making an enquiry through a form on our website, we may
                                collect the following information. Your name and appropiate
                                contact information including email address, address,
                                preferences and interests. Other information relevant to the
                                purpose of your enquiry may also be requested.
                            </p>
                            <h3>What we do with the information collected</h3>
                            <p>
                                We require this information to understand your needs and provide
                                you with more information for the product(s)/service(s) you have
                                requested. Your information may also be stored in a CRM system
                                for Internal record keeping. We may use the information to
                                improve our products and services. We may periodically send
                                promotional emails about new products, special offers or other
                                information which we think you may find interesting using the
                                email address which you have provided. From time to time, we may
                                also use your information to contact you for market research
                                purposes. We may contact you by email, phone, fax or mail. We
                                may use the information to customise the website according to
                                your interests.
                            </p>
                        </section>

                        <section id="two">
                            <h2>Controlling your personal information</h2>
                            <p>
                                You may choose to restrict the collection or use of your
                                personal information in the following ways:
                            </p>
                            <ul className="pl-5 my-4 list-disc">
                                <li>
                                    Whenever you are asked to fill in a form on the website, look
                                    for the box that you can click to indicate that you do not
                                    want the information to be used by anybody for direct
                                    marketing purposes.
                                </li>
                                <li>
                                    If you have previously agreed to us using your personal
                                    information for direct marketing purposes, you may change your
                                    mind at any time by writing to or emailing us.
                                </li>
                            </ul>
                            <p>
                                We will not sell, distribute or lease your personal information
                                to third parties unless we have your permission or are required
                                by law to do so. We may use your personal information to send
                                you promotional information about third parties which we think
                                you may find interesting if you tell us that you wish this to
                                happen. You may request details of personal information which we
                                hold about you under the Data Protection Act 1998. A small fee
                                may be payable. If you would like a copy of the information held
                                on you please write to or email us.
                            </p>
                            <p>
                                If you believe that any information we are holding on you is
                                incorrect or incomplete, please write to or email us as soon as
                                possible. We will promptly correct any information found to be
                                incorrect.
                            </p>
                        </section>

                        <section id="three">
                            <h2>Security</h2>
                            <h3>Website Security</h3>
                            <p>
                                We are committed to ensuring that your information is secure. In
                                order to prevent unauthorised access or disclosure, we have put
                                in place suitable physical, electronic and managerial procedures
                                to safeguard and secure the information we collect online.
                            </p>
                            <h3>External Links</h3>
                            <p>
                                Our website may contain links to other websites of interest.
                                However, once you have used these links to leave our site, you
                                should note that we do not have any control over that other
                                website. Therefore, we cannot be responsible for the protection
                                and privacy of any information which you provide whilst visiting
                                such sites and such sites are not governed by this privacy
                                statement. You should exercise caution and look at the privacy
                                statement applicable to the website in question.
                            </p>
                        </section>

                        <section id="four">
                            <h2>An introduction to cookies</h2>
                            <p>
                                {`A cookie is a small data file that is automatically placed onto your computer's hard drive. Cookie files are created by our website and placed onto your device in order to analyse and influence your preferences or behavior. Analytical cookies are designed to track your journey and experience on our website - so that we may tailor your experience and gather data. Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us. The majority of modern web browsers will automatically allow cookies to be placed onto your device. However you can usually modify your browser's settings in order to prevent any cookies from being placed onto your device. Setting your browser to block cookies may prevent you from taking full advantage of our website.`}
                            </p>
                            <h3>Cookies deployed by our website:</h3>
                            <ul className="pl-5 my-4 list-disc">
                                <li>Ensure that functionality operates as intended</li>
                                <li>
                                    Remember your choices and preferences during and between
                                    visits
                                </li>
                                <li>
                                    Allow you to share pages via popular social media networks
                                    including Facebook and Twitter
                                </li>
                                <li>
                                    Allow you to interact with our website by leaving comments or
                                    opinions
                                </li>
                                <li>Post enquiries via online forms</li>
                                <li>
                                    Track your visit for statistical analysis, allowing us to
                                    improve the usability, speed and security of our website
                                </li>
                            </ul>
                            <h3>Cookies are not deployed to:</h3>
                            <ul className="pl-5 my-4 list-disc">
                                <li>
                                    Collect any personal identifiable information (without your
                                    express permission)
                                </li>
                                <li>
                                    Collect any sensitive information (without your express
                                    permission)
                                </li>
                                <li>Pass data to advertising networks</li>
                                <li>Pass personally identifiable data to third parties</li>
                                <li>Pay sales commissions</li>
                            </ul>
                        </section>

                        <section id="five">
                            <h2>Your consent for cookie deployment by our website</h2>
                            <p>
                                {`Upon your first visit to our website, you may have noticed our banner alerting you to the use of cookies by our website. In compliance with the 2018 EU Cookie Law, our website operates on an 'Opt in' basis.`}
                            </p>
                            <p>
                                {`Below you can learn more about the specific cookies deployed by our website, and how they can be disabled. For more information on the EU Cookie Law in the UK, we recommend visiting the`}{" "}
                                <a
                                    href="https://ico.org.uk/for-organisations/guide-to-pecr/cookies-and-similar-technologies"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >{`Information Commissioner's Office (ICO) website`}</a>{" "}
                                {`where you can find the latest information, guidelines and advice on the EU Cookie Law.`}
                            </p>
                        </section>
                        <section id="six">
                            <h2>Cookies used by our website</h2>
                            <h3>Analytical Tracking</h3>
                            <p>
                                Our website has Google Analytics installed which allows us to
                                track and compile anonymous visitor statistics. The information
                                collected ranges from simple traffic volume to the type of
                                browser you are viewing our website with. This information is
                                valuable to us not just for marketing analysis and
                                quantification, but to improve the usability, security and load
                                speed of our website content. Google Analytics is a popular,
                                secure, flagship webmaster product from Google. Google also
                                offer a{" "}
                                <a
                                    href="https://support.google.com/analytics/answer/181881"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Google Analytics Opt-out Browser Add-on
                                </a>{" "}
                                that will allow you to automatically Opt-out of all websites
                                that track your activity via Google Analytics. No personal
                                information is collected by Google Analytics.
                            </p>
                            <h3>Cookie Consent Check</h3>
                            <p>
                                Upon your first visit to our website, you will notice a subtle
                                banner on the page alerting you to the fact that cookies are
                                being placed onto your computer by our website. In order for our
                                website to remember your choice of opting-in, we store a cookie
                                which expires after the set amount of days below (see table).
                            </p>
                            <table className="table-auto w-full my-8">
                                <thead>
                                    <tr className="border-b-[1px]">
                                        <th className="text-left pb-2">Cookie Category</th>
                                        <th className="text-left pb-2">Cookie Name</th>
                                        <th className="text-left pb-2">Cookie Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-grey-100">
                                        <td rowSpan={2}>Google Analytics</td>
                                        <td>_ga</td>
                                        <td>Used to distinguish users.</td>
                                    </tr>
                                    <tr className="border-b-[1px] bg-grey-100">
                                        <td>_ga_{process.env.NEXT_PUBLIC_GA4_ID_NUMBER}</td>
                                        <td>Used to persist session state.</td>
                                    </tr>
                                    <tr className="border-b-[1px]">
                                        <td rowSpan={2}>Cookies Consent</td>
                                        <td>
                                            __{process.env.NEXT_PUBLIC_SITE_NAME}_cookies_accepted
                                        </td>
                                        <td>
                                            Used to remember if you have seen the cookies banner or
                                            not.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section id="seven">
                            <h2>How to disable cookies</h2>
                            <p>
                                Most modern browsers allow you to control your cookie settings
                                for all websites that you browse. You can disable cookie
                                deployment completely by editing your browser settings, however
                                in doing this you may be limiting the functionality that is
                                displayed on our website. To learn how to disable cookies on
                                your preferred browser we recommend reading{" "}
                                <a
                                    href="https://support.google.com/accounts/answer/61416?hl=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    this advice posted by Google.
                                </a>
                            </p>
                            <p>
                                If you are concerned about cookies tracking your movements on
                                the Internet then you may be concerned about spyware. Spyware is
                                the name given to a particular band of cookies that track
                                personal information about you. There are many antispyware
                                programs that you can use to prevent this from happening. Learn
                                more about antispyware software -{" "}
                                <a
                                    href="https://en.wikipedia.org/wiki/Spyware"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    https://en.wikipedia.org/wiki/Spyware
                                </a>
                                . You call also disable Google Analytics on all websites by
                                downloading the{" "}
                                <a
                                    href="https://support.google.com/analytics/answer/181881"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Google Analytics Opt-out Browser Add-on
                                </a>
                                .
                            </p>
                        </section>
                    </div>
                </main>
            </div>
        </Layout>
    );
}
