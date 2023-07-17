const MovieApi = [
    {
        name: "Harriet",
        year: 2019,
        id: 1,
        src: "https://static.bunnycdn.ru/i/cache/images/9/9b/9b91e7f8460f0f1dadd481ea7e1a33e4.jpg",
    },

    {
        name: "Black Panther",
        year: 2020,
        id: 2,
        src: "https://static.bunnycdn.ru/i/cache/images/7/76/7639b71fe0fb8f3a8b569a0ca444220e.jpg",
    },

    {
        name: "Samu Alajo",
        year: 2020,
        id: 2,
        src: "https://static.bunnycdn.ru/i/cache/images/b/b4/b422aa2f9f90e0cfc9af1f28e80e302e.jpg",
    },
    {
        name: "Black Panther",
        year: 2020,
        id: 2,
        src: "https://static.bunnycdn.ru/i/cache/images/d/da/da1dc41712cebc4143fff73a51b2b6fe.jpg",
    },
    {
        name: "The Last Deal",
        year: 2020,
        id: 2,
        src: "https://static.bunnycdn.ru/i/cache/images/7/7c/7c056fae0122eeed46e209400db4cf6b.jpg",
    },
    
    {
        name: "Black Panther",
        year: 2020,
        id: 2,
        src: "https://static.bunnycdn.ru/i/cache/images/8/80/804db31465745baa9e64a31dcfa87a06.jpg",
    },
    {
        name: "Black Panther",
        year: 2020,
        id: 2,
        src: "https://static.bunnycdn.ru/i/cache/images/e/e5/e50f29340500f4d12369b4c079986ae4.jpg",
    },
    {
        name: "Less Plan",
        year: 2020,
        id: 2,
        src: "https://static.bunnycdn.ru/i/cache/images/b/b0/b0116f9c565623a64c72b4865bf7779a.jpg",
    },
    {
        name: "Showing Up",
        year: 2020,
        id: 2,
        src: "https://static.bunnycdn.ru/i/cache/images/6/68/68d8591d75be2be2ddf3a79df9d16151.jpg",
    },
    {
        name: "Just Mercy",
        year: 2021,
        id: 3,
        src: "https://static.bunnycdn.ru/i/cache/images/4/45/453ff442cc3c698307820a9a1faec266.jpg",
    },
    {
        name: "Abejoye",
        year: 2022,
        id: 4,
        src: "https://static.bunnycdn.ru/i/cache/images/2/2a/2a3262b7d4f103db0dbff679296f4723.jpg",
    },
    {
        name: "Adesewawed",
        year: 2027,
        id: 4,
        src: "https://static.bunnycdn.ru/i/cache/images/8/89/89e59db8f82006db594d14a6758bfac6.jpg",
    }
    
]

// var one = document.querySelector('.name');
// var two = document.querySelector('.year');
// var three = document.querySelector('.src');

// let movie1 = MovieApi[0]
// one = movie1.name;
// two = movie1.year;
// three = movie1.src;
 
// console.log(one);
// console.log(two);
// console.log(three);


// const shew = ['sdd', 'dsfs', 'afas', 'asf']
// // shew[1]
// for (let i = 0; i < 51; i++){
//     console.log(shew[i]);
// }

for (let movie of MovieApi) {
    console.log (MovieApi.length)
    const element = `
<div class="card" id="card">
    <div class="img">
<img src=${movie.src} alt="">
</div>
<p>Title: <span class="title"> ${movie.name}</span></p>
<p>Year of production: <span class="year"> ${movie.year}</span></p>
</div>
`
    
const Movie = document.getElementById("container")
const insert = Movie.insertAdjacentHTML('afterbegin', element);
    const Movies = document.getElementById("card");
    
    console.log(movie);
}



// Movie.appendChild(element);


 

