const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')
const name = document.getElementById('name')
const education = document.getElementById('education')
const address = document.getElementById('address')
const experiences = document.getElementById('experiences')
const skills = document.getElementById('skills')
const submitBtn = document.getElementById('submitBtn')
const success = document.querySelector('[data-success]')
let cvDatas = []

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))

submitBtn.addEventListener('click', addToCv)

function addToCv() {
    let formControl = true

    let datas = {}

    if (validate(name)) {
        datas.name = name.value
    } else {
        let nameAlert = document.querySelector('.name')
        nameAlert.classList.add('show')
        setTimeout(() => {
            nameAlert.classList.remove('show')
        }, 2000);
        formControl = false
    }

    if (validate(education)) {
        datas.education = education.value
    } else {
        let educationAlert = document.querySelector('.education')
        educationAlert.classList.add('show')
        setTimeout(() => {
            educationAlert.classList.remove('show')
        }, 2000);
        formControl = false
    }

    if (validate(address)) {
        datas.address = address.value
    } else {
        let addressAlert = document.querySelector('.address')
        addressAlert.classList.add('show')
        setTimeout(() => {
            addressAlert.classList.remove('show')
        }, 2000);
        formControl = false
    }
    
    if (validate(experiences)) {
        datas.experiences = experiences.value
    } else {
        let experiencesAlert = document.querySelector('.experiences')
        experiencesAlert.classList.add('show')
        setTimeout(() => {
            experiencesAlert.classList.remove('show')
        }, 2000);
        formControl = false
    }

    if (validate(skills)) {
        datas.skills = skills.value
    } else {
        let skillsAlert = document.querySelector('.skills')
        skillsAlert.classList.add('show')
        setTimeout(() => {
            skillsAlert.classList.remove('show')
        }, 2000);
        formControl = false
    }

    if (!formControl) {
        return
    } else {
        cvDatas.push(datas)
        success.classList.add('show-success')
        name.value = ''
        education.value = ''
        address.value = ''
        experiences.value = ''
        skills.value = ''
    }
    localStorage.setItem('cvDatas', JSON.stringify(cvDatas))
}

cvDatas = JSON.parse(localStorage.getItem('cvDatas'))

localStorage.setItem('cvDatas', JSON.stringify(cvDatas))


function validate(x) {
    if (x.value === '') {
        return false
    }
    let namePattern = /^[a-zA-Z0-9!@#$&()-`.+,/\s\"]{2,30}$/
    return namePattern.test(x.value)
}


