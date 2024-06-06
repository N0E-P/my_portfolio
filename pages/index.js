export default function Home() {
	return <div></div>;
}

// Redirect to the french or the english version
export const getServerSideProps = async ({ locale }) => {
	return {
		redirect: {
			destination: locale === "fr" ? "/fr" : "/en",
			permanent: false,
		},
	};
};
