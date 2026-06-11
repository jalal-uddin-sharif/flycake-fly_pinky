import Image from 'next/image';
import React from 'react';

const AuthFromBanner = () => {
    return (
        <section>
          <div className="w-full h-40 relative">
            <Image
              fill
              alt="banner"
              src="/images/auth-banner.png"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-white  to-transparent" />
          </div>
        </section>
    );
};

export default AuthFromBanner;