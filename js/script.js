function scrollLeft(containerId) {
    const container = document.getElementById(containerId);
    container.scrollBy({ left: -200, behavior: "smooth" });
  }
  
  function scrollRight(containerId) {
    const container = document.getElementById(containerId);
    container.scrollBy({ left: 200, behavior: "smooth" });
  }
  