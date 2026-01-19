import { GraduationCap } from "lucide-react"

export function Logo(){
    return (
        <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow duration-300">
                <GraduationCap className="w-5 h-5 text-white" />
            </div>

            <span className="text-xl font-bold text-slate-900 tracking-tight">
                Learn<span className="text-blue-600">Sphere</span>
            </span>
        </a>
    )
}