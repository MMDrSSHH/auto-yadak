import Link from "next/link";
import React, { Fragment } from "react";

function Breadcrumbs({ links, className }) {
  if (!Array.isArray(links)) throw new Error("links must be an array");
  return (
    <div className={`flex gap-[10px] items-center text-text-400 ${className}`}>
      {links.map((link, index) => (
        <Fragment key={index}>
          <Link
            href={link.href}
            className={`text-[14px] font-medium ${
              index === links.length - 1 ? "text-primary-700" : ""
            }`}
          >
            {link.label}
          </Link>
          {index !== links.length - 1 && (
            <span className="text-[16px] font-normal">/</span>
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default Breadcrumbs;
