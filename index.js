const menuList = document.getElementById("menuList")
const buttonMenuList = document.getElementById("buttonMenu")

menuList.style.maxHeight = "0"

function showmenu(){
    if( menuList.style.maxHeight === "0px"){
        menuList.style.maxHeight = "120px"
    }else{
        menuList.style.maxHeight ="0px"
    }

}
buttonMenuList.addEventListener('click', showmenu)