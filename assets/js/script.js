//PAGE TRANSITION 
document.addEventListener("DOMContentLoaded", () => {
    const gridWrappers = document.querySelectorAll(".grid-wrapper");
  
    // Reset to initial state
    gridWrappers.forEach((gridWrapper) => {
      gridWrapper.classList.add("initial");
    });
  
    // Apply zoom-in effect on page load
    gridWrappers.forEach((gridWrapper, index) => {
      setTimeout(() => {
        gridWrapper.classList.remove("initial");
        gridWrapper.classList.add("zoom-in");
      }, index * 500);
    });
  
    // Handle zoom-out effect on link click
    const links = document.querySelectorAll(".transition-link");
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent immediate navigation
        const href = link.getAttribute("href"); // Get the link's target URL
  
        // Apply zoom-out effect
        gridWrappers.forEach((gridWrapper) => {
          gridWrapper.classList.remove("zoom-in");
          gridWrapper.classList.add("zoom-out");
        });
  
        // Navigate to the new page after transition
        setTimeout(() => {
          window.location.href = href;
        }, 1000); // Match transition duration (slightly longer than 1s)
      });
    });
});

//CURSOR ANIMATION

setTimeout(() => {
  new Typed('.auto-type-title', {
    strings: ["Yarlin Lynn"],
    typeSpeed: 150,
    backSpeed: 100,
    loop: false,
    showCursor: true
  });
}, 2500);

setTimeout(() => {
  new Typed('.auto-type-profession', {
    strings: ["Software Engineer", "Specialize in Frontend", "Learning Backend", "Aspiring Fullstack Developer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
    showCursor: false
  });
}, 3000);

// setTimeout(() => {
//   new Typed('.auto-type-projectText', {
//     strings: ["View a few projects I've worked on"],
//     typeSpeed: 100,
//     backSpeed: 50,
//     backDelay: 1500,
//     loop: false,
//     showCursor: false
//   });
// }, 5000);

setTimeout(() => {
  new Typed('.auto-type-description', {
    strings: ["I’m a software engineer specializing in frontend development, focused on creating clean, functional, and user-friendly websites that bring ideas to life. As I continue learning backend technologies to grow into a fullstack developer, I’m also exploring GSAP to integrate modern, interactive animations that elevate user experiences. My goal is to provide complete web solutions as a freelance developer—designing, building, and delivering fullstack websites while connecting with clients who value professional, reliable, and creative digital experiences."],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: false,
    showCursor: false
  });
}, 2000);

setTimeout(() => {
  new Typed('.auto-type-Project-title', {
    strings: ["Projects"],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: false,
    showCursor: true
  });
}, 1000);

setTimeout(() => {
  new Typed('.auto-type-projectText', {
    strings: ["Here are a few personal projects I've worked on"],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1500,
    loop: false,
    showCursor: false
  });
}, 2000);


const keyframes = [
    { offsetDistance: "0%" },
    { offsetDistance: "26.624108%" },
    { offsetDistance: "47.8606%" },
    { offsetDistance: "76.391757%" },
    { offsetDistance: "100%" },
  ];

  // Duration of the animation in milliseconds
  const duration = 3000;

  // Reference to the SVG element
  const animatedElement = document.getElementById("ewEtQUf14pr69_to");

  // Interpolation function to calculate progress
  const lerp = (start, end, t) => start + (end - start) * t;

  // Animate the element
  const animateSVG = (startTime) => {
    const currentTime = performance.now();
    const elapsedTime = (currentTime - startTime) % duration;
    const progress = elapsedTime / duration;

    // Find the current keyframe
    const keyframeIndex = keyframes.findIndex(
      (frame, index) =>
        progress >= parseFloat(frame.offsetDistance) / 100 &&
        (index === keyframes.length - 1 ||
          progress <
            parseFloat(keyframes[index + 1].offsetDistance) / 100)
    );

    if (keyframeIndex !== -1) {
      const startFrame = keyframes[keyframeIndex];
      const endFrame =
        keyframes[keyframeIndex + 1] || keyframes[keyframeIndex];

      // Interpolate between keyframes
      const localProgress =
        (progress -
          parseFloat(startFrame.offsetDistance) / 100) /
        ((parseFloat(endFrame.offsetDistance) -
          parseFloat(startFrame.offsetDistance)) /
          100);

      const currentOffsetDistance =
        parseFloat(startFrame.offsetDistance) +
        localProgress *
          (parseFloat(endFrame.offsetDistance) -
            parseFloat(startFrame.offsetDistance));

      // Apply the offset-distance to the SVG element
      animatedElement.style.offsetDistance = `${currentOffsetDistance}%`;
    }

    // Continue the animation
    requestAnimationFrame(() => animateSVG(startTime));
  };

  // Start the animation
  const startAnimation = () => {
    const startTime = performance.now();
    requestAnimationFrame(() => animateSVG(startTime));
  };

  // Start the animation when the page loads
  window.onload = startAnimation;
  




