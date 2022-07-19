import { useContext } from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import TypographSingle from "../../components/ux-single/ux-single";
import { PostsContext } from "../../contexts/posts";

const TypographPages = () => {
  const { filteredPosts } = useContext(PostsContext);

  return (
    <>
      <Header />
      {filteredPosts?.map((type) => (
        <TypographSingle type={type} key={type.id} />
      ))}
      <Footer />
    </>
  );
};

export default TypographPages;
