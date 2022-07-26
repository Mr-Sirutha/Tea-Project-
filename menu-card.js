const search = () =>{
    const searchbar = document.getElementById("searchbar").value.toUpperCase();
    const menu = document.getElementById("menu");
    const single_menu = document.querySelectorAll(".single-menu");
    const mname = menu.getElementsByTagName("h4");

    for(var i=0;i < mname.length;i++)
    {
        let match = single_menu[i].getElementsByTagName("h4")[0];

        if(match){
        let tvalue =  match.textContent || match.innerHTML
        
        if(tvalue.toUpperCase().indexOf(searchbar)> -1){
            single_menu[i].style.display = "";
        }
        else{
            single_menu[i].style.display = "none";
        }
        }
    }
}