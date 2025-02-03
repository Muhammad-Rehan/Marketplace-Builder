"use client"
import { Josefin_Sans, Lato } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const josefinSans = Josefin_Sans({
    subsets: ['latin-ext'],
    weight: '700'
})

const lato = Lato({
    subsets:['latin'],
    weight: '400'
})

function MyAccount() {
  return (
    <>

    <div className="w-full ">

      <div className="bg-[#F6F5FF] py-8">
        <div className="max-w-[1200px] mx-auto px-12">
          <h1 className={`text-3xl font-bold text-[#101750] mb-2 ${josefinSans.className}`}>My Account</h1>
          <p className={`text-sm text-black ${lato.className}`}>
            Home <span className="text-black">.</span> Pages <span className="text-black">.</span>{" "}
            <span className="text-[#FB2E86]">Login</span>
          </p>
        </div>
      </div>


      <div className=" mt-16 mb-16 p-8 rounded-md shadow-md w-[40%] mx-auto bg-white ">
            <h2 className="text-center text-2xl font-bold text-[#151875] mb-4">Login</h2>
            <p className="text-center text-gray-600 mb-6">
              Please login using account detail below.
            </p>

            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FB2E86]"
                />
              </div>

              <div className="mb-4 ">
                <Link href="/forgetpassword" className="text-[#FB2E86] hover:underline">
                  Forgot your password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FB2E86] text-white py-2 rounded-md hover:bg-[#F94C9B] transition-colors"
              >
                Sign In
              </button>
            </form>

            <div className="text-center mt-6 text-gray-600">
              Don’t have an Account?{' '}
              <Link href="/signup" className="text-[#FB2E86] hover:underline">
                Create account
              </Link>
            </div>
          </div>
        </div>
      
    <div className='w-[904px] h-[93px] bg-gray-500 mt-20 mb-20 mx-auto'> 
            <Image src={'/image 1174.png'} width={904} height={93} alt='logos' />
          </div>
    </>
  
  );
}

export default MyAccount;