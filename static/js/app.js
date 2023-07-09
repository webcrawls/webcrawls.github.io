(() => {
    const target = "apocrypha"
    let input = ""
    let currentIndex = 0
    document.addEventListener("keydown", (e) => {
        if (currentIndex >= target.length) return
        if (target[currentIndex] === e.key) {
            input += target[currentIndex]
            currentIndex += 1
        }

        console.log({input, currentIndex})

        if (input === target) {
            const el = document.createElement("link")
            el.href = "https://cdn.jsdelivr.net/npm/@apocrypha/core/css/apocrypha.min.css"
            el.rel = "stylesheet"

            document.body.appendChild(el)
        }
    })
})();