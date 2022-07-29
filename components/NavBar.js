import Link from "next/link";
export default function NavBar(){
    return <nav>
          <Link href="/">
        <a style={{color:"red", margin: 10}}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: "blue",  margin: 10 }}>
          About
        </a>
      </Link>
    </nav>
}