const cvDatasFromStorage = localStorage.getItem('cvDatas')
const cvContainer = document.getElementById('cvContainer')
const editBtn = document.getElementById('edit')

const cvDatasToDatas = JSON.parse(cvDatasFromStorage)

localStorage.setItem('cvDatas', cvDatasFromStorage)


if (cvDatasToDatas === null) {
    cvContainer.innerHTML = `
        <div class="cv-info">
        There is no cv.
        </div>
    `
} else {
    cvContainer.innerHTML = cvDatasToDatas.map(cvdata => {
        let { name, education, address, experiences, skills } = cvdata

        return `
        <div class="cv-info">
            <ul>
                <li>Name : ${name}</li>
                <li>Education: ${education}</li>
                <li>Address: ${address}</li>
                <li>Experiences: ${experiences}</li>
                <li>Skills: ${skills}</li>
            </ul>
            <button class="edit-btn" id="edit">edit</button>
        </div> 
    `
    })
}

