import Link from 'next/link';
import React from 'react';

const AuthFormButtons = ({pathName}) => {
    return (
        <section className="flex border-b border-outline-variant font-semibold text-on-surface-variant mb-6">
            <Link href={"/signin"} className="w-full">
              <button className={`w-full py-4 flex-1   hover:text-primary transition-all duration-200 ${pathName === "signin" ? "border-b-2 border-primary text-primary cursor-default":"cursor-pointer"}`}>
                Login
              </button>
            </Link>
            <Link href={"/signup"} className="w-full">
              <button className={`w-full py-4 cursor-pointer flex-1 hover:text-primary transition-all duration-200 ${pathName === "signup" && "border-b-2 border-primary text-primary"}`}>
                SignUp
              </button>
            </Link>
          </section>
    );
};

export default AuthFormButtons;