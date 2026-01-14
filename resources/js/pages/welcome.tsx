import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const canRegister = Boolean(register());
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Task App Buddy">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-400 via-orange-300 to-yellow-300">

                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
                </div>

                <div className="relative flex min-h-screen flex-col items-center p-6 lg:justify-center lg:p-8">

                    {/* Header Navigation */}
                    <header className="mb-6 w-full max-w-[335px] lg:max-w-4xl">
                        <nav className="flex items-center justify-end gap-4">
                            {auth.user ? (
                                <button className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105">
                                    Dashboard
                                </button>
                            ) : (
                                <>
                                    <Link href={login()}>
                                        <button className="inline-block rounded-lg border-2 border-blue-600/20 bg-white/80 backdrop-blur-sm px-6 py-2.5 text-sm font-medium text-blue-700 transition-all duration-300 hover:border-blue-600/40 hover:bg-white hover:shadow-md">
                                            Log in
                                        </button>
                                    </Link>
                                    {canRegister && (
                                        <Link href={register()}>
                                            <button className="inline-block rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105">
                                                Register
                                            </button>
                                        </Link>
                                    )}
                                </>
                            )}
                        </nav>
                    </header>
                    
                    <div className="flex w-full items-center justify-center lg:grow">
                        <main className="w-full max-w-[335px] text-center lg:max-w-3xl">
                            
                            {/* Icon/Logo area */}
                            <div className="mb-8 flex justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-xl opacity-50"></div>
                                    <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-6 shadow-2xl">
                                        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Main Heading and Description */}
                            <h1 className="mb-4 text-2xl font-bold lg:text-6xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent leading-tight">
                                Task App Buddy
                            </h1>
                            <p className="mb-8 text-lg text-slate-600 lg:text-xl font-medium max-w-2xl mx-auto">
                                Your intelligent companion for managing tasks efficiently. Stay organized, boost productivity, and achieve your goals with ease.
                            </p>
                            {/* Feature Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-8">
                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-blue-100">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Fast & Efficient</h3>
                                    <p className="text-sm text-slate-600">Quick task creation and management at your fingertips</p>
                                </div>

                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-indigo-100">
                                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Customizable</h3>
                                    <p className="text-sm text-slate-600">Organize tasks your way with flexible options</p>
                                </div>

                                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-purple-100">
                                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Secure & Private</h3>
                                    <p className="text-sm text-slate-600">Your data is protected with enterprise-grade security</p>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <div className="mt-8">
                                <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-blue-500/40 transition-all duration-300 hover:shadow-blue-500/60 hover:scale-105">
                                    Get Started Now
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                            </div>
                        </main>
                    </div>
                </div>

                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}