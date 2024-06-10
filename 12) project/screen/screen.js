const btn = document.getElementById('btn')
const share = document.getElementById('share-video')

function shared(){

    navigator.mediaDevices.getDisplayMedia({video:true})
      .then((stream)=>{
        share.srcObject = stream
        btn.disabled = true
        
      })
      .catch((error)=>{
        console.error("Error Accessing screen sharing : ",error)
      })
}

if(!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia){
    alert("Screen Sharing is not supported in this browser")
}else{
  
    alert("Screen Sharing is supported in this browser")
    btn.addEventListener('click',shared)

}

