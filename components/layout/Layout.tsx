import Container from "../UI/Container";
import Footer from "../UI/Footer";
import Header from "../UI/Header";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
	return (
		<>
			<Header />
			<Container>{props.children}</Container>
			<Footer />
		</>
	);
};

export default Layout;
