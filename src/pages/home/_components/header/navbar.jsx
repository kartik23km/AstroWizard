import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav>
            <ul className="flex gap-10">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => 
                                `cursor-pointer relative pb-1 transition-colors duration-300 hover:text-yellow-400 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:transition-transform after:duration-300 after:bg-cosmic-blue ` +
                                (isActive 
                                    ? "text-yellow-400 after:scale-x-100" 
                                    : "text-soft-white after:scale-x-0 hover:after:scale-x-100"
                                )
                            }
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;