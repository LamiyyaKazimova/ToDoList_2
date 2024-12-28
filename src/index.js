const input=document.querySelector("input")
const button=document.querySelector(".add")
const div=document.querySelector(".wrapper")
const wrapper=document.querySelector(".wrapper-list")
const body=document.querySelector("body")
const sure=document.querySelector(".sure")
const yes=document.querySelector(".yes")
const no=document.querySelector(".no")
const text=document.querySelector(".text")


const orderedList=document.createElement("ol")
orderedList.classList.add("ol")
wrapper.append(orderedList)

button.addEventListener("click",()=>{
    if(input.value.trim()===""){
     return;
    }
    const li=document.createElement("li")
    li.classList.add("li")

    const span=document.createElement("span")
    span.classList.add("span")

    span.textContent=input.value

    const commonButton=document.createElement("span")
    commonButton.classList.add("buttons")
    const editButton=document.createElement("button")
    editButton.textContent="Edit"
    editButton.classList.add("edit")
    const deleteButton=document.createElement("button")
    deleteButton.textContent="Delete"
    deleteButton.classList.add("delete")
    
    const newInput=document.createElement("input")
    newInput.style.display="none"

    

   
    editButton.addEventListener("click",()=>{
        newInput.style.display="block"
        newInput.classList.add("input")
        newInput.value=span.textContent
         span.style.display="none"
        editButton.style.display="none"
        deleteButton.style.display="none"
         newButton.style.display="block"
      
    })

    const newButton=document.createElement("button")
    newButton.classList.add("button")
    newButton.textContent="Okay"
    newButton.style.display="none"
    

    newButton.addEventListener("click",()=>{
        span.style.display="block"
        span.textContent=newInput.value
        newInput.style.display="none"
        newButton.style.display="none"
        editButton.style.display="block"
        deleteButton.style.display="block"

    })

    sure.classList.add("none")


    deleteButton.addEventListener("click",()=>{
    sure.classList.remove("none")
    text.textContent=`Are you sure ${span.textContent}?`

    yes.addEventListener("click",()=>{
    li.remove()
    sure.classList.add("none")

    })

    no.addEventListener("click",()=>{
    sure.classList.add("none")
    })


    })

    commonButton.append(editButton,deleteButton)
    li.append(span,newInput, commonButton,newButton)
    orderedList.append(li)
    wrapper.append(orderedList)




    input.value=""


})



