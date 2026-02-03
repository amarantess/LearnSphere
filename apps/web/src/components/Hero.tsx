import { ArrowRight, Play, Users, BookOpen, Award } from "lucide-react"

export function Hero(){
    return (
        <section className="w-full py-3 md:py-6 lg:py-12 bg-linear-to-br from-slate-50 via-white to-blue-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="flex flex-col pb-8 gap-6 items-center md:items-start text-center md:text-left border-b border-r border-slate-100">
                        <div className="inline-block rounded-full border border-slate-300 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 animate-pulse">
                            New: AI-Powered Career Paths
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900">
                            Transform your <span className="text-blue-600">career</span> with knowledge
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 max-w-150">
                            Learn from the best professionals in the market. Practical courses, real projects and globally recognized certifications.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <button className="inline-flex items-center justify-center py-4 px-12 rounded-md font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40">
                                Explore Courses <ArrowRight className="ml-2 w-4 h-4" />
                            </button>

                            <button className="inline-flex items-center justify-center py-4 px-12 rounded-md text-base border border-slate-300 hover:bg-slate-50">
                                < Play className="mr-2 w-4 h-4 text-blue-600" /> See how it works
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center md:justify-end">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                            alt="Estudants studying together"
                            className="rounded-4xl border-4 border-blue-600 object-cover aspect-video"
                        />
                    </div>
                </div>

                <div className="w-full flex flex-row items-center justify-center md:justify-start sm:gap-42 mt-6">
                    
                    <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                            <Users className="w-5 h-5"/>
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-2xl font-bold text-slate-900 leading-none">50K+</span>
                            <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">Active Learners</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                            <BookOpen className="w-5 h-5"/>
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-2xl font-bold text-slate-900 leading-none">600+</span>
                            <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">Courses</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                            <Award className="w-5 h-5"/>
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-2xl font-bold text-slate-900 leading-none">95%</span>
                            <span className="text-xs text-slate-500 font-medium uppercase tracking-wide">Satisfaction</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}