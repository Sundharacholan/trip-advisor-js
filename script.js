
var menumq = document.getElementById("menumq")
var navmq =document.getElementById("navmq")
var cancel =document.getElementById("cancel")

menumq.addEventListener("click",function()
    {
        navmq.style.left="0"
    }
)

cancel.addEventListener("click",function()
    {
        navmq.style.left="-90%"
    }
)