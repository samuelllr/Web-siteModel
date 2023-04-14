function start(){

    // FORMATAÇÃO CSS

    // organização de section header footer ( posicionamento )

    let header = document.getElementsByTagName("header")[0];
    let section = document.getElementsByTagName("section")[0];
    let footer = document.getElementsByTagName("footer")[0];
    let barMenuHeader = document.getElementById("bar-menu-header");
    let titleAlfa = document.getElementById("title-alfa");
    let menuHeader = document.getElementById("menu-header");

    let heightHeader = header.clientHeight;
    let heightSection = section.clientHeight;
    
    section.style.top = heightHeader + "px";
    footer.style.top = heightHeader + heightSection + "px";
    barMenuHeader.style.top = heightHeader - barMenuHeader.clientHeight + "px";
    titleAlfa.style.height = heightHeader - barMenuHeader.clientHeight - menuHeader.clientHeight + "px" ; 

}