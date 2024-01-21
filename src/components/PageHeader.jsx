const Header = ({headerTitle, Descp}) => {
	return (
		<header className="text-center">
			<h2 className="text-2xl font-bold uppercase mb-1">{headerTitle}</h2>
			<p className="mb-4">{Descp}</p>
		</header>
	);
};

export default Header;
