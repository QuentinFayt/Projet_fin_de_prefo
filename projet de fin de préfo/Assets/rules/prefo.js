function toggleTheme() {
    var theme = localStorage.getItem('theme');
    if (theme === '1' || theme === null) {
        localStorage.setItem('theme', '2');
    } else {
        localStorage.setItem('theme', '1');
    }
    loadTheme();
    changePictures();
}

function loadTheme() {
    var theme = localStorage.getItem('theme');
    if (theme === null) {
        theme = '1';
    }
    if (theme === '2'){
    var themeEl = document.getElementById('theme');
    themeEl.setAttribute('href', 'Assets/rules/theme2.css');
    }
    else{
    var themeEl = document.getElementById('theme');
    themeEl.setAttribute('href', 'Assets/rules/theme1.css');
    }
} 

function changePictures(){
    var theme = localStorage.getItem('theme');
    var picEl1 = document.getElementById('imageTheme1');
    var picEl2 = document.getElementById('imageTheme2');

    if(picEl1 !== null && picEl2 !== null){
        if (theme === null){
            theme = '1';
        }
        if (theme === '2'){
        picEl1.style.display ="none";
        picEl2.style.display ="block";
        }
        else{
        picEl1.style.display ="block";  
        picEl2.style.display ="none";  
        }
    }

}

document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
    changePictures();
}, false);


