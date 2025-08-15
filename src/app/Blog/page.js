"use client";
import React, { useEffect, useState,useCallback  } from "react";
import Top from "../Utils/Top";
import Image from "next/image";
import { BlogsCount } from "../AdminDashboard/components/ShowApidatas/ShowUserAPiDatas";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; 

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [expandedBlogs, setExpandedBlogs] = useState({});
  const [loading, setLoading] = useState(true);

  // Toggle expanded state for a blog
  const toggleBlogExpand = useCallback((idx) => {
    setExpandedBlogs((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  }, []);

  // Fetch blogs from API
  const getBlogs = useCallback(async () => {
    setLoading(true);
    try {
      const { admins } = await BlogsCount();
      setBlogs(admins || []);
    } catch (error) {
      console.log(`Failed to fetch blog: ${error}`);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  // Helper for rendering blog details
  const renderBlogDetails = useCallback((blog, idx) => (
    <>
      <h1 className="font-bold text-2xl">
        <span>Title : </span>
        {blog.blogtitle}
      </h1>
      <h1 className="font-bold text-xl">
        <span>Author Name : </span>
        {blog.author}
      </h1>
      <p className="bg-white text-gray-800 p-4 rounded-lg shadow-md text-base leading-relaxed">
        {expandedBlogs[idx]
          ? blog.description
          : `${blog.description?.substring(0, 120)}...`}
        {blog.description && blog.description.length > 120 && (
          <button
            className="text-custom-blue underline mt-2"
            onClick={() => toggleBlogExpand(idx)}
          >
            {expandedBlogs[idx] ? "Show Less" : "Show More"}
          </button>
        )}
      </p>
    </>
  ), [expandedBlogs, toggleBlogExpand]);

  return (
    <div className="bg-white pb-20">
      <Top />
      {/* <div
        className="max-w-full h-auto flex justify-center items-center mt-14"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/backgrounds/banner-Facebook-Cover-copy.png')",
          backgroundSize: "100% 100vh", // Set background size to full width and full height of the viewport
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center items-center py-36">
          <div className="text-custom-blue text-2xl md:text-6xl font-bold flex justify-center items-center">
            BLOGS
          </div>
          <div className="flex m-auto py-6">
            <p className="flex w-5/6 md:w-3/6 m-auto justify-center items-center text-center text-md font-medium">
              We are providing best jobs opportunities for people who want to
              grow their skills and career in different fields of the IT
              industry. Also we provide internship for fresh graduates.
            </p>
          </div>
          <a
            href="/"
            className="text-black font-bold mt-14 text-center md:text-left text-md"
          >
            Home - <span className="text-custom-blue">Blogs</span>
          </a>
        </div>
      </div> */}

      <div
        className="max-w-full h-[350px] flex justify-center items-center mt-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url('/backgrounds/banner_Facebook Cover copy.png')",
          backgroundSize: "100% 100%",
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center items-center py-24">
          <div className="text-custom-blue text-2xl md:text-4xl flex justify-center items-center font-bebas tracking-custom">
            BLOGS
          </div>
          <div className="flex m-auto py-3">
            <p className="flex m-auto justify-center items-center text-center w-3/4">
              We are providing best jobs opportunities for people who want to
              grow their skills and career in different fields of the IT
              industry. Also we provide internship for fresh graduates.
            </p>
          </div>
          <a
            href="/"
            className="text-paraClr font-semibold text-center md:text-left mt-20 text-xs"
          >
            Home -<span className="text-custom-blue">&nbsp;Blogs</span>
          </a>
        </div>
      </div>

          {/* <Link href={`/Blog/${blogData.slug}`} key={blogData.id}> under 2nd div */}


      {/* section 2 */}
      {/* <div className="w-12/12 m-auto">
        <div className="flex justify-center items-center flex-wrap gap-7">
          {blogs.map((blogData) => (
            <div
              className="relative my-5"
              style={{ width: "350px" }}
              key={blogData._id}
            >
              <img
                src={blogData.image} // Adjust the MIME type if needed
                alt={blogData.blogtitle}
                className="h-60"
              />

              <div className="mt-8">
                <h2 className="text-3xl font-semibold mb-3">
                  {blogData.blogtitle}
                </h2>

                <div className="w-11/12">
                  <div className="flex items-center justify-between">
                    <Image
                      src={`/uploads/${blogData.image}`}
                      alt="author Img"
                      width={31}
                      height={31}
                    />
                    <p className="text-base font-bold">{blogData.author}</p>
                    <div className=" w-6 border-1 border-gray-300"></div>
                    <p className="text-sm text-pClr">
                      {blogData.datetime
                        ? // Assuming blog.datetime is a string like "2024-06-28T00:00:00.000+00:00"
                        (() => {
                          let dt = new Date(blogData.datetime); // Convert to Date object

                          // Check if dt is a valid Date object before accessing its methods
                          return dt instanceof Date
                            ? `${dt.getDate()} ${dt.toLocaleString("en-US", {
                              month: "long",
                            })} ${dt.getFullYear()}`
                            : "Invalid Date";
                        })()
                        : "No Date Available"}
                    </p>
                    <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                  </div>

                  <p className="my-5 text-pClr leading-6">
                    {expandedBlogs[blogData._id] ? (
                      blogData.description
                    ) : (
                      <>{blogData.description.substring(0, 70)}...</>
                    )}
                  </p>
                  <button
                    className="button-filled"
                    onClick={() => toggleContent(blogData._id)}
                  >
                    {expandedBlogs[blogData._id] ? "Show Less" : "Load More"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      
      {/* Blogs Section */}
      {loading ? (
        <>
            <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 gap-y-8 md:gap-x-40">
              <div>
                <Skeleton width={300} height={280} className="rounded-lg"/>
              </div>
              <div>
                <Skeleton width={150} height={25}/>
                <Skeleton width={200} height={25}/>
                <br/><br/>
                <Skeleton width={300} height={25} count={3}/>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 gap-y-8 md:gap-x-40">
              <div>
                <Skeleton width={300} height={280} className="rounded-lg"/>
              </div>
              <div>
                <Skeleton width={150} height={25}/>
                <Skeleton width={200} height={25}/>
                <br/><br/>
                <Skeleton width={300} height={25} count={3}/>
              </div>
            </div>
            </>
            
      ) : (
        blogs.map((blog, idx) => (
          <div
            key={blog._id || idx}
            className="flex flex-col md:flex-row justify-center items-center px-6 md:px-32 mt-20 gap-y-8 md:gap-x-8"
          >
            <div className="w-full md:w-[70%] h-auto">
              {blog.image ? (
                <img
                  src={blog.image}
                  alt="image"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              ) : (
                <Image
                  src="/team/team1.jpg"
                  alt="image"
                  width={400}
                  height={400}
                  className="rounded-full h-10 w-10"
                />
              )}
            </div>
            <div className="flex flex-col justify-start items-center md:items-start gap-y-4 text-center md:text-left md:w-[70%]">
              {renderBlogDetails(blog, idx)}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Page;
