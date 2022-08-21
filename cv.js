const cvDatasFromStorage = localStorage.getItem('cvDatas')
const cvContainer = document.getElementById('cvContainer')

const cvDatasToDatas = JSON.parse(cvDatasFromStorage)

cvContainer.innerHTML = cvDatasToDatas.map(cvdata => {
    let {name, education, address, experiences, skills} = cvdata

    return `
        <div class="cv-info">
            <ul>
                <li>Name : ${name}</li>
                <li>Education: ${education}</li>
                <li>Address: ${address}</li>
                <li>Experiences: ${experiences}</li>
                <li>Skills: ${skills}</li>
            </ul>
        </div> 
    `
})
