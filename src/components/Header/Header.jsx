import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';
import authService from '../../appwrite/auth'; // ✅ Corrected path
import { Container, Logo } from '../index';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const dispatch = useDispatch();

    const handleLogout = async () => {
        await authService.logout(); // ✅ No dispatch needed here
        dispatch(logout()); // ✅ Dispatch logout action manually
    };

    const navItems = [
        { name: 'Home', slug: "/", active: true },
        { name: "Login", slug: "/login", active: !authStatus },
        { name: "Signup", slug: "/signup", active: !authStatus },
        { name: "All Posts", slug: "/all-posts", active: authStatus },
        { name: "Add Post", slug: "/add-post", active: authStatus },
    ];

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 py-3">
            <nav className="container mx-auto flex items-center justify-between px-4 flex-wrap">
                {/* Logo */}
                <Link to="/" className="flex-shrink-0">
                    <Logo width="80px" />
                </Link>

                {/* Navigation Links */}
                <ul className="flex space-x-4 items-center">
                    {navItems.map((item) =>
                        item.active ? (
                            <li key={item.name}>
                                <Link
                                    to={item.slug}
                                    className="px-4 py-2 text-base font-medium text-gray-800 transition duration-300 rounded-lg hover:bg-gray-200"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ) : null
                    )}
                    {authStatus && (
                        <li>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                            >
                                Logout
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
