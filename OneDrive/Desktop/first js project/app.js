let value=document.getElementById('value')
let btn=document.querySelectorAll('.btn')

let initialValue=0
btn.forEach(function(btns){
  btns.addEventListener('click',function(e){
    let styles=e.currentTarget.classList
    if(styles.contains('increase')){
      initialValue++
    }else if(styles.contains('decrease')){
      initialValue--
    }else if(styles.contains('reset')){
      initialValue=0
    }
    if(initialValue>0){
      value.style.color='blue'
    }
    if(initialValue<0){
      value.style.color='red'
    }
    if(initialValue===0){
      value.style.color='yellow'
    }
    value.textContent=initialValue
  })
})




