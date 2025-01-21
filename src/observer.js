document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
  
    // Wähle das Element aus, das beobachtet werden soll
    const africaMap = document.querySelector(".africa-map");
    if (africaMap) {
      observer.observe(africaMap);
    }

    console.log(observer)
  });
  