export function edit(){
    var editbtn = document.querySelectorAll("#edit-btn")
    editbtn.forEach(e => {
        e.addEventListener("click",function () {
            var li = this.closest('li')
            var p = li.querySelector('p')
            var textnode = p.textContent
            var inputField = document.createElement('input');
            inputField.type='text'
        inputField.value = textnode
        li.replaceChild(inputField,p)

        inputField.addEventListener("blur",function () {
                textnode = inputField.value;
                p.textContent = textnode ;
                if(textnode == ""){
                    alert("enter value") 
                }
                else{
                    li.replaceChild(p,inputField)   
                }
        })
    });
    })
}