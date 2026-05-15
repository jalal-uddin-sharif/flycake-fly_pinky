import ProductGrid from '@/components/shop/ProductGrid';
import React from 'react';

const TrendingCakes = () => {
    const trendingCakes = [
       {
      "id": 1,
      "name": "Red Velvet Dream",
      "description": "Cream cheese frosting & soft sponge gggggggggggggggggg",
      "price": "BDT 1,250",
      "priceValue": 1250,
      "rating": 4.8,
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAprV9UB7jCWSWs3ebcU9OHQkrGr5YBqJ1U4zqzlZKKztbhVkem7VEZTJmHFTJi0a2gBwANdg4UPoCg22_bYltKpsCV4r0DlCTM-vAeBmUFJE8wC6M_ZLCW6SrkOSA_liS2YAB_oKVenNE06STccS4-K_tB6uSZCG9RfwDvJPJ7UBkunsAPh1L9HWJIz4rJ-stAWDwUZh_vFzKbtji747iJ7lHsMhA4RGNxmLCTE4Ci2E4XLdmGspbiia2RqCbO56T2r34BNxQEZV8",
      "category": "Birthday"
    },
    {
      "id": 2,
      "name": "Midnight Truffle",
      "description": "Deep cocoa with gold leaf accents",
      "price": "BDT 1,800",
      "priceValue": 1800,
      "rating": 4.9,
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDa4fP8Hl_TpVIOUnlxVMITl-0CUqGyc881sX6m5MqcoRjKvBWjEBN2FjyEQYRXf-g2Pm79QzSnUNYkAFRWbsUnyxWkFQ-ZxX2e4vy2VkKxx-mBDWeot0-QflRDAODtP5eFLAVjUoNEKHhFJ61dzxC_WbwQkolrbjIzR8lhWRtof40Sbrnafo3xzPfquVG5IAYNCV4oQ_BOdsUpckhmlH3BVSG6FoTcg1zutUJ8TmaJ1j1Fhf1AstCrl3z6drSQDgm8-4Bl8YwKQaE",
      "category": "Chocolate"
    },
    {
      "id": 3,
      "name": "Zesty Blueberry",
      "description": "Creamy cheesecake with fresh ssssssssssssssssssssssssssssssssssssssssssssssssss kkkkkkkkkkkkkkkkkkkkkkkkkk",
      "price": "BDT 1,450",
      "priceValue": 1450,
      "rating": 4.7,
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAc1kR3I3Ni0GnuGKIqTYcZSWK98Z9t3nG3K5DuFUTZTJg79XwLLSN7SKqjQqYBFL_yZgM7ZPC_D-zy82vjW2HE3774pRmRV4Z690ifi4QezVkf4GQOwc-5l7orNblabEWrdie9PwXc1p53EQqmG5FAU5d179Pb3nQ5FRM_Lthjct8yCcAYFFni5nISDhO0-VoqYMCpejPD5cxEZUBK78LdsUDL5uWAAwpCU-gyl722MBV5uVOk4MCpSjlApeR_wvRYKaWaYtayXkE",
      "category": "Fruit"
    },
    {
      "id": 4,
      "name": "Party Pack",
      "description": "12 Assorted artisanal cupcakes",
      "price": "BDT 2,200",
      "priceValue": 2200,
      "rating": 4.9,
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDm-I-8KquXK-EL9uv-GS2v0kckaRutRL81yF4msqdJKktKQdOr2e_MDu0dN0L72iqSkfKUzRi8KyGoXy0FKU2w-pZF3EuvvP7RPlr-xLKHCQ30AZ1d8rmlk6PSAPQD0wma6G3VTBIABc9asM25WWKcEW87JcXacdw3hCUv0tz40ooEtp0hK3I0PEht9rAxLhfEal_nVnoVZ2TqgPnlqzvmVHQdPTMAqGbTZ9VnXSu1NamqD0lbSwKBgSTt_LufMPaDnDWB78uKKOY",
      "category": "Cupcakes"
    }
    ]
    return (
        <div className='bg-surface py-12'>
            <section className='width'>
                <div className='mb-6'>
                    <h1 className='text-heading'>Trending Now</h1>
                    <div>
                        <p className='text-on-surface-variant my-0.5'>Our most popular treats loved by everyone</p>
                    </div>
                </div>
                <ProductGrid trendingCakes={trendingCakes} col={4}/>

            </section>
        </div>
    );
};

export default TrendingCakes;