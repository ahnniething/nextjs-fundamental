import Head from "next/head";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import  Link  from 'next/link';
import { useRouter } from 'next/router';

export default function Home({results}) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(
    `/movies/${title}/${id}`,
    );
  };
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
          <div onClick={()=>onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>
            <Link
              href={`/movies/${movie.original_title}/${movie.id}`}
            >
              <a>{movie.original_title}</a>
            </Link>
          </h4>
        </div>

      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie{
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

//서버에서 실행되는 함수
//클라이언트에서 접근 불가한 소스이므로 여기에 API key를 숨길 수도 있다.
//직접호출하지 않아도 알아서 실행됨
//API가 리턴되기 전까지 화면에 아무것도 안 보일 것
export async function getServerSideProps() {
  //`/api/movies`는 프론트엔드에서만 작동하는 주소임
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: { results }
  };
}
