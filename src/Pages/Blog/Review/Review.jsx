import React from "react";

const Review = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      designation: "CEO, Company A",
      image:
        "https://th.bing.com/th/id/R.5caa7b84a30626982947d161ab6c5ee4?rik=JVA2OnUd90ddgg&pid=ImgRaw&r=0",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "CTO, Company B",
      image:
        "https://th.bing.com/th/id/R.5caa7b84a30626982947d161ab6c5ee4?rik=JVA2OnUd90ddgg&pid=ImgRaw&r=0",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
    {
      id: 3,
      name: "David Johnson",
      designation: "COO, Company C",
      image:
        "https://th.bing.com/th/id/R.5caa7b84a30626982947d161ab6c5ee4?rik=JVA2OnUd90ddgg&pid=ImgRaw&r=0",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 3,
      name: "David Johnson",
      designation: "COO, Company C",
      image:
        "https://th.bing.com/th/id/R.5caa7b84a30626982947d161ab6c5ee4?rik=JVA2OnUd90ddgg&pid=ImgRaw&r=0",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <section className="bg-gray-200 h-screen flex items-center justify-center">
      <div>
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold">Our customer say's</h1>
          <p className="lg:px-64 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta odio
            consequatur eum ducimus officia, praesentium labore ad facilis quos
            modi eaque cumque doloremque. Iste ipsa animi soluta earum, hic
            cumque nihil quis voluptas accusantium iure distinctio labore error
            quisquam consequatur rem illum deserunt totam sed. Maxime ut quo ea
            consequuntur?
          </p>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-64 bg-gradient-to-br text-center items-center justify-center from-purple-400 to-pink-500 rounded-lg overflow-hidden shadow-lg mx-4"
              >
                <img
                  className="w-48 w-full object-cover rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="py-4 px-6">
                  <h2 className="text-xl font-semibold text-white">
                    {testimonial.name}
                  </h2>
                  {/* <p className="mt-2 text-gray-200">{testimonial.designation}</p> */}
                  <p className="mt-4 text-gray-100">{testimonial.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
