const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
var inputItems = $$('.container__form-input-block');

isValid = true;

// 1 khối chương trình được tạo sẵn
const program = document.createRange().createContextualFragment(`<div class="container__form-input">
<div class="container__form-input-block">
    <label for="school" class="container__form-input-block-label"><span>*</span>CÁC TRƯỜNG XÉT TUYỂN</label>
    <span class="container__form-input-block-label-main">Đại học La Trobe, Úc</span>
    <img src="./assets/font/svg/Component 115 – 1.png" alt="">
    <span class="container__form-input-block-requireMessage">Trường bắt buộc</span>
    <ul class="container__form-input-block-list">
        <li class="container__form-input-block-list-item">Đại học La Trobe, Úc</li>
        <li class="container__form-input-block-list-item">Đại học Canberra, Úc</li>
        <li class="container__form-input-block-list-item">Đại học Bellevue, Mỹ</li>
        <li class="container__form-input-block-list-item">Đại học Huddersfield, Vương Quốc Anh</li>
        <li class="container__form-input-block-list-item">Đại học Middlesex, Vương Quốc Anh</li>
    </ul>
    <span class="container__form-input-block-del">Xóa</span>
</div>
<div class="container__form-input-block">
    <label for="school" class="container__form-input-block-label"><span>*</span>NGÀNH XÉT TUYỂN</label>
    <span class="container__form-input-block-label-main">Chương trình cử nhân Đa phương tiện 2+2 với Đại học Huddersfield, Vương Quốc Anh</span>
    <img src="./assets/font/svg/Component 115 – 1.png" alt="">
    <span class="container__form-input-block-requireMessage">Trường bắt buộc</span>
    <ul class="container__form-input-block-list">
        <li class="container__form-input-block-list-item">Chương trình cử nhân Đa phương tiện 2+2 với Đại học Huddersfield, Vương Quốc Anh</li>
        <li class="container__form-input-block-list-item">Chương trình cử nhân Công nghệ thông tin 2+2 với Đại học Huddersfield, Vương Quốc Anh</li>
        <li class="container__form-input-block-list-item">Chương trình cử nhân An toàn thông tin 2+2 với Đại học Huddersfield, Vương Quốc Anh</li>
        <li class="container__form-input-block-list-item">Chương trình cử nhân Công nghệ kỹ thuật điện, điện tử 2+2 với Đại học Huddersfield, Vương Quốc Anh</li>
    </ul>
    <span class="container__form-input-block-del-childBlock">Xóa</span>
</div>
<div class="container__form-input-block-invisible">
    
</div>
<button class="container__form-input-block-add">
    <img src="./assets/font/svg/Group 10311.svg" alt="">
    THÊM NGÀNH XÉT TUYỂN
</button>
</div>`);

// Mảng chứa các chương trình từ chương trình thứ 2
var arr = [program.firstChild];

// Heading của form
const heading = `<span class="container__form-name">ĐĂNG KÝ XÉT TUYỂN</span>
<div class="container__form-heading">
    <span>Thông tin đăng ký</span>
    <span>*bắt buộc</span>
</div>
<span class="container__form-desc">
    Sau khi đã đọc và hiểu rõ các quy định về tiêu chí và điều kiện xét tuyển của Nhà trường, tôi đồng ý xét tuyển học bạ vào chương trình Liên kết đào tạo Cử nhân như sau: (chọn phương thức xét tuyển)
</span>
<div class="container__form-part1-program-add">
    <span>CHƯƠNG TRÌNH</span>
    <div class="container__form-part1-program-add-img">
        <img src="./assets/font/svg/Group 10304de.svg" alt="">
        <img src="./assets/font/svg/Group 10304.svg" alt="">
    </div>
</div>`;

let addBtn = $('.container__form-part1-program-add-img');

addBtn.onclick = function() {
    const form = document.getElementById('chuong-trinh');
    form.append(program.cloneNode(true).firstChild);
    inputItems = $$('.container__form-input-block');
    reconvertButton();
}

// Xử lí chuyển tab
 const tabs = $$('.container__navbar-content-item');
 const pages = $$('.page');

 tabs.forEach(function(tab, index) {
    tab.onclick = function() {
        $('.container__navbar-content-item.active').classList.remove('active');
        this.classList.add('active')
        $('.page.active').classList.remove('active');
        pages[index].classList.add('active');
    }
 })

