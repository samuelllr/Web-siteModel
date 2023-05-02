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

    // Whatsapp tela active 

    var janelaWhatsapp = document.getElementById("whatsapp-contato");

    function activeWhatsappTela( comand ){

        janelaWhatsapp.style.transition = "0.5s";

        switch ( comand ){
            case 0: //abrir
                janelaWhatsapp.style.display = "inline";
            break;
            case 1: //fechar
                janelaWhatsapp.style.display = "none";
            break;
        }
    };

    // WALPAPER ANIMATED

    var wall = document.getElementById("wallpaper");
    var wallSelect = 0;
    var wallpaperArray = [  "capa1.jpg",
                            "capa2.jpg",
                            "capa3.jpg",
                            "capa4.jpg",
                            "capa5.jpg",
                            "capa6.jpg",
                            "capa7.jpg",
                            "capa8.jpg",
                        ];

    function animatedWall(){
        wall.setAttribute("src", 'imgs/'+wallpaperArray[wallSelect]);
        wallSelect++;
        if( wallSelect > 7 ){ wallSelect=0; }
    }

    setInterval( "animatedWall()" , 10000 );
    animatedWall();