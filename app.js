// let a = 4
// let arr = [1,2,a,1,true,"hello",{name: "Tom"},[1,3,90],1,undefined]

// arr[1000] = null
// arr.length
// arr.indexOf(1,4)
// arr.lastIndexOf
// arr.includes(true, 6)

// console.log();

// for(let index in arr){
//     console.log(index, arr[index]);
// }

// for( let item of arr){
//     console.log(item);
// }

// for(let i = 0; i < arr.length; i++){
//     console.log(i, arr[i]);
// }


// let arr = [12,25,63,4]

// let arr2 = [9,8,7]
// arr.toString()
// arr2 = arr2.concat(arr)
// console.log(arr2);

// delete arr[2]
// arr.splice(1,2)
// arr = arr.slice(1,3)
// arr = arr.reverse()
// arr.push(true)+
// arr.pop()-
// arr.unshift([1,2,3],true)
// arr.shift()
// function passwordGanirate(count){
//     let pass = "";
//     while(count--){
//         pass += Math.round(Math.random()) ? Math.round(Math.random()*35).toString(36) : Math.round(Math.random()*35).toString(36).toUpperCase()
//     }
//     return pass
// }
// function createArray(count){
//     let arr = [];
//     for(let i = 0; i< count; i++){
//         arr.push(passwordGanirate(8))
//     }
//     return arr
// }
// console.log(createArray(100000));


// const navitems = ["Home", "About","Gellery","Products"];

// function createNavbar(x,y){
//     const navbar = document.createElement("div");
//     navbar.className = "navbar";
//     navbar.style.top = y+"px";
//     navbar.style.left = x+"px"
//     document.body.prepend(navbar)
//     let index = 0;
//     let time = setInterval(()=>{
//         navbar.insertAdjacentHTML("beforeend",`<span>${navitems[index++]}`)
//     },150)
//     setTimeout(()=>{
//         clearInterval(time)
//     },600)
// }

// window.addEventListener("dblclick",(event)=>{
//     let navbar = document.querySelector(".navbar");
//     if(navbar){
//         navbar.remove()
//     }
//     createNavbar(event.clientX, event.clientY)
// })

// window.addEventListener("click",(event)=>{
//     let navbar = document.querySelector(".navbar");
//     if(navbar){
//         navbar.remove()
//     }
// })

// window.addEventListener("contextmenu",(event)=>{
//     event.preventDefault()
//     let navbar = document.querySelector(".navbar");
//     if(navbar){
//         navbar.remove()
//     }
//     createNavbar(event.clientX, event.clientY)
    
// })

// document.addEventListener("copy",(event)=>{
//     event.preventDefault()
// })

// document.addEventListener("cut",(event)=>{
//     event.preventDefault()
// })

// document.addEventListener("paste",(event)=>{
//     event.preventDefault()
// })

// const text = document.querySelector("textarea");

// text.addEventListener("blur",(ev)=>{
//     text.style.backgroundColor = "#fff"
// })
// text.addEventListener("focus",(ev)=>{
//     text.style.backgroundColor = "red"
// })

// const text = document.querySelector("input");

// text.addEventListener("keyup",(ev)=>{
//     let arr = ["red","green","blue","yellow","white"]
//     if(ev.key == "Enter"){
//         let key = arr.find(item => item == ev.target.value)
//         if(key){
//             document.body.style.backgroundColor = key
//         }else{
//             alert("nman guyn chka")

//         }
//     }
// })


// text.addEventListener("input",(ev)=>{
//     if(ev.target.value.length >= 8){
//         ev.target.value = ev.target.value.slice(0,8)
//     }
// })

// text.addEventListener("change",(ev)=>{
//     if(ev.target.checked){
//         document.body.style.backgroundColor = "#555"
//     } else{
//         document.body.style.backgroundColor = "#fff"
//     }
// })


// Մկնիկը սեղմում ենք
// text.addEventListener("mousedown",(event)=>{
//     text.style.backgroundColor = "red"
// })

// մկնիկը գտնվում է էլեմենտի վրա
// text.addEventListener("mouseenter",(event)=>{
//     text.style.backgroundColor = "red"
// })

// մկնիկը հեռանում էլեմենտի տիրույթից
// text.addEventListener("mouseleave",(event)=>{
//     text.style.backgroundColor = "red"
// })

// մկնիկը գտնվում կամ տեղաշարժվում է էլեմետի տարածքում
// text.addEventListener("mousemove",(event)=>{
//     event.target.value = `
//     x: ${event.clientX},
//     y: ${event.clientY}                
//         `
// })

//  մկնիկը հեռանում էլեմենտի տիրույթից
// text.addEventListener("mouseout",(event)=>{
//     text.style.backgroundColor = "red"
// })

// մկնիկը գտնվում է էլեմենտի վրա
// text.addEventListener("mouseover",(event)=>{
//     text.style.backgroundColor = "red"
// })

// Մկնիկը սեղմում և բաց ենք թողնում
// text.addEventListener("mouseup",(event)=>{
//     text.style.backgroundColor = "red"
// })


// text.addEventListener("mousemove",(event)=>{
//     event.target.style.backgroundColor = "green";
//     event.target.value = `
//         x: ${event.offsetX},
//         y: ${event.offsetY}
//     `
// })

// text.addEventListener("mouseleave",(ev)=>{
//     text.style.backgroundColor = "#fff";
//     ev.target.value = ""
// })