// Xử lý nhập thông tin
function reconvertButton(){

inputItems.forEach(function(inputItem, index) {
    const textInput = inputItem.querySelector('input');
    const mainText = inputItem.querySelector('.container__form-input-block-label-main');
    inputItem.onclick = function() {
        const listInput = inputItem.querySelector('ul');
        if(!listInput) {
            const listCheck = $('.container__form-input-block-list.active');
            if(listCheck) {
                listCheck.classList.remove('active');
            }
            this.classList.add('active');
            if(textInput) {
                textInput.onblur = function() {
                    if(!textInput.value) {
                        inputItem.classList.add('required');
                    }
                    else {
                        inputItem.classList.remove('required');
                    }
                }
                textInput.oninput = function() {
                    inputItem.classList.remove('required');
                }
            }
        }
        else {
            const listCheck = $('.container__form-input-block-list.active');
            if(!listCheck) {
                listInput.classList.toggle('active'); 
                const listItems = inputItem.querySelectorAll('li');
                listItems.forEach(function(listItem) {
                    listItem.onclick = function() {
                        mainText.innerText = listItem.innerText;
                        inputItem.classList.add('active');
                    }
                });
            }
            else {
                listCheck.classList.remove('active');
            }
        }
    }
})
}

reconvertButton();

// Tổ hợp xét tuyển
const complex = {
    A00: ["Toán", "Lí", "Hóa"],
    A01: ["Toán", "Lí", "Anh"],
    D01: ["Toán", "Văn", "Anh"]
}

// Xử lí chọn tổ hợp xét tuyển
const complexBox = $('.complexBox');
const complexList = complexBox.querySelector('ul');
const complexItems = $$('.blockAuto');

complexList.onclick = function() {
    const mainTextComplexBox = complexBox.querySelector('.container__form-input-block-label-main');
    if(mainTextComplexBox.innerText) {
        if(mainTextComplexBox.innerText === "A00") {
            for(let i = 0; i < 3; i++) {
                complexItems[i].classList.add('active');
                const span = complexItems[i].querySelector('.container__form-input-block-label-main');
                span.innerText = complex.A00[i];
            }
        }
        else if(mainTextComplexBox.innerText === "A01") {
            for(let i = 0; i < 3; i++) {
                complexItems[i].classList.add('active');
                const span = complexItems[i].querySelector('.container__form-input-block-label-main');
                span.innerText = complex.A01[i];
            }
        }
        else if(mainTextComplexBox.innerText === "D01") {
            for(let i = 0; i < 3; i++) {
                complexItems[i].classList.add('active');
                const span = complexItems[i].querySelector('.container__form-input-block-label-main');
                span.innerText = complex.D01[i];
            }
        }
    }
}

// Tính điểm trung bình
const markBlocks = $$('.mark');
const markAverage = $('.markAverage');

let sum = 0;
let cnt = 0;

markBlocks.forEach(function(markBlock) {
    markBlock.oninput = function () {
        const inputValue = markBlock.querySelector('input');
        if (inputValue.value > 10) {
            inputValue.value = inputValue.value.slice(0,1); 
        }
    }
    markBlock.onchange = function() {
        sum = 0;
        cnt = 0;
        markBlocks.forEach(function(block) {
            const value = block.querySelector('input').value;
            if(value) {
                sum+=Number(value);
                cnt++;
            }
        });
        if(cnt === 9) {
            markAverage.querySelector('.container__form-input-block-label-main').innerText = (sum/cnt).toPrecision(2);
            markAverage.classList.add('active');
        }
    }
})

// Check đủ thông tin khi submit
const btnSubmit = $('.container__form-submit-button');

btnSubmit.onclick = function() {
    const valueChecks = $$('.container__form-input-block');
    valueChecks.forEach(function(valueCheck) {
        const valInput = valueCheck.querySelector('.container__form-input-block-enterText');
        const valSelect = valueCheck.querySelector('.container__form-input-block-label-main'); 
        const selectList = valueCheck.querySelector('ul');
        // console.log(typeof valSelect.innerText)
        if(valInput !== null) {
            if(!valInput.value) {
                valueCheck.classList.add('required');
                isValid = false;
            }
        }
        else if(valSelect) {
            if(valSelect.childNodes.length === 0) {
                valueCheck.classList.add('required');
                isValid = false;
            }
        }
    })
}









