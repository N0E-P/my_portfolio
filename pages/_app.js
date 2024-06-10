import "../styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
	const router = useRouter();

	useEffect(() => {
		// Detect the browser's preferred language
		const browserLang = navigator.language || navigator.userLanguage;
		const supportedLocales = ["en", "fr"];
		let detectedLocale = "en"; // fallback to 'en-US' if the browser's language is not supported

		if (supportedLocales.includes(browserLang)) {
			detectedLocale = browserLang;
		}

		// If the user hits the root path, redirect based on the browser's language
		if (router.pathname === "/") {
			router.replace(`/${detectedLocale}`);
		}
	}, [router.pathname]);

	return <Component {...pageProps} />;
}