//1
// function reverse(arg){
//     return arg.reverse()
// }
// let arr = [1,2,3,4]
// arr = reverse(arr)

// console.log(arr);

// 2

// let arr = [1,3,7,9,30,12]
// let newArray = [];
// for(let item of arr){
//     if(item % 2) newArray.push(item);
// }
// console.log(newArray);

//3
// let arr = [1,9,76,93,14,63]
// let sum = 0;
// for(let item of arr){
//     sum += item
// }
// sum = sum / arr.length
// console.log(sum);


// 4
// let arr1 = [1,3,9];
// let arr2 = [7,5,11,9,3];
// let sum = 0
// for(let item of arr1.concat(arr2)){
//     sum += item
// }
// console.log(sum);

// 5
// let arr1 = [1,3,9];
// let arr2 = [7,5,11,9,3];
// let sum = arr1.concat(arr2)

// 6
// let arr1 = [1,3,9];
// let arr2 = [7,5,11,9,3];

// for(let item of arr1){
//     if(arr2.includes(item)){
//         arr2.splice(arr2.indexOf(item),1)
//         continue;
//     }
//     arr2.push(item)
// }

// console.log(arr2);


// 7
// let arr =  [1,5,8,9,0,12]
// let newArray = []
// for(let item of arr){
//     newArray.push(item.toString(2))
// }
// console.log(newArray);


// 8
// let arr = [1,5,8,9,0,12];
// let newArray = [];
// for(let item of arr){
//     newArray.unshift(item)
// }
// console.log(newArray);


// console.log("barev".localeCompare("barev"));

// let t = "hello";
// t = t.split("l")
// t = t.join(" top ")
// console.log(t);

// let arr = [9,15,62,68]

// arr.forEach((item, index, array)=>{
//     console.log(item, index, array);
// })

// arr = arr.map((item, index, arr)=> item.toString(2))
// arr = arr.filter((item, index, arr) => index < 2)
// arr = ["arev","barev","inch","cerek","Ar","Ba"]
// arr = arr.sort((a, b)=> a.localeCompare(b))
// arr = arr.reduce((s, a, i, arr) => s += a , 0)
// arr = arr.findIndex((item, index, arr) => item > 15)

// console.log(arr);]

// let a = [2,5,13,8,9, 1, 16, 4]
// let b = []

// for (let i = 0; i < a.length; i++) {
//    for (let j = i + 1; j < a.length; j++) {
//     if (a[i] + a[j] === 14) {
//         b.push([a[i], a[j]])
//     }
//    }
// }
// for(let item of b){
//     console.log(item);
// }


// function createMatrix(n){
//     let matric = [];
//     let sum = 0;
//     for(let i = 0; i< n; i++){
//         let arr = [];
//         for(let i = 0; i < n; i++){
//             arr.push(Math.round(Math.random()*89 + 10))
//         }
//         matric.push(arr)
//         sum += matric[i][i] - matric[i][n-1-i]
//     }
//     return {
//         matric: matric,
//         sum: sum
//     }
// }
// let matric  = createMatrix(4)
// console.log(matric.matric);

// let text = "hello \n \" sdf\" \tworld"
// console.log(text);
// let s = 18
// text = `
// hello
// ${s > 15? 20 : 18}
// world
// `


// console.log(text.charAt(1));
// console.log();

// const reg = document.forms.registration;

// reg.onsubmit = (ev)=>{
//     if(reg.email.value.length > 0 && reg.password.value.length>=8 && reg.passwordRep.value.length >= 8 && reg.password.value === reg.passwordRep.value && reg.agree.checked){
//         reg.style.borderColor = "burlywood"
//         console.log(15);
//     } else{
//         ev.preventDefault()
//         reg.email.value = ""
//         reg.password.value = ""
//         reg.passwordRep.value = ""
//         reg.agree.checked = false
//         reg.style.borderColor = "red"
//     }
// }


// const registration = document.querySelector(".registration");
// const reg_btn = document.querySelector(".reg-btn");

// reg_btn.onclick = ()=>{
//     registration.classList.toggle("registration_active")
// }

// let arr = [1,2,3,4,5];

// let [a,b,...c] = arr

// let user = {
//     key: true,
//     status:"Working"
// }
// let {key: us, status: su} = user;
// console.log(a,b,c,us,su, user);

// console.log(Math.max(...arr));

// function sum(...n){
//     let s = 0;
//     for(let i of n){
//         s = s+ i
//     }
//     return s
// }

// console.log(sum(1,8,6));

// function max(a,...n){
//     let m = a;
//     for(let i of n){
//         if(i > m) m = i;
//     }
//     return m
// }

// console.log(max(1,7,2,8,3));

// const date = new Date()
// let s = date.getSeconds()
// date.set
// console.log(s);

// let round = n => n % 1 >= 0.5 ? n - n%1 + 1: n- n % 1
// let floor = n => n - n%1
// let cell = n => n - n % 1 + 1

// console.log(round(0.55445159));

// let start = Date.now();
// for(let i = 0; i < 1000000000; i++){
//     let s = 0
// }
// let end  = Date.now();
// alert(end)

// let k = Symbol("id")
// let user = {
//     name: "Tom",
//     age: k
// }

// let data = JSON.stringify(user,null,5)

// console.log(data);

// let data2 = JSON.parse(data)
// console.log(data2);

