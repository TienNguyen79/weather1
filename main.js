var search = document.querySelector(".search")
var city = document.querySelector(".city")
var country = document.querySelector(".country")
var value =  document.querySelector(".value")
var shortDesc = document.querySelector(".short-desc")
var visibility = document.querySelector(".visibility span")
var wind = document.querySelector(".wind span")
var sun = document.querySelector(".sun span")
var time = document.querySelector(".time")
var content = document.querySelector(".content")
var body = document.querySelector("body")
var inputValue = search.value.trim(); //Lấy giá trị input
async function changeWeather(inputValue){
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
   let data = await fetch(apiUrl).then(res => res.json())
//    console.log(data)
   if(data.cod == 200){ //data.cod == 200 là khi tìm kiếm thành công
        content.classList.remove("hide")
       city.innerText = data.name;
       country.innerText = data.sys.country
       visibility.innerText = data.visibility + "m";
       wind.innerText = data.wind.speed + "(m/s)"
       sun.innerText = data.main.humidity + ("%")
       let temp = Math.floor(data.main.temp)
       value.innerText = temp;
       shortDesc.innerText = data.weather[0].main;
       time.innerText = new Date().toLocaleString('vi')

       if(temp>=30){
           body.setAttribute("class","hot")
       }
       else if(temp>=21){
           body.setAttribute("class","warm")
       }
       else{
           body.setAttribute("class","cold")
       }
   }else{
       alert("Not Found");
       content.classList.add("hide")
   }
   
}



search.addEventListener("keypress",function(e){
    if(e.code === 'Enter'){
    let inputValue = search.value.trim();
        changeWeather(inputValue);
    }
})
changeWeather("Ha Noi")