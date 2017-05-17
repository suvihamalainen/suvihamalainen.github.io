var jsondata = null;
var intervalOn = true;
var interval = null;

window.onload = function () {
    
    $.getJSON("https://project--8153098886361940373.firebaseio.com/.json", function (data) {
        jsondata = data;
    });
    
    if (!window.localStorage.clickcount) window.localStorage.clickcount = 0;
    
    function showNews(count) {
        $("#otsikko").html(jsondata.uutiset[count].otsikko);
        $("#pvm").html(jsondata.uutiset[count].päivämäärä);
        $("#newsContainer").html(jsondata.uutiset[count].sisältö);
        $("#newsImage").html('<img src="' + jsondata.uutiset[count].kuva + '"/>');
    }
    
    function chooseInterval() {
        if (intervalOn) {
        interval = setInterval(function () {
            showNews(window.localStorage.clickcount);
            //$("#testi").fadeIn(2000);
            //$("#testi").fadeOut(2000);
            if (Number(window.localStorage.clickcount) == 2) { window.localStorage.clickcount = 0;
            } else { window.localStorage.clickcount = Number(window.localStorage.clickcount) + 1;
            }
        }, 4000);
        window.interval;
        }
    }
  
    $("#otsikko").html("Sampo Soimakallio: Avaimia metsien käytön ilmastovaikutusten ymmärtämiseen");
    $("#pvm").html("9.3.2017");
    $("#newsContainer").html("Suomen bioenergiasta, metsien kestävästä käytöstä ja hiilitaseesta käydään tiivistä keskustelua. Sampo Soimakallio avaa blogikirjoituksessaan SYKEn sivuilla asiaa paremmin ymmärrettäväksi.");
    $("#newsImage").html('<img src="hakkuu.jpeg"/>');
    chooseInterval();
    
    document.getElementById("prev").addEventListener("click", function () {
        intervalOn = false;
        window.clearInterval(interval);
        $("#testi").stop(true);
        if (Number(window.localStorage.clickcount) === 0) {window.localStorage.clickcount = 2;
        } else {window.localStorage.clickcount = Number(window.localStorage.clickcount) - 1;
        }
        showNews(window.localStorage.clickcount);
    });
    
    document.getElementById("next").addEventListener("click", function () {
        intervalOn = false;
        window.clearInterval(interval);
        $("#testi").stop(true);
        if (Number(window.localStorage.clickcount) == 2) {window.localStorage.clickcount = 0;
        } else {window.localStorage.clickcount = Number(window.localStorage.clickcount) + 1;
        }
        showNews(window.localStorage.clickcount);
    });
    
    $("#pause").click( function() {
        if (intervalOn) {
            intervalOn = !intervalOn;
            window.clearInterval(interval);
            $("#testi").stop(true);
            showNews(Number(window.localStorage.clickcount) -1);
        } else {
            intervalOn = !intervalOn;
            chooseInterval();
            $("#testi").stop(false);
        }
    });
};