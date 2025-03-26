import React from "react";

type CardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

const Card: React.FC<CardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105"
      data-aos="fade-up"
    >
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <a
          href={link}
          className="text-blue-500 mt-4 inline-block hover:underline"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default Card;
