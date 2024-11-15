import Banner from "./components/Banner/page";
import Category from "./components/Category/page";
import ImageSlider from "./components/ImageSlider/page";
import Navbar from "./components/Navbar/page"; 
import ProductCart from "./components/ProductCart/page";
import ProductCartTwo from "./components/ProductCartTwo/page";
import JemelReview from "./components/ReviewPage/page";
import ProductPage from "./pages/ProductPage/page";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <TopNavbar /> */}
      <Navbar />
      <Banner />

      <Category />
      <ProductCart />
      <ImageSlider />
      
      <ProductCartTwo />
      <ProductPage />
      <JemelReview />
    </>
  );
}

export default MyApp;
