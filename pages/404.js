import { useEffect } from "react";
import { useRouter } from "next/router";

// redirect to the homepage of the website
export default function Home() {
	const router = useRouter();
	useEffect(() => {
		router.push("/");
	}, []);
	return <div></div>;
}
