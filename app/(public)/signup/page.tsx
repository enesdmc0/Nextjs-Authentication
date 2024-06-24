import Link from 'next/link';
import { SignupForm } from '@/app/(public)/signup/form';
const Page = () => {
    return (
        <div className="flex flex-col p-4 lg:w-1/3">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-white">Create an account</h1>
             
            </div>
            <div className="mt-6">
                <SignupForm/>
            </div>
            <div className="mt-6 text-center text-sm text-white">
                Already have an account?{' '}
                <Link className="underline" href="/login">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Page;
