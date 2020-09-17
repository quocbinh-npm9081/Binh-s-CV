// change Language
const content_english = document.getElementById('content_english');
const content_vietNam = document.getElementById('content_vietNam');
const and = document.getElementById('and');
const majorEng = document.getElementById('major');
const more = document.getElementById("more");

const btnVietNam_language = document.querySelector('.vietNam');
btnVietNam_language.addEventListener('click', function() {
    content_english.style.display = 'none';
    content_vietNam.style.display = 'inline-block';
    and.innerHTML = "và";
    majorEng.innerHTML = "PHÁT TRIỂN - THIẾT KẾ WEB";
    more.innerHTML = "Xem Thêm";
});

const btnEnglish_language = document.querySelector('.english');
btnEnglish_language.addEventListener('click', function() {
    content_english.style.display = 'inline-block';
    content_vietNam.style.display = 'none';
    and.innerHTML = "and";
    majorEng.innerHTML = "WED DEVERLOPER - WEB DESIGNER";
    more.innerHTML = "More";
});

//click on the avata to see img
const avata = document.querySelector(".avata");
const zoomingAvata = document.querySelector(".zooming_avata");
const imgOnZooming_avata = zoomingAvata.querySelector("img");

avata.addEventListener("click", function() {
    zoomingAvata.style.display = "flex";
});
zoomingAvata.addEventListener("click", function() {
    if (event.target != imgOnZooming_avata) {
        zoomingAvata.style.display = "none";
    } else {
        zoomingAvata.style.display = "flex";
    }
});