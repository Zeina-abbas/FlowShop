import Header from "./components/Header"
import Home from "./pages/Home"
import Products from "./components/Products"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Header id="products" />
      <Home />
      <Products />
      {/* <Card img="/images/heroImg.webp"
        title="lip stick"
        price={19.99}
        rating={4.5} /> */}

        <Footer/>
    </>
  )
}

export default App
