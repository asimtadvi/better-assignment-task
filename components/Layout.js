import Footer from "./Footer";
import Header from "./Header"; // assuming you have one

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
