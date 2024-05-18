document.addEventListener("DOMContentLoaded", function() {
    const counterDisplay = document.getElementById("counterDisplay");
    const counterInput = document.getElementById("counterInput");
    const incrementor = document.getElementById("incrementor");
    const decrementor = document.getElementById("decrementor");
    const resetter = document.getElementById("resetter");
    const steps = document.getElementById("steps");

    let count = 0;

    // Function to update counter display
    function updateCounterDisplay() {
        counterDisplay.innerText = count;
        counterInput.value = count;
    }

    // Function to increment counter
    function incrementCounter() {
        count += parseInt(steps.value);
        updateCounterDisplay();
    }

    // Function to decrement counter
    function decrementCounter() {
        count -= parseInt(steps.value);
        if (count < 0) {
            count = 0;
        }
        updateCounterDisplay();
    }

    // Function to reset counter
    function resetCounter() {
        count = 0;
        updateCounterDisplay();
    }

    // Event listeners
    incrementor.addEventListener("click", incrementCounter);
    decrementor.addEventListener("click", decrementCounter);
    resetter.addEventListener("click", resetCounter);

    // Initial counter display update
    updateCounterDisplay();
});

// next

document.addEventListener("DOMContentLoaded", function() {
    const toggleSidebar = document.getElementById("toggleSidebar");
    const sidebar = document.getElementById("sidebar");
    const appBody = document.getElementById("appBody");

    // Function to toggle sidebar
    function toggleSidebarMenu() {
        sidebar.classList.toggle("active");
    }

    // Event listener for toggle button
    toggleSidebar.addEventListener("click", toggleSidebarMenu);

    // Function to close sidebar when clicking anywhere on the page
    function closeSidebarMenu(event) {
        if (!sidebar.contains(event.target) && event.target !== toggleSidebar) {
            sidebar.classList.remove("active");
        }
    }

    // Event listener to close sidebar when clicking anywhere on the page
    appBody.addEventListener("click", closeSidebarMenu);
});










// استماع لحدث keydown على الوثيقة
document.addEventListener('keydown', function(event) {
    // التأكد من أن المفتاح المضغوط هو Enter (القيمة 13 تمثل مفتاح Enter)
    if (event.keyCode === 13) {
      // إيجاد الزر وتشغيل النقر عليه
      var incrementorButton = document.getElementById('incrementor');
      if (incrementorButton) {
        incrementorButton.click();
      }
    }
  });
  


  
  document.addEventListener('keyup', function(event) {
    // التأكد من أن المفتاح المضغوط هو Delete (القيمة 46 تمثل مفتاح Delete)
    if (event.key === "Delete") {
      // إيجاد الزر وتشغيل النقر عليه
      var decrementorButton = document.getElementById('decrementor');
      if (decrementorButton) {
        decrementorButton.click();
      }
    }
  });
  