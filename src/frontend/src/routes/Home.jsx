import { useEffect, useState } from 'react';
import NavBarBottom from '../components/Global/NavBarBottom';
import PostDetail from '../components/Global/PostDetail';
import NavBarTop from '../components/Global/NavBarTop';
import TockTockLogoSvg from '../components/SVG/TockTockLogoSvg';
import HearthSvg from '../components/SVG/HearthSvg';
import LoadingSpin from '../components/SVG/LoadingSpin';

const Home = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + '/api/posts/',
        {
          method: 'GET',

          credentials: 'include',
        }
      );
      if (response.ok) {
        const data = await response.json();

        //   const sortedPosts = [...data].sort(
        //     (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        //   );
        //   setPosts(sortedPosts);

        console.log('NEUER DATA RESPONSE VOM BACKEND: ', data);
      }
    }
    getPosts();
  }, []);

  // if (!posts)
  //   return (
  //     <div className='h-screen flex justify-center items-center'>
  //       <LoadingSpin />
  //     </div>
  //   );
  return (
    <>
      <NavBarTop
        leftSvgComponent={<TockTockLogoSvg />}
        leftLink='/'
        leftText='Tok Tok'
        rightSvgComponent={<HearthSvg selected={false} />}
        rightLink='/'
      />
      <main className='p-6 pb-12'>
        <section>
          {posts?.map((post, key) => {
            return <PostDetail post={post} key={key} />;
          })}
        </section>
      </main>
      <NavBarBottom
        item={{ home: true, search: false, profile: false, add: false }}
      />
    </>
  );
};

export default Home;
