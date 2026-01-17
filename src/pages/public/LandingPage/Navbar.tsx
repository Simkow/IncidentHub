import Logo from "../../../assets/IncidentHub-logo-white.png";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {

    return (
        <div className="w-full h-18 fixed px-56 py-4 bg-[#090909]/70 text-gray-400 flex items-center justify-between jost border-b border-white/30 z-50 backdrop-blur-sm">
            <div className="flex gap-4 flex items-center justify-center">
                <img src={Logo} alt="IncidentHub Logo" className="h-12 w-12" />
                <span className="font-medium text-lg text-transparent bg-gradient-to-r from-neutral-200 to-neutral-300 bg-clip-text">IncidentHub</span>
            </div>
            <div className="flex gap-8 text-base">
                <Link to="/features" className=" hover:text-neutral-300 transition-all duration-300">Product</Link>
                <Link to="/pricing" className=" hover:text-neutral-300 transition-all duration-300">Dashboard</Link>
                <Link to="/contact" className=" hover:text-neutral-300 transition-all duration-300">Contact</Link>
            </div>
            <div className="flex gap-4 text-base">
                <Link to="/login" className="font-base hover:text-neutral-300 px-8 py-1 bg-black/40 hover:bg-black/50 rounded-xl border-[1px] border-white/50 transition-all duration-300">Login</Link>
                <Link to="/app" className="font-base hover:text-black text-black/90 px-8 py-1 bg-white/90 hover:bg-white/100 rounded-xl border-[1px] border-white/50 transition-all duration-300">Open App</Link>
            </div>  
        </div>

    );
}