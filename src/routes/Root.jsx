import { Link, NavLink, Outlet } from "react-router-dom"
import './root.css'

// Router motsvarar App-komponenten
// Består av en statisk del (visas alltid) och en dynamisk (Outlet ersätts av andra komponenter)
const Root = () => (
	<div className="app">
		<header>
			<h1> Kalssons Husmanskost </h1>
			<nav>
				<NavLink to="/"> LandingPage </NavLink>
				<NavLink to="/OrderPage"> Orderpage </NavLink>
				<NavLink to="/ConfirmPage"> ConfirmPage </NavLink>
                <NavLink to="/LoginPage"> Log in </NavLink>
                <NavLink to="/EditPage"> EditPage </NavLink>
			</nav>
		</header>

		<main>
			<Outlet />
		</main>
	</div>
)

export default Root