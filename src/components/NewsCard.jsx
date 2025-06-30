import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { format } from "date-fns";
import { FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news;

  const formattedDate = format(new Date(author.published_date), "yyyy/MM/dd");

  return (
    <div className="bg-white shadow-md rounded-xl p-5 mb-6 ">
      {/* Author Section */}
      <div className="flex items-center justify-between mb-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold">{author.name}</h3>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="text-right">
          <button className="btn btn-ghost btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M5 13l4 4L19 7" />
            </svg>
          </button>
          <FaRegBookmark></FaRegBookmark>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-3">{title}</h2>

      {/* Thumbnail Image */}
      <div className="mb-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full rounded-lg object-cover"
        />
      </div>

      {/* Details */}
      <p className="text-gray-700 mb-3">
        {details.length > 200 ? details.slice(0, 250) + "..." : details}
      </p>

      {/* Read More */}
      <button className="text-orange-500 font-semibold hover:underline">
        Read More
      </button>

      {/* Footer with rating and views */}
      <div className="flex items-center justify-between mt-4 border-t pt-3 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <FaStar className="text-orange-400" />
          <span>{rating.number}</span>
          <span className="ml-2 capitalize bg-gray-200 text-gray-700 rounded px-2 py-0.5 text-xs">
            {rating.badge}
          </span>
        </div>
        <div className="flex items-center gap-1">
            
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
