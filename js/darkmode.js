var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1");
if (night == '1') {
    console.log('夜间模式开启');
    switchDarkMode(1)
} else {
    console.log('夜间模式关闭');
}


function switchDarkMode(dmode=night){
    if(dmode==0){
        document.cookie = "night=1;"
        new_element = document.createElement('link');
        new_element.setAttribute('rel', 'stylesheet');
        new_element.setAttribute('href', '/css/darkmode.css');
        document.body.appendChild(new_element);
        document.getElementsByClassName('vibrant-polygon')[0].style.cssText="fill: rgb(0 0 0 / 90%)";
    } else {
        document.cookie = "night=0;"
        location.reload()
    }
}