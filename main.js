
place_write = document.getElementById('place-write');
inp_date = document.getElementById('inp-date');
rowDisplay = document.getElementById('rowDisplay');
ptn_update = document.getElementById('ptn-update');
ptn_insert = document.getElementById('ptn-insert');
var diaryIndex ;
addArray = []

if(localStorage.getItem('diary')){
    addArray = JSON.parse(localStorage.getItem('diary'));
    addDairy();
}

function insert(){
    ptn_insert = document.getElementById('ptn-insert');
    place_write = document.getElementById('place-write');
    inp_date = document.getElementById('inp-date');
    var diary = {
        content : place_write.value ,
        date : inp_date.value ,
    }
    addArray.push(diary)

    localStorage.setItem('diary' , JSON.stringify(addArray))

    ptn_insert.style.paddingLeft ='200px';

    addDairy()
    clear()
}

function addDairy(){
    var container = '' ;
    for (var i = 0 ; i < addArray.length ; i++){
        container +=`
                <div class="col-lg-6 col-md-6 col-sm-12" id="box">
                    <div class="written">
                        <h3 class="diary-content">
                        ${addArray[i].content}
                        </h3>
                        <div>
                            <hr class="hr1">
                        </div>
                        <div>
                            <h4 class="diary-content-date">Date is : ${addArray[i].date}</h4>
                        </div>
                        <div>
                            <hr class="hr1">
                        </div>
                        <div>
                            <i class="fa-solid fa-heart-circle-check" id="icon" onclick="star(${i} , this)"></i> 
                        </div>
                        <div class="user-ptn">
                            <div>
                                <button type="button" id="ptn-update2" onclick="updating() , toUpdate(${i})">Update</button>
                            </div>
                            <div>
                                <button type="button" id="ptn-delete" onclick=(deleteDiary(${i}))>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
    rowDisplay.innerHTML = container ;
}

function clear(){
    place_write.value = '' ;
    inp_date.value = ' ;'
}

function deleteDiary(index){
    addArray.splice(index,1)
    localStorage.setItem('diary' , JSON.stringify(addArray));
    addDairy()
}

function toUpdate(index){
    diaryIndex = index ;

    place_write.value = addArray[index].content ;
    inp_date.value = addArray[index].date ;

    ptn_insert.classList.add('d-none');
    ptn_update.classList.remove('d-none');

}
function toUpdate2(){
    var updated = {
        content : place_write.value ,
        date : inp_date.value ,
    }

    addArray.splice(diaryIndex , 1 , updated);
    localStorage.setItem('diary' , JSON.stringify(addArray));
    addDairy()
    clear()

    ptn_insert.classList.remove('d-none');
    ptn_update.classList.add('d-none');
}


function insert2(){
    ptn_insert = document.getElementById('ptn-insert');

    ptn_insert.style.paddingLeft ='10px';
}


function update(){
    ptn_update = document.getElementById('ptn-update');
    ptn_insert = document.getElementById('ptn-insert');

    ptn_update.style.paddingLeft = '195px';
}
function update2(){
    ptn_update = document.getElementById('ptn-update');

    ptn_update.style.paddingLeft = '10px';
}

function updating(){
    ptn_update2 = document.getElementById('ptn-update2');
    ptn_insert = document.getElementById('ptn-insert');
    ptn_update = document.getElementById('ptn-update');

    ptn_insert.style.display = 'none'
    ptn_update.style.display = 'inline'
}



function star(index , el){
    let icon = el ;
    diaryIndex = index ;
    addArray.splice(index,1)


    if(icon.style.color === 'red'){
        icon.style.color = 'black';
    }else{
        icon.style.color = 'red';
        Swal.fire({
        title: 'Good',
        text: 'I added this diary to my favorites.',
        imageUrl: "./imges/heart.png",
        imageWidth: 300,
        imageHeight: 200,
        confirmButtonText: 'OK'});
    }
}

function darkMode(){
light = document.getElementById('light');
body = document.getElementById('body')
mod = document.getElementById('mod');

    if (light.style.marginLeft === '58px'){
        light.style.marginLeft = '-3px'
        light.style.backgroundColor = 'gold'
        mod.style.border = '3px solid #9abc20'
        body.style.backgroundColor = '#11414f'
    }else{
        light.style.marginLeft = '58px'
        body.style.backgroundColor = 'black'
        light.style.backgroundColor = 'white'
        mod.style.border = '3px solid gold'
    }
}

function ico1(){
    link1 = document.getElementById('link1');

    link1.style.color = 'white';
}

function ico2(){
    link2 = document.getElementById('link2');

    link2.style.color = 'rgb(39, 126, 255)';
}