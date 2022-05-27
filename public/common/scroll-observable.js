function ScrollObservable() {
  this._observers = [];

  // using RAF as a petty debounce
  let inProgress = false;
  const handler = () => {
    if (inProgress) return;
    inProgress = true;

    window.requestAnimationFrame(() => {
      this._process();

      inProgress = false;
    });
  };

  window.document.querySelector(".appBody").addEventListener("scroll", handler);
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

  const wrap = document.querySelector(".vid-content");

  const distanceFromTop = window.scrollY + wrap.getBoundingClientRect().top;
  const rawPercentScrolled =
    (window.scrollY - distanceFromTop) / (wrap.scrollHeight - window.innerHeight);
  // console.log(rawPercentScrolled);
  const scrolledPercentage = 100 * Math.min(Math.max(rawPercentScrolled * 1.5, 0), 1);

  //   console.log(scrolledPercentage); ::-:
  this.publish(scrolledPercentage);
};

ScrollObservable.prototype.subscribe = function (observer) {
  this._observers.push(observer);
};

ScrollObservable.prototype.publish = function (value) {
  this._observers.forEach((observer) => {
    observer.next(value);
  });
};
