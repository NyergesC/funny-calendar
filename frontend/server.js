function loadEvent (){

    let year = [
        {
            "month": "January",
            "id": "jan",
            "nth": 1,
            "days": 31,
        },
        {
            "month": "February",
            "id": "febr",
            "nth": 2,
            "days": 28,
        },
        {
            "month": "March",
            "id": "marc",
            "nth": 3,
            "days": 31,
        },
        {
            "month": "April",
            "id": "apr",
            "nth": 4,
            "days": 30,
        },
        {
            "month": "May",
            "id": "may",
            "nth": 5,
            "days": 31,
        },
        {
            "month": "June",
            "id": "june",
            "nth": 6,
            "days": 30,
        },
        {
            "month": "July",
            "id": "july",
            "nth": 7,
            "days": 31,
        },
        {
            "month": "August",
            "id": "aug",
            "nth": 8,
            "days": 31,
        },
        {
            "month": "September",
            "id": "sept",
            "nth": 9,
            "days": 30,
        },
        {
            "month": "October",
            "id": "oct",
            "nth": 10,
            "days": 31,
        },
        {
            "month": "November",
            "id": "nov",
            "nth": 11,
            "days": 30,
        },
        {
            "month": "December",
            "id": "dec",
            "nth": 12,
            "days": 31,
        }
    ];

    for (const month of year) {

        for(let day = 1; day <= 31; day++ ){
            
            document.getElementById("root").insertAdjacentHTML("beforeend", `
                <section>
                    <div class="card">
                        <time daytime="YYYY">2022</time
                        <time daytime="MM">${month.month}</time>
                        <time daytime="DD">${month.days}</time>
                </section>        
            
            `)
        }

           
    }

    console.log(year)
}
window.addEventListener("Load", loadEvent)