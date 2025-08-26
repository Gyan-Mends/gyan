import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

const navigation = [
    { name: "Home", to: "/", isExternal: true },
    { name: "Portfolio", to: "/portfolio", isExternal: true },
    { name: "Contact", to: "/contact", isExternal: true },
];

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal: boolean) => {
        if (isExternal) {
            // Let the browser handle external navigation
            setMobileMenuOpen(false);
            return;
        }
        
        e.preventDefault();
        const targetId = href.replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        setMobileMenuOpen(false);
    };

    return (
        <header className="fixed bg-[#25262a] top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4">
            <div className="max-w-7xl mx-auto">
                <div className={`bg-[#25262a] backdrop-blur-lg  px-6  transition-all duration-300 ${mobileMenuOpen ? 'rounded-2xl lg:rounded-full' : 'rounded-full'}`}>
                    <div className="flex items-center justify-between">
                        <Link 
                            to="/" 
                            className="flex text-white text-4xl font-italic items-center space-x-2 transform hover:scale-105 transition-transform duration-200"
                        >
                            GM
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navigation.map((item) => (
                                item.isExternal ? (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className="text-white hover:text-orange-200 font-medium transition-colors duration-200 relative group"
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                ) : (
                                    <a
                                        key={item.name}
                                        href={item.to}
                                        className="text-white hover:text-orange-200 font-medium transition-colors duration-200 relative group"
                                        onClick={(e) => handleSmoothScroll(e, item.to, item.isExternal)}
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                )
                            ))}
                        </nav>

                        {/* Contact Button */}
                        <Link to="/contact">
                        <div className="hidden lg:flex items-center">
                            <button className="bg-[#FFAF29] text-black px-6 py-2 rounded-full  transition-colors duration-300 font-medium">
                                CONTACT
                            </button>
                        </div>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 rounded-md text-white hover:text-orange-200 hover:bg-teal-800/50 transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <nav className="lg:hidden mt-4 pb-4 border-t border-teal-400 pt-4 animate-fade-in">
                            <div className="flex flex-col space-y-4">
                                {navigation.map((item) => (
                                    item.isExternal ? (
                                        <Link 
                                            key={item.name}
                                            to={item.to} 
                                            className={`font-medium transition-colors duration-200 py-2 ${
                                                item.name === 'Contact' 
                                                    ? 'bg-[#FFAF29] text-black px-6 py-3 rounded-full text-center hover:bg-[#e89d24]' 
                                                    : 'text-white hover:text-orange-200'
                                            }`}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ) : (
                                        <a
                                            key={item.name}
                                            href={item.to}
                                            className="text-white hover:text-orange-200 font-medium transition-colors duration-200 py-2"
                                            onClick={(e) => handleSmoothScroll(e, item.to, item.isExternal)}
                                        >
                                            {item.name}
                                        </a>
                                    )
                                ))}
                            </div>
                        </nav>
                    )}
                </div>
            </div>
        </header>
    );
}