import React from "react";

// WorkCard now accepts `tags` and `activeFilter` to handle filtering
const WorkCard = ({ img, name, description, tags = [], onClick, activeFilter }) => {
  // If a filter is active and this card doesn't have the tag, hide it
  const isVisible =
    !activeFilter || tags.includes(activeFilter);

  if (!isVisible) return null;

  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 cursor-pointer link"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "600px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        />
      </div>
      <h1 className="mt-5 text-3xl font-medium">
        {name || "Project Name"}
      </h1>
      <h2 className="text-xl opacity-50">
        {description || "Description"}
      </h2>
      {tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              // className="bg-gray-200 dark:bg-gray-700 text-sm px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkCard;