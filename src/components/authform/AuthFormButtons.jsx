import Link from 'next/link';
import React from 'react';

const AuthFormButtons = () => {
    return (
        <section className="flex border-b border-outline-variant font-semibold text-on-surface-variant mb-6">
            <Link href={"#"} className="w-full cursor-pointer">
              <button className="w-full py-4 flex-1 cursor-pointer hover:text-primary transition-all duration-200">
                Login
              </button>
            </Link>
            <Link href={"#"} className="w-full cursor-pointer">
              <button className="w-full py-4 flex-1 border-b-2 border-primary transition-all duration-200">
                SignUp
              </button>
            </Link>
          </section>
    );
};

export default AuthFormButtons;