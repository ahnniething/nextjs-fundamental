import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
         <NavBar></NavBar>
      <Component {...pageProps} />
      <span> the global</span>
      <style jsx>{`
        font-size: 20px;
      `}</style>
    </div>
  );
}
