import { useGoogleLogin } from '@react-oauth/google';
import googleImage from '../../assets/search.png'
import Divider from '@mui/material/Divider';

const Login = () => {
    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });
    return (
        <div className="grid items-center h-[100vh]">
            <div className="h-90 w-[50%] m-auto">
                <p className="text-slate-800 text-lg font-semibold text-center">Slipify</p>
                <p className="text-slate-800 text-2xl font-bold text-center">Welcome Back</p>
                <button onClick={() => login()} className="bg-slate-900 mb-5 text-white block m-auto p-1 w-[70%] mt-5 rounded-md cursor-pointer"><img src={googleImage} className='h-4 w-4  inline mr-3 mb-1' />Sign In With Google</button>
                <Divider>Or</Divider>
                <form action="">
                    <div className="w-[70%] m-auto">
                        <label htmlFor="price" className="block m-auto text-sm/6 font-medium text-gray-900">
                            Email Address
                        </label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                <input
                                    id="price"
                                    name="price"
                                    type="text"
                                    placeholder="John.Doe@example.com"
                                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                />
                            </div>
                        </div>
                    </div>
                      <div className="w-[70%] m-auto mt-5">
                        <label htmlFor="price" className="block m-auto text-sm/6 font-medium text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                <input
                                    id="price"
                                    name="price"
                                    type="password"
                                    placeholder="Password"
                                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                    
                                />
                            </div>
                        </div>
                    </div>
                    <button onClick={() => login()} className="bg-white mt-5  block m-auto p-1 w-[70%] mt-10 rounded-md cursor-pointer border border-gray-300">Sign In</button>
                    <a href="/signup" className='text-gray-700 block text-center m-5'>Don't have an account</a>
                </form>

            </div>
        </div>
    )
}

export default Login;