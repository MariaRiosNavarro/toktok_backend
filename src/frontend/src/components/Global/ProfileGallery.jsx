import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProfileGallery = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        // const fetchPromises = postArr.map(async (postId) => {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/gallery?id=${userId}`,
          {
            method: "GET",
            credentials: "include",
          }
        );
        if (response.ok) {
          const data = await response.json();
          setPosts(data.posts);
        }

        // });

        // const fetchedPosts = await Promise.all(fetchPromises);
        // setPosts(fetchedPosts);
        // console.log("Posts=>", posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    if (userId) {
      getPosts();
    }
  }, []);

  if (!posts || posts.length === 0) {
    return <h1>no posts available</h1>;
  }

  return (
    <>
      <section className="grid grid-cols-3 gap-[4px] mt-4">
        {posts?.map((post, key) => (
          <Link key={key} to={"/post/" + post?._id}>
            <img
              className="h-[124px] rounded-lg object-cover"
              src={post?.img}
              alt={`Post ${key}`}
            />
          </Link>
        ))}
      </section>
    </>
  );
};

export default ProfileGallery;
