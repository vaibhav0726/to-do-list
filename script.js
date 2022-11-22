showtask();
let input_text = document.getElementById("taskinput");
let addtaskbtn = document.getElementById("addbtn");

addtaskbtn.addEventListener("click", function(){
    input_textval = input_text.value;
    if(input_textval.trim()!=0)
    {
        let webtask = localStorage.getItem("localtask");
        if(webtask == null)
        {
            taskObj = [];
        }
        else
        {
            taskObj = JSON.parse(webtask);
        }
        taskObj.push(input_textval);
        localStorage.setItem("localtask", JSON.stringify(taskObj));
        input_text.value = '';
    }
    showtask();
})

// showtask
function showtask()
{
    let webtask = localStorage.getItem("localtask");
    if(webtask == null)
    {
        taskObj = [];
    }
    else
    {
        taskObj = JSON.parse(webtask);
    }
    let html = '';
    let addedtasklist = document.getElementById("items");
    taskObj.forEach((item, index) => 
    {

        html += `<tr>
                    <th>${index+1}</th>
                    <td class="my-text">${item}</td>
                    <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>

                    <td><button type="button" class="text-danger" onclick="deleteitem(${index})"><i class="fa fa-trash"></i>Delete</button></td>
                </tr>`;
    });
    addedtasklist.innerHTML = html;
}

//edittask
function edittask(index)
{
    let saveindex = document.getElementById("saveindex");
    let addtaskbtn = document.getElementById("addbtn");
    let savetaskbtn = document.getElementById("savebtn");
    saveindex.value = index;
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    
    input_text.value = taskObj[index];
    addtaskbtn.style.display="none";
    savetaskbtn.style.display="block";
}

// savetask
let savetaskbtn = document.getElementById("savebtn");
savetaskbtn.addEventListener("click", function()
{
    let addtaskbtn = document.getElementById("addbtn");
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask); 
    let saveindex = document.getElementById("saveindex").value;
    taskObj[saveindex] = input_text.value;
    savetaskbtn.style.display = "none";
    addtaskbtn.style.display = "block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    input_text.value = "";
    showtask();
})

//deleteitem
function deleteitem(index)
{
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
}

// deleteall
let deleteallbtn = document.getElementById("deleteall-btn");
deleteallbtn.addEventListener("click", function()
{
    let savetaskbtn = document.getElementById("savebtn");
    let addtaskbtn = document.getElementById("addbtn");
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    if(webtask == null)
    {
        taskObj = [];
    }
    else
    {
        taskObj = JSON.parse(webtask);
        taskObj = [];
    }
    savetaskbtn.style.display="none";
    addtaskbtn.style.display="block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask();
})