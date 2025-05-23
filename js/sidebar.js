// Sidebar submenu toggle (reusable)
// document.querySelectorAll('.submenu-toggle').forEach(button => {
//   button.addEventListener('click', () => {
//     const submenu = button.nextElementSibling;
//     const arrow = button.querySelector('.arrow-icon');

//     submenu.classList.toggle('hidden');
//     arrow.classList.toggle('rotate-90');
//   });
// });

// Mobile menu toggle
 const toggleBtn = document.getElementById("toggleSidebar");
    const closeBtn = document.getElementById("closeSidebar");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    function openSidebar() {
      sidebar.classList.remove("-translate-x-full");
      overlay.classList.remove("hidden");
    }

    function closeSidebar() {
      sidebar.classList.add("-translate-x-full");
      overlay.classList.add("hidden");
    }

    toggleBtn.addEventListener("click", openSidebar);
    closeBtn.addEventListener("click", closeSidebar);
    overlay.addEventListener("click", closeSidebar);

    // Optional: Close sidebar on ESC key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeSidebar();
      }
    });

    
// Sidebar এর সব লিঙ্ক নির্বাচন করো
const menuLinks = sidebar.querySelectorAll("a");

// প্রতিটি মেনু আইটেমে ক্লিক ইভেন্ট যুক্ত করো
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    // শুধুমাত্র ছোট স্ক্রিনে hide করবো
    if (window.innerWidth < 768) {
      closeSidebar();
    }
  });
});

document.querySelectorAll('.submenu-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const submenu = button.nextElementSibling;
      const arrowIcon = button.querySelector('.arrow-icon');
      
      // Toggle submenu
      if (submenu.classList.contains('hidden')) {
        submenu.classList.remove('hidden');
        submenu.style.maxHeight = submenu.scrollHeight + 'px';
        arrowIcon.classList.add('rotate-90');
      } else {
        submenu.style.maxHeight = '0';
        // Wait for transition to complete before hiding
        setTimeout(() => {
          submenu.classList.add('hidden');
        }, 300);
        arrowIcon.classList.remove('rotate-90');
      }
    });
  });