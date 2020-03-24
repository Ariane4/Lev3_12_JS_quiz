let data = [
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
        question: "Which ocean lies on the east coast of the United States?",
        choice: ["Eastern", "Pacific", "Indian", "Atlantic"],
        answer: "Atlantic"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
        question: "Which is the world's highest mountain?",
        choice: ["K2", "Makalu", "Mount Everest", "Kilimanjaro"],
        answer: "Mount Everest"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
        question: "Which of these cities is not in Europe?",
        choice: ["Prague", "Moscow", "Barcelona", "Reykjavik"],
        answer: "Moscow"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
        question: "True or False: Iceland is covered in ice.",
        choice: [true, false],
        answer: false
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
        question: "The United Kingdom is comprised of how many countries?",
        choice: [1, 2, 3, 4],
        answer: 4
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
        question: "Which of the following countries do not border France?",
        choice: ["Germany", "Netherlands", "Spain", "Italy"],
        answer: "Netherlands"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
        question: "Which U.S. state is the Grand Canyon located in?",
        choice: ["Wyoming", "Arizona", "New Mexico", "Nevada"],
        answer: "Arizona"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
        question: "Which is the smallest country, measured by total land area?",
        choice: ["Maldives", "Monaco", "Vatican"],
        answer: "Vatican"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
        question: "Which is the longest river in the world?",
        choice: ["Amazon River", "Congo River", "Yellow River", "Nile River"],
        answer: "Nile River"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
        question: "Which is the largest body of water?",
        choice: ["indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Nile River"],
        answer: "Pacific Ocean"
    }
]

// let content = document.getElementById("content");
// let pic = document.createElement("img")
// let question = document.createElement("h2")

// let button1 = document.createElement("button")
// button1.innerHTML = data[0].choice[0]
// let button2 = document.createElement("button")
// button2.innerHTML = data[0].choice[0]
// let button3 = document.createElement("button")
// button3.innerHTML = data[0].choice[0]
// let button4 = document.createElement("button")
// button4.innerHTML = data[0].choice[0]

// var fourButtons = document.querySelectorAll("button")
// fourButtons.className = "blackButtons";
// var fourButtonsStyle = document.getElementsByClassName("blackButtons")

// for (let item of fourButtons) {
//     item.className = "blackButtons";
//     item.style.display = "inline-block";
//     item.style.background = "black";
//     item.style.color = "white";
//     item.style.width = "20px";
// }
// console.log(fourButtons)
// content.appendChild(pic)
// content.appendChild(button1)
// content.appendChild(button2)
// content.appendChild(button3)
// content.appendChild(button4)

//Anass Version für 1. Teil - Anzeigen der Elemente
// data.forEach(data => {
//     let figure = document.createElement("figure")
//     document.body.appendChild(figure)

//     let img = document.createElement("img")
//     img.src = data.url
//     //img.setAttribute("src", data.url)
//     figure.appendChild(img)

//     let figcaption = document.createElement("figcaption")
//     figure.appendChild(figcaption)

//     let h2 = document.createElement("h2")
//     h2.innerText = data.question
//     figcaption.appendChild(h2)

//     for (let i = 0; i < data.choice.length; i++) {
//         let button = document.createElement("button")
//         button.innerText = data.choice[i]
//         figcaption.appendChild(button)
//     }
// })

//Anass Version für 2. Teil - Quiz funktioniert
data.forEach(data => {
    let figure = document.createElement("figure")
    document.body.appendChild(figure)

    let img = document.createElement("img")
    img.src = data.url
    //img.setAttribute("src", data.url)
    figure.appendChild(img)

    let figcaption = document.createElement("figcaption")
    figure.appendChild(figcaption)

    let h2 = document.createElement("h2")
    h2.innerText = data.question
    figcaption.appendChild(h2)

    for (let i = 0; i < data.choice.length; i++) {
        let button = document.createElement("button")
        button.innerText = data.choice[i]
        button.className = data.answer.toString()
        figcaption.appendChild(button)
    }
    let btn = document.getElementsByClassName(data.answer.toString())
    for (let j = 0; j < btn.length; j++) {
        btn[j].addEventListener("click", (event) => {
            console.log(event)
            if (event.target.innerHTML == data.answer) {
                event.target.style.background = "green"
            } else {
                event.target.style.background = "red"
            }
            for (let m of btn) {
                m.disabled = true
            }
        })
    }
})

// noch auf GIT HUB hochladen!!!!