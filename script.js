let s1=document.getElementById("sq1")
let s2=document.getElementById("sq2")
let s3=document.getElementById("sq3")
let s4=document.getElementById("sq4")


s1.addEventListener("mouseenter",function(){
    let a=Math.floor(Math.random()*100)
    s1.innerHTML=`<h1>${a}</h1>`
})
s1.addEventListener("mouseleave",function(){
    s1.innerHTML=`<h1>10</h1>`
})
  let clr="green"
s2.addEventListener("mouseenter",function(){
  
    if(clr=="green"){
        s2.style.backgroundColor="green"
        clr="red"
    }
    else{
        s2.style.backgroundColor="red"
        clr="green"
    }
})
s2.addEventListener("mouseleave",function(){
    s2.style.backgroundColor="white"
})


s3.addEventListener("mouseenter",function(){
      let x=Math.floor(Math.random()*256)
        let y=Math.floor(Math.random()*256)
          let z=Math.floor(Math.random()*256)
    s3.style.backgroundColor=`rgb(${x},${y},${z})`
   
})
s3.addEventListener("mouseleave",function(){
   s3.style.backgroundColor="White"
})
s4.addEventListener("click",function(){
      let x=Math.floor(Math.random()*256)
        let y=Math.floor(Math.random()*256)
          let z=Math.floor(Math.random()*256)
    s1.style.backgroundColor=`rgb(${x},255,255)`
    s2.style.backgroundColor=`rgb(255,${y},255)`
    s3.style.backgroundColor=`rgb(255,255,${z})`
    
})
s4.addEventListener("mouseleave",function(){
    s1.style.backgroundColor ="white"
    s2.style.backgroundColor  ="white"
    s3.style.backgroundColor  ="white"
   
})