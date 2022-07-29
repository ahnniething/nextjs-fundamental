import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";
export default function NavBar() {
  const router = useRouter();
  return (
    // the way of adding styles to component in NextJS
    <>
    {/* 1. CSS module */}
    <nav>
      <Link href="/">
        <a
          className={`${styles.link} ${
            router.pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={[
            styles.link,
            router.pathname === "/about" ? styles.active : ""
          ].join(" ")}
        >
          About
        </a>
      </Link>

    </nav>

   {/* 2. Styles JSX */}
    <nav>
    <Link href="/">
        <a
            className={router.pathname === "/" ? "active" : ""}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
   className={router.pathname === "/about" ? "active" : ""}
        >
          About
        </a>
      </Link>
      <style jsx>{`
        a {
            margin: 10px;
           text-decoration: none;
        }
        nav {
            background-color: tomato;
        }
        .active{
            color:dodgerblue;
        }
      `}</style>

    </nav>

    </>
  );
}
