import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProfileGallery = ({ postArr }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const fetchPromises = postArr.map(async (postId) => {
          const response = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/posts/${postId}`
          );
          if (response.ok) {
            const data = await response.json();
            return data;
          }
          return null;
        });

        const fetchedPosts = await Promise.all(fetchPromises);

        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    if (postArr && postArr.length > 0) {
      getPosts();
    }
  }, []);

  if (!posts || posts.length === 0) {
    return <h1>no posts available</h1>;
  }

  return (
    <>
      <section className="grid grid-cols-3 gap-[4px] mt-4">
        {posts.map((post, key) => (
          <Link key={key} to={"/post/" + post._id}>
            <img
              className="h-[124px] rounded-lg"
              src={post.img}
              alt={`Post ${key}`}
            />
          </Link>
        ))}
      </section>
    </>
  );
};

export default ProfileGallery;
