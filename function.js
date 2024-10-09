const tabs = document.querySelectorAll(".car_tab");
const car = document.querySelectorAll(".car_type");

tabs.forEach((tab, index)=>{
    tab.addEventListener("click", ()=>{
        tabs.forEach(tab=>{tab.classList.remove("active")});
        tab.classList.add("active");

        car.forEach(content=>{content.classList.remove("active")});
        car[index].classList.add("active");

        if(tabs[index].textContent == "Sedan"){
            document.querySelector("#cartypetitle").innerHTML = 'Sedan';
        }else if(tabs[index].textContent == "SUVs"){
            document.querySelector("#cartypetitle").innerHTML = 'Sports Utility Vehicle (SUVs)';
        }else if(tabs[index].textContent == "AUVs"){
            document.querySelector("#cartypetitle").innerHTML = 'Asian Utility Vehicle (AUVs)';
        }else if(tabs[index].textContent == "MPVs"){
            document.querySelector("#cartypetitle").innerHTML = 'Multi-Purpose Vehicle (MPVs)';
        }else if(tabs[index].textContent == "Vans"){
            document.querySelector("#cartypetitle").innerHTML = 'Vans';
        }else{
            document.querySelector("#cartypetitle").innerHTML = 'Unknown Car Type';
        }
    })
})

