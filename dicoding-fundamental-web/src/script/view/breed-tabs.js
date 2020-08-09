const openTab = (evt, list) => {
    tablist = document.getElementsByClassName("tablist");
    for (let i = 0; i < tablist.length; i++) {
        tablist[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(list).style.display = "flex";
    document.getElementById(list).style.flexWrap = "wrap";
    document.getElementById(list).style.justifyContent = "center";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();