let image=document.querySelectorAll('.image');
let size=0;
image.forEach((v,index)=>{
    v.style.right=`${index*100}%`;
});
function next(){
    if(size<image.length-1){
    size++;
    console.log(size);
    slideimage();
    }
}
function pre(){
    if(size!=0){
    size--;
    console.log(size);
    slideimage();
    }
}
function slideimage(){
    image.forEach((v)=>{
        v.style.transform=`translateX(${size*100}%)`;
    });
}