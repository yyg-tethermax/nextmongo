"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import MoviesSkeleton from "../../components/loading/MoviesSkeleton";
import Link from "next/link";
import Image from "next/image";
import styles from "@/scss/movies/Movies.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const fetchPage = async (pageParam: number) => {
  const response = await fetch(`/api/movies?page=${pageParam}`);
  return response.json();
};

const Movies = () => {
  // use infinite query
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["movies"],
    queryFn: ({ pageParam }) => fetchPage(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length > 0 ? pages.length + 1 : undefined;
    },
  });

  if (isLoading) return <MoviesSkeleton />;

  return (
    <>
      <ul className={cx("MoviesList")}>
        {data?.pages.map((page) =>
          page.map((movie: any) => (
            <li className={cx("MovieItem")} key={movie._id}>
              <Link className={cx("MovieLink")} href={`/movies/${movie._id}`}>
                <div className={cx("ImageWrapper")}>
                  {movie.poster ? (
                    <Image
                      className={cx("MoviePoster")}
                      src={movie.poster}
                      alt={movie.title}
                      width={100}
                      height={100}
                    />
                  ) : (
                    <Image
                      className={cx("MoviePoster")}
                      src="https://picsum.photos/300/200"
                      alt={movie.title}
                      width={100}
                      height={100}
                    />
                  )}
                  <p className={cx("MovieTitle")}>{movie.title}</p>
                </div>
                <p className={cx("FullPlot")}>{movie.fullplot}</p>
              </Link>
            </li>
          ))
        )}
      </ul>
      {hasNextPage && <button onClick={() => fetchNextPage()}>More</button>}
    </>
  );
};

export default Movies;
