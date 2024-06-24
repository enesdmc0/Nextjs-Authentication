import { LoginForm } from './form';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="flex flex-col p-4 w-full md:w-[400px] ">
            <div className="text-center">
                <h1 className="text-3xl text-white font-bold">Login</h1>
            </div>
            <div className="mt-6">
                <LoginForm />
            </div>
            <div className="mt-4 text-center text-sm text-white">
                Don&apos;t have an account?{' '}
                <Link className="underline" href="/signup">
                    Sign up
                </Link>
            </div>
        </div>
    );
}
