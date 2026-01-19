import { Search, Menu } from "lucide-react"
import { Logo } from "./Logo"

export function Navbar(){
    return (
        <nav className="w-full h-20 bg-white/80 text-black flex items-center justify-between px-10 border-b border-slate-100 ">
            <Logo />

            <button className="md:hidden p-2 text-slate-600">
                <Menu className="w-6 h-6" />
            </button>

            <div className="hidden md:flex gap-10">
                <a href="#" className="p-2 rounded-lg font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">Explore</a>
                <a href="#" className="p-2 rounded-lg font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">Categories</a>
                <a href="#" className="p-2 rounded-lg font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">For Business</a>
                <a href="#" className="p-2 rounded-lg font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">About</a>
            </div>

            <div className="relative w-65 hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input type="text" 
                className="w-full pl-10 pr-4 py-2 rounded-full border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400" 
                placeholder="Search courses..." />
            </div>
            
            <div className="hidden md:flex gap-4">
                <button className="p-2 rounded-lg font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">Sign In</button>
                <button className="p-2 rounded-lg font-bold text-white bg-blue-600 hover:bg-blue-700">Get Started</button>
            </div>
        </nav>
    )
}