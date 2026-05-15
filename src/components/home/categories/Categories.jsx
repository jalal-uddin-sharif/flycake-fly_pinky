import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const categoriesData = [
    {
        id: 1,
        name: "Birthday",
        icon: "cake",
        slug: "birthday",
        count: 48,
        popular: true
    },
    {
        id: 2,
        name: "Wedding",
        icon: "celebration",
        slug: "wedding",
        count: 32,
        popular: true
    },
    {
        id: 3,
        name: "Cupcakes",
        icon: "bakery_dining",
        slug: "cupcakes",
        count: 24,
        popular: true
    },
    {
        id: 4,
        name: "Chocolate",
        icon: "icecream",
        slug: "chocolate",
        count: 56,
        popular: true
    },
    {
        id: 5,
        name: "Fruit",
        icon: "nutrition",
        slug: "fruit",
        count: 18,
        popular: false
    },
    {
        id: 6,
        name: "Custom",
        icon: "edit_note",
        slug: "custom",
        count: 999,
        popular: false
    },
    // {
    //     id: 7,
    //     name: "Cheesecake",
    //     icon: "cake",
    //     slug: "cheesecake",
    //     count: 22,
    //     popular: true
    // },
    // {
    //     id: 8,
    //     name: "Eggless",
    //     icon: "egg_alt",
    //     slug: "eggless",
    //     count: 26,
    //     popular: false
    // },
    // {
    //     id: 9,
    //     name: "Photo Cakes",
    //     icon: "photo_camera",
    //     slug: "photo-cakes",
    //     count: 15,
    //     popular: false
    // },
    // {
    //     id: 10,
    //     name: "Anniversary",
    //     icon: "favorite",
    //     slug: "anniversary",
    //     count: 20,
    //     popular: false
    // }
];

  return (
    <div className=" my-14">
      <section className="width">
        <div>
          <h1 className="text-heading">Explore Categories</h1>
        </div>
        <div className="flex gap-6 mt-6">
            {
              categoriesData?.map((category)=>(
                <CategoryCard key={category.id} name={`${category.name}`} icon={`${category.icon}`}/>

              ))
            }
        </div>
      </section>
    </div>
  );
};

export default Categories;
