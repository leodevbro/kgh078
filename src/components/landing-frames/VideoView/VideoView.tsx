import React, { useCallback, useEffect, useRef } from "react";
// import { useTranslation } from "react-i18next";
// import ReactDOM from "react-dom";
// import ReactDOM from 'react-dom';

import { cla } from "src/App";
import { hh33 } from "./video-server-frames/assets/main";
import style from "./VideoView.module.scss";



export const VideoView: React.FC<{
  className?: string;
  videoUrl: string; // DEPRICATED
  uniC?: string;
}> = ({ className, videoUrl, uniC }) => {
  // const { t } = useTranslation();

  // const isPlayingRef = useRef(false);

  const inervalRef = useRef<NodeJS.Timeout | null | undefined>(null);

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
    inervalRef.current = setInterval(() => {
      scrollVideo();
      // if (!isPlayingRef.current) {
      //   isPlayingRef.current = true;
      //   video.play();
      // }
    }, 41.6);

    /* The encoding is super important here to enable frame-by-frame scrubbing. */

    // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
    // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4
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
    setTimeout(() => {
      hh33();
    }, 500);
  }, [registerVideo]);

  return (
    <div className={cla(style.ground, className)}>
      <div className={style.mainBox}>
        <div className={cla(style.scrollVideoBox, uniC)}>
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

            <div className="vid-content" id="content">
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
              <section className="canvas-container" id="canvas-container">
                <input
                  name="frames-url"
                  type="hidden"
                  // value="./videos/frames/image{{id}}.jpg"
                  value="https://i.ibb.co/{{seu}}/image{{id}}.jpg"
                  // value="https://i.ibb.co/{{se}}"
                  data-frame-start="1"
                  data-frame-end="288"
                  // data-frame-end="11"
                  data-frame-id-padding="3"
                />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
