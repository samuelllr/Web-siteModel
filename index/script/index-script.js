function start(){

    // FORMATAÇÃO CSS

    // organização de section header footer ( posicionamento )

    let header = document.getElementsByTagName("header")[0];
    let section = document.getElementsByTagName("section")[0];
    let footer = document.getElementsByTagName("footer")[0];
    let titleAlfa = document.getElementById("title-alfa");
    let menuHeader = document.getElementById("menu-header");
    let polySvg = document.getElementById("poly-svg");
    let svg = document.getElementById("SVG");

    let heightHeader = header.clientHeight;
    let heightSection = section.clientHeight;
    
    section.style.top = heightHeader + "px";
    footer.style.top = heightHeader + heightSection + "px";
    titleAlfa.style.height = heightHeader - menuHeader.clientHeight + "px" ; 

    //SVG POLYLINE

    let attPolySvg = document.createAttribute("points");
    let XPoly , YPoly;
    XPoly = svg.clientWidth;
    YPoly = svg.clientHeight;
    attPolySvg.value = "0,0,"+ XPoly + "," + YPoly + "," + XPoly + ",0,0,0";
    polySvg.setAttributeNode(attPolySvg);

}