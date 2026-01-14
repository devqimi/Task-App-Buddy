import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import React from 'react';
import { Link } from '@inertiajs/react';

// Auth Layout Component
export default function AuthSimpleLayout({ children, title, description }: { 
    children: React.ReactNode; 
    title?: string; 
    description?: string;
}) {
    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-400 via-indigo-300 to-purple-400 p-6">
            
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 -left-40 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Content Container */}
            <div className="relative w-full max-w-md">
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8">
                    <div className="flex flex-col gap-8">
                        
                        {/* Logo Section */}
                        <div className="flex flex-col items-center gap-4">
                            
                            <Link href={home()}>
                                <button className="flex flex-col items-center gap-2 font-medium group">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                        <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-lg">
                                            <AppLogoIcon className="w-8 h-8 text-white" />
                                        </div>
                                    </div>
                                </button>
                            </Link>

                            <div className="space-y-2 text-center">
                                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent">
                                    {title}
                                </h1>
                                <p className="text-sm text-slate-600">
                                    {description}
                                </p>
                            </div>
                        </div>

                        {/* Form Content */}
                        {children}
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="absolute -z-10 -bottom-4 -right-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
            </div>
        </div>
    );
}

// Demo Login Form (for demonstration purposes)
// function AuthDemo() {
//     const [view, setView] = React.useState<'login' | 'register'>('login');
//     const [email, setEmail] = React.useState('');
//     const [password, setPassword] = React.useState('');
//     const [name, setName] = React.useState('');
//     const [confirmPassword, setConfirmPassword] = React.useState('');

//     const handleSubmit = () => {
//         console.log('Form submitted');
//     };

//     return (
//         <AuthSimpleLayout
//             title={view === 'login' ? 'Welcome Back' : 'Create Account'}
//             description={
//                 view === 'login'
//                     ? 'Enter your credentials to access your account'
//                     : 'Sign up to start managing your tasks efficiently'
//             }
//         >
//             <div className="space-y-4">
//                 {view === 'register' && (
//                     <div className="space-y-2">
//                         <label className="text-sm font-medium text-slate-700">
//                             Full Name
//                         </label>
//                         <input
//                             type="text"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-800 placeholder-slate-400"
//                             placeholder="John Doe"
//                         />
//                     </div>
//                 )}

//                 <div className="space-y-2">
//                     <label className="text-sm font-medium text-slate-700">
//                         Email Address
//                     </label>
//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-800 placeholder-slate-400"
//                         placeholder="you@example.com"
//                     />
//                 </div>

//                 <div className="space-y-2">
//                     <label className="text-sm font-medium text-slate-700">
//                         Password
//                     </label>
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-800 placeholder-slate-400"
//                         placeholder="••••••••"
//                     />
//                 </div>

//                 {view === 'register' && (
//                     <div className="space-y-2">
//                         <label className="text-sm font-medium text-slate-700">
//                             Confirm Password
//                         </label>
//                         <input
//                             type="password"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white/50 backdrop-blur-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-800 placeholder-slate-400"
//                             placeholder="••••••••"
//                         />
//                     </div>
//                 )}

//                 {view === 'login' && (
//                     <div className="flex items-center justify-between text-sm">
//                         <label className="flex items-center gap-2 cursor-pointer">
//                             <input
//                                 type="checkbox"
//                                 className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20"
//                             />
//                             <span className="text-slate-600">Remember me</span>
//                         </label>
//                         <button
//                             type="button"
//                             onClick={() => console.log('Forgot password')}
//                             className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
//                         >
//                             Forgot password?
//                         </button>
//                     </div>
//                 )}

//                 <button
//                     onClick={handleSubmit}
//                     className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02]"
//                 >
//                     {view === 'login' ? 'Sign In' : 'Create Account'}
//                 </button>

//                 {/* Divider */}
//                 <div className="relative">
//                     <div className="absolute inset-0 flex items-center">
//                         <div className="w-full border-t border-slate-200"></div>
//                     </div>
//                     <div className="relative flex justify-center text-sm">
//                         <span className="px-2 bg-white text-slate-500">Or continue with</span>
//                     </div>
//                 </div>

//                 {/* Social Login Buttons */}
//                 <div className="grid grid-cols-2 gap-3">
//                     <button
//                         onClick={() => console.log('Google login')}
//                         className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
//                     >
//                         <svg className="w-5 h-5" viewBox="0 0 24 24">
//                             <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
//                             <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
//                             <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
//                             <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
//                         </svg>
//                         <span className="text-sm font-medium text-slate-700">Google</span>
//                     </button>
//                     <button
//                         onClick={() => console.log('GitHub login')}
//                         className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
//                     >
//                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                         </svg>
//                         <span className="text-sm font-medium text-slate-700">GitHub</span>
//                     </button>
//                 </div>

//                 {/* Toggle View */}
//                 <div className="text-center text-sm text-slate-600">
//                     {view === 'login' ? (
//                         <p>
//                             Don't have an account?{' '}
//                             <button
//                                 onClick={() => setView('register')}
//                                 className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
//                             >
//                                 Sign up
//                             </button>
//                         </p>
//                     ) : (
//                         <p>
//                             Already have an account?{' '}
//                             <button
//                                 onClick={() => setView('login')}
//                                 className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
//                             >
//                                 Sign in
//                             </button>
//                         </p>
//                     )}
//                 </div>
//             </div>
//         </AuthSimpleLayout>
//     );
// }