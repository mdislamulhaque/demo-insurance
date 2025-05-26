// Sidebar submenu toggle (reusable)
// document.querySelectorAll('.submenu-toggle').forEach(button => {
//   button.addEventListener('click', () => {
//     const submenu = button.nextElementSibling;
//     const arrow = button.querySelector('.arrow-icon');

//     submenu.classList.toggle('hidden');
//     arrow.classList.toggle('rotate-90');
//   });
// });

const profileImage = document.getElementById('profile-image');
const profileModal = document.getElementById('profileModal');
const closeModal = document.getElementById('closeModal');
const logoutBtn = document.getElementById('logoutBtn');

// Show modal when profile image is clicked
profileImage.addEventListener('click', () => {
  profileModal.classList.remove('hidden');
  
});

// Close modal
closeModal.addEventListener('click', () => {
  profileModal.classList.add('hidden');
});

// Logout button action
logoutBtn.addEventListener('click', () => {
  // Optional: clear sessionStorage/localStorage or make API call
  window.location.href = 'index.html'; // Redirect to login or home page
});

// Mobile menu toggle
 const toggleBtn = document.getElementById("toggleSidebar");
 const collapseBtn = document.getElementById("collapseSidebar");
    const closeBtn = document.getElementById("closeSidebar");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const mainContent =document.getElementById('main-content');

      // Toggle for lg screens
  if (collapseBtn) {
    collapseBtn.addEventListener('click', function() {
      sidebar.classList.toggle('collapsed');
      mainContent.classList.toggle('md:ml-72')
      mainContent.classList.toggle('md:ml-20')

    });
  }

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