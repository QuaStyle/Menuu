function searchDishes() {
  const query = document.getElementById('search-bar').value.toLowerCase();
  const dishes = document.querySelectorAll('.menu-item');
  
  dishes.forEach(dish => {
    if (dish.textContent.toLowerCase().includes(query)) {
      dish.style.display = "block";
    } else {
      dish.style.display = "none";
    }
  });
}







function toggleExtras() {
    const extras = document.getElementById("extras");
    const toggleIcon = document.getElementById("toggle-icon");

    // تبديل العرض
    if (extras.style.display === "none" || extras.style.display === "") {
        extras.style.display = "block";
        toggleIcon.textContent = "-"; // تغيير الأيقونة عند الفتح
    } else {
        extras.style.display = "none";
        toggleIcon.textContent = "+"; // تغيير الأيقونة عند الإغلاق
    }
}




















function changeImage(imageSrc, title, details) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = imageSrc; // تغيير مصدر الصورة الرئيسية
    openModal(title, details); // فتح النموذج مع التفاصيل
}

function openModal(title = '', details = '') {
    const mainImage = document.getElementById('mainImage');
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    const caption = document.getElementById('caption');
    const detailsContainer = document.getElementById('details');

    modal.style.display = "block"; // عرض النموذج
    modalImage.src = mainImage.src; // تعيين صورة النموذج
    caption.innerHTML = title; // تعيين عنوان الصورة
    detailsContainer.innerHTML = details; // تعيين تفاصيل الصورة
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = "none"; // إخفاء النموذج
}







