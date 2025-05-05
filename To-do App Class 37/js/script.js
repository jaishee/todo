let name=document.querySelector(".name")
let caption=document.querySelector(".caption")
let postBtn=document.querySelector(".postBtn")
let allPost=document.querySelector(".allPost")
let error=document.querySelector(".error")
let updateBtn=document.querySelector(".updateBtn")


let arr=[]
let indexStore;


postBtn.addEventListener("click",()=>{
    if (!name.value || !caption.value) {
        error.innerHTML = "Please enter your name and write caption."
    }
    else if(!name.value && !caption.value){
        error.innerHTML="Please enter your name and write caption."
    }
    else{
        arr.push({
            name:name.value,
            caption:caption.value
        })
        error.style.display="none"
        allPost.innerHTML=""
        display()
        name.value=""
        caption.value=""
    }


})

updateBtn.addEventListener("click",()=>{

    if(confirm("Are you sure want to update this post?")){

    arr[indexStore].name= name.value
    arr[indexStore].caption=caption.value
    allPost.innerHTML=""
    display()

    name.value=""
    caption.value=""

    updateBtn.style.display="none"
    postBtn.style.display="block"
    }

})

function display(){
    arr.map(item=>{
        allPost.innerHTML+=`<div class="card mt-5" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.caption}</p>
            <button class="btn btn-primary edit">Edit</button>
            <button class="btn btn-danger delete">Delete</button>
          </div>
        </div>`
        })

        let deleteBtn=document.querySelectorAll(".delete")
        let convertDeleteBtn=Array.from(deleteBtn)
        convertDeleteBtn.map((item,index)=>{
            
            item.addEventListener("click",()=>{
                if (confirm("Are you sure you want to delete this post?")) {
                    arr.splice(index, 1)
                    allPost.innerHTML = ""
                    display()
                }
            })
            
        })

        let editBtn=document.querySelectorAll(".edit")
        let convertEditBtn=Array.from(editBtn)
        convertEditBtn.map((item,index)=>{
            item.addEventListener("click",()=>{
                updateBtn.style.display="block"
                postBtn.style.display="none"
  
                name.value=arr[index].name
                caption.value=arr[index].caption
                indexStore=index

            })
        })

        


    }


display()