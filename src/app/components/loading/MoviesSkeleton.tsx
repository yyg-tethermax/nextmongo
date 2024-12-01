import React from "react";
import styles from "./MoviesSkeleton.module.scss";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import classNames from "classnames/bind";
import 'react-loading-skeleton/dist/skeleton.css'
const cx = classNames.bind(styles);



const MoviesSkeleton = () => {
  const totalSkeletonCount = 10;
  return (
    <>
      <ul className={cx("SkeletonList")}>
        {Array.from({ length: totalSkeletonCount }).map((_, index) => (
          <li key={index} className={cx("SkeletonItem")}>
            <div className={cx("SkeletonWrapper")}>
              <Skeleton circle={true} baseColor="#202020" highlightColor="#444" width={50} height={50} containerClassName="PosterSkeleton" />
            <Skeleton  baseColor="#202020" highlightColor="#444" width={150} />
          </div>
            <Skeleton baseColor="#202020" highlightColor="#444" count={3} containerClassName={cx("FullplotSkeleton")} />
          </li>
        ))}
      </ul>
    </>
    
  );
};

export default MoviesSkeleton;
