import { ScrollRestoration } from "react-router-dom";
import Header from "../header"
import Footer from "../footer"
function Body(props: {children: JSX.Element | JSX.Element[]}) {
  return (
    <div className="body">
      <ScrollRestoration />
      <Header />
        {props.children}
      <Footer />
    </div>
  );
}

export default Body;
