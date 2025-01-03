// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle scroll events
  function handleScroll() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
      if (isInViewport(element)) {
        element.classList.add('fade-in');
      }
    });
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Trigger scroll event on page load to check for elements already in view
  window.addEventListener('load', handleScroll);
  // Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification();
  }).catch((err) => {
    console.error("Failed to copy text: ", err);
  });
}

// Function to show the notification
function showNotification() {
  const notification = document.getElementById("notification");
  notification.classList.add("show");

  // Hide the notification after 2 seconds
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}

// Add click event listeners to social media links
document.addEventListener("DOMContentLoaded", () => {
  const discordLink = document.querySelector(".creator-link[href*='discord']");
  if (discordLink) {
    discordLink.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent the link from navigating
      copyToClipboard("Flux#1234"); // Replace with the actual Discord username
    });
  }
});