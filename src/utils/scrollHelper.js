export const scrollWithOffset = (el) => {
  let yOffset;

  if (window.innerWidth < 768) {
    yOffset = -100;
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    yOffset = -130;
  } else {
    yOffset = -150;
  }

  const yPosition =
    el.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: yPosition, behavior: "smooth" });
};
