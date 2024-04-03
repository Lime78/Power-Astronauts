import { Link, NavLink, Outlet } from "react-router-dom"

// Router motsvarar App-komponenten
// Består av en statisk del (visas alltid) och en dynamisk (Outlet ersätts av andra komponenter)
const Root = () => (
	<div className="app">
		<header>
			<h1> Kalssons Husmanskost </h1>
			<nav>
				<NavLink to="/"> Start </NavLink>
				<NavLink to="/OrderPage"> Vänlista </NavLink>
				<NavLink to="/ConfirmPage"> Ny vän </NavLink>
                <NavLink to="/LoginPage"> Logga in </NavLink>
                <NavLink to="/EditPage"> Redigera vän </NavLink>
			</nav>
		</header>

		<main>
			<Outlet />
		</main>
	</div>
)

export default Root