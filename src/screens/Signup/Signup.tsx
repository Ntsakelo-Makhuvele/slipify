import { CloudArrowUpIcon, LockClosedIcon, ServerIcon,ArrowTrendingUpIcon } from '@heroicons/react/20/solid'
import { useGoogleLogin } from '@react-oauth/google';
import googleImage from '../../assets/search.png'
import Divider from '@mui/material/Divider';
import Spendless from '../../assets/spendless.png'


const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
},
{
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
},
{
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
},
]

const Signup = () => {
    const login = useGoogleLogin({
      onSuccess: tokenResponse => console.log(tokenResponse),
    });
    return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg m-auto text-center">
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Create your Slipify account
              </p>
              <p className="mt-6 text-lg/8 text-gray-700">
               free plans available. Premium plans 
              </p>
            </div>
              <button onClick={() => login()} className="bg-slate-900 mb-5 text-white block m-auto p-1 w-[70%] mt-5 rounded-md cursor-pointer"><img src={googleImage} className='h-4 w-4  inline mr-3 mb-1'/>Sign Up With Google</button>
              <Divider>Or</Divider>
              <button onClick={() => login()} className="bg-white mt-5  block m-auto p-1 w-[70%] mt-5 rounded-md cursor-pointer border border-gray-300">Continue With Email</button>
          </div>
          <img
            alt="Product screenshot"
            src={Spendless}
            width={700}
            height={200}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}

export default Signup;