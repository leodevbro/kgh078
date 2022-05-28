/*

Source material of scroll video playback:
            
https://www.ghosh.dev/posts/playing-with-video-scrubbing-animations-on-the-web/#1-video-current-time-demo

https://video-scrub.playground.ghosh.dev/

https://github.com/abhishekcghosh/experiment-video-scrub

*/

import React, { useCallback, useEffect, useMemo, useRef } from "react";
// import { useTranslation } from "react-i18next";
// import ReactDOM from "react-dom";
// import ReactDOM from 'react-dom';

import { cla } from "src/App";
import { loadFramesOfTheVideo } from "./video-server-frames/assets/main";
import style from "./VideoView.module.scss";

// const generateRandomClass = () => {
//   const randomString = Math.random().toString(36).substring(2, 7); // gyjvo, xd9st
//   const theClass = style[randomString];
//   return theClass;
// };

export const VideoView: React.FC<{
  className?: string;
  generalUrlOfImages?: string; // "./videos/frames/image{{id}}.jpg" or "https://i.ibb.co/asgh/image{{id}}.jpg"
  urlArray?: string[];
  frameCount: number;
  scrollingBox: (Window & typeof globalThis) | HTMLDivElement; // window or div
}> = ({ className, generalUrlOfImages, urlArray, frameCount, scrollingBox }) => {
  // const randomClassRef = useRef(generateRandomClass());
  // const { t } = useTranslation();

  // const isPlayingRef = useRef(false);

  const groundRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const parentOfStickyRef = useRef<HTMLDivElement>(null);
  const generalUrlInputRef = useRef<HTMLInputElement>(null);

  // console.log(groundRef.current);

  const intervalRef = useRef<NodeJS.Timeout | null | undefined>(null);

  const registerVideo = useCallback((queryOfWrap: string, queryOfVideo: string) => {
    const wrap = document.querySelector(queryOfWrap);
    const video: HTMLVideoElement | null = document.querySelector(queryOfVideo);
    // console.log(video);
    if (!video || !wrap) {
      return;
    }

    // video.addEventListener('ended', (event) => {
    //   video.currentTime = 0;
    //   isPlayingRef.current = false;
    // });
    // video.currentTime = video.duration;

    // 0, 2.5, 5.7, 9, 12.4

    // 41.6

    // video.addEventListener("timeupdate", function () {
    //   if (video.currentTime > 2.5) {
    //     video.pause();
    //   }
    // });

    // for simple mp4 video (may be slow) - not working right now
    const scrollVideo = () => {
      if (video.duration) {
        // console.log(window.scrollY);
        const distanceFromTop = window.scrollY + wrap.getBoundingClientRect().top;
        const rawPercentScrolled =
          (window.scrollY - distanceFromTop) / (wrap.scrollHeight - window.innerHeight);
        // console.log(rawPercentScrolled);
        const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
        // console.log("-", percentScrolled);

        video.currentTime = video.duration * percentScrolled;

        // console.log(percentScrolled);
        // if (percentScrolled > 0 && percentScrolled < 1) {
        //   if (!isPlayingRef.current) {
        //     isPlayingRef.current = true;
        //     video.play();
        //   }
        // }

        // video.play();
        // setTimeout(() => {
        //   video.pause();
        // }, 1000);
      }

      // requestAnimationFrame(scrollVideo);
    };
    // requestAnimationFrame(scrollVideo);

    // window.addEventListener("scroll", scrollVideo);
    // window.document.querySelector(".appBody")?.addEventListener("scroll", scrollVideo);
    intervalRef.current = setInterval(() => {
      scrollVideo();
      // if (!isPlayingRef.current) {
      //   isPlayingRef.current = true;
      //   video.play();
      // }
    }, 41.6);
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     registerVideo(`.${uniC}`, `.${uniC} .${style.myVideo}`);
  //   }, 1000);

  //   return () => {
  //     if (inervalRef.current) {
  //       clearInterval(inervalRef.current);
  //     }
  //   };
  // }, [registerVideo, uniC]);

  useEffect(() => {
    console.log(typeof registerVideo); // just nothing, can be deleted
  }, [registerVideo]);

  useEffect(() => {
    setTimeout(() => {
      if (!parentOfStickyRef.current || !stickyRef.current || !generalUrlInputRef.current) {
        console.log(
          "one of them is falsy: parentOfStickyRef.current, stickyRef.current, generalUrlInputRef.current",
        );
        return;
      }

      loadFramesOfTheVideo({
        stickyDiv: stickyRef.current,
        parentOfSticky: parentOfStickyRef.current,
        scrollingBox: scrollingBox,
        inputOfGeneralUrlOfFrames: generalUrlInputRef.current,
        urlArray: urlArray,
        classOfCanvas: style.canvas,
      });
    }, 500);
  }, [scrollingBox, urlArray]);

  const numPaddingOfFrameId = useMemo(() => {
    if (frameCount <= 999) {
      return 3;
    } else if (frameCount <= 9999) {
      return 4;
    } else if (frameCount <= 99999) {
      return 5;
    } else {
      return 7;
    }
  }, [frameCount]);

  const inputVal = useMemo(() => {
    let val = "";

    if (urlArray && urlArray[0]) {
      val = urlArray[0];
    } else if (generalUrlOfImages) {
      val = generalUrlOfImages;
    }

    return val;
  }, [generalUrlOfImages, urlArray]);

  return (
    <div ref={groundRef} className={cla(style.ground, className)}>
      <div className={style.mainBox}>
        <div className={cla(style.scrollVideoBox)}>
          <div className={style.content}>
            {/* <video className={style.myVideo} width="600" muted preload={"auto"}>
              <source
                // src="https://drive.google.com/u/0/uc?id=18Pcx6EvQd_cJGxuBpL0V8XaaUqIn44G0&export=download#.mp4"
                // src="https://drive.google.com/u/0/uc?id=1kXlaI09ofjGAikk_q8epzHdwzB15-VoC&export=download#.mp4"
                // src="https://drive.google.com/u/0/uc?id=1vBj1juYBYObYSoZWT2LQYu2CbWtI0Okz&export=download#.mp4"
                // src="https://drive.google.com/u/0/uc?id=1SxiACf_-QlX_86MwSjy-Gs0c9IhaBCDJ&export=download#.mp4"

                // src="https://drive.google.com/u/0/uc?id=1a7u7Sm3qNrhw9sNDYEy80wCgxLMh709_&export=download#.mp4"

                // src="https://drive.google.com/u/0/uc?id=1oi5Xrgxc2j7dKMzK2_4G-BT3nz0tpUet&export=download#.mp4"
                src={videoUrl}
                type="video/mp4"
              />
              <p>Your user agent does not support the HTML5 Video element.</p>
            </video> */}

            {/* 

            Source material of scroll video playback:

            https://www.ghosh.dev/posts/playing-with-video-scrubbing-animations-on-the-web/#1-video-current-time-demo

            https://video-scrub.playground.ghosh.dev/

            https://github.com/abhishekcghosh/experiment-video-scrub
            
            */}

            <div ref={parentOfStickyRef} className={style.parentOfSticky}>
              {/* <p>
                <a href="../">back</a>
              </p>
              <h1>Video Scrubbing</h1>
              <h2>
                <code>video-server-frames</code>
              </h2>
              <section>
                <pre id="comments"></pre>
              </section> */}
              <section ref={stickyRef} className={style.theSticky}>
                <input
                  ref={generalUrlInputRef}
                  name="frames-url"
                  type="hidden"
                  // value="./videos/frames/image{{id}}.jpg"
                  value={inputVal}
                  // value="https://i.ibb.co/{{se}}"
                  data-frame-start={"1"}
                  // data-frame-end="284"
                  data-frame-end={frameCount - 1}
                  data-frame-id-padding={String(numPaddingOfFrameId)}
                />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
