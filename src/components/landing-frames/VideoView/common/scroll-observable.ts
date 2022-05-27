const theFrames: any = {
  sticky: null,
  wrap: null
};

export function ScrollObservable() {
  // @ts-ignore
  this._observers = [];

  // using RAF as a petty debounce
  let inProgress = false;
  const handler = () => {
    if (inProgress) return;
    inProgress = true;

    window.requestAnimationFrame(() => {
      // @ts-ignore
      this._process();

      inProgress = false;
    });
  };

  theFrames.sticky = window.document.querySelector(".vid-content2641 .canvas-container");
  theFrames.wrap = document.querySelector(".vid-content2641");

  const appBody = window.document.querySelector(".appBody");
  if (appBody && appBody.getBoundingClientRect().height < 2500) {
    appBody.addEventListener("scroll", handler);
  } else {
    window.addEventListener("scroll", handler);
  }
}

ScrollObservable.prototype._process = function () {
  // const viewportHeight = document.documentElement.clientHeight;
  // const documentHeight = document.body.clientHeight;
  // const scrolled = Math.max(
  //     window.scrollY,
  //     window.pageYOffset,
  //     document.documentElement.scrollTop,
  //     document.body.scrollTop
  // );

  // const scrolledPercentage = Math.round((100 * (100 * scrolled)) / (documentHeight - viewportHeight)) / 100;

  const wrap = theFrames.wrap;

  if (!wrap) {
    return;
  }

  const distanceFromTop = window.scrollY + wrap.getBoundingClientRect().top;
  const rawPercentScrolled =
    (window.scrollY - distanceFromTop) / (wrap.scrollHeight - window.innerHeight);
  // console.log(rawPercentScrolled);
  const scrolledPercentage = 100 * Math.min(Math.max(rawPercentScrolled * 1.5, 0), 1);

  // if (theFrames.sticky && scrolledPercentage > 0 && scrolledPercentage < 100) {
  //   theFrames.sticky.style.position = "fixed";
  // } else {
  //   theFrames.sticky.style.position = "sticky";
  // }
  // theFrames.sticky.style.marginTop = `${wrap.scrollHeight * scrolledPercentage / 100}px`
  //   console.log(scrolledPercentage); ::-:
  this.publish(scrolledPercentage);
};

ScrollObservable.prototype.subscribe = function (observer: any) {
  this._observers.push(observer);
};

ScrollObservable.prototype.publish = function (value: any) {
  this._observers.forEach((observer: any) => {
    observer.next(value);
  });
};
