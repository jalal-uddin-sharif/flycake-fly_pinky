import React from 'react';

const CakeType = () => {
    return (
        <div className="">
        <h2 className="my-4 text-lg">Cake Type</h2>
        <div className="space-y-2">
          <label className="flex gap-2 cursor-pointer items-center group">
            <input type="checkbox" className="peer sr-only" />
            <span className="flex h-5 w-5 items-center justify-center rounded border border-[#8f6f76] bg-white text-white peer-checked:border-primary  peer-checked:bg-primary peer-checked:[&>svg]:opacity-100 peer-focus-visible:ring-2 peer-focus-visible:ring-primary/30">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="h-3.5 w-3.5 opacity-0"
              >
                <path
                  d="M3.5 8.2 6.5 11 12.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-lg  group-hover:text-primary transition-all duration-150">
              Layer Cakes
            </span>
          </label>
          <label className="flex gap-2 cursor-pointer items-center group">
            <input type="checkbox" className="peer sr-only" />
            <span className="flex h-5 w-5 items-center justify-center rounded border border-[#8f6f76] bg-white text-white peer-checked:border-primary  peer-checked:bg-primary peer-checked:[&>svg]:opacity-100 peer-focus-visible:ring-2 peer-focus-visible:ring-primary/30">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="h-3.5 w-3.5 opacity-0"
              >
                <path
                  d="M3.5 8.2 6.5 11 12.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-lg  group-hover:text-primary transition-all duration-150">
              Cheesecakes
            </span>
          </label>
          <label className="flex gap-2 cursor-pointer items-center group">
            <input type="checkbox" className="peer sr-only" />
            <span className="flex h-5 w-5 items-center justify-center rounded border border-[#8f6f76] bg-white text-white peer-checked:border-primary  peer-checked:bg-primary peer-checked:[&>svg]:opacity-100 peer-focus-visible:ring-2 peer-focus-visible:ring-primary/30">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                className="h-3.5 w-3.5 opacity-0"
              >
                <path
                  d="M3.5 8.2 6.5 11 12.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-lg  group-hover:text-primary transition-all duration-150">
              Vegan Options
            </span>
          </label>
        </div>
      </div>
    );
};

export default CakeType;