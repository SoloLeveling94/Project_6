// Click Carousel Previous and Next

const prev1 = document.getElementById('prev1');
const next1 = document.getElementById('next1');
const track1 = document.getElementById('track1');
const carouselWidth1 = document.getElementById("carousel1").offsetWidth;
let index1 = 0;

next1.addEventListener('click', ()=> {
    index1++;
    prev1.classList.add('show');
    track1.style.transform = `translateX(-${960}px)`;
    if(track1.offsetWidth - (index1 * carouselWidth1) < carouselWidth1) {
      next1.classList.add('hide');
     }
    });

prev1.addEventListener('click', ()=> {
    index1--;
    next1.classList.remove('hide');
    if (index1 === 0) {
        prev1.classList.remove('show');
     }
    //track1.style.transform = `translateX(-${index1 * carouselWidth1}px)`;
    track1.style.transform = `translateX(-${0}px)`;
    });

    // function nextClick(prev, next, track, index, carouselWidth) {
    //     index++;
    //     console.log(index);
    //     prev.classList.add('show');
    //     // track.style.transform = `translateX(-${index * carouselWidth}px)`;
    //     track.style.transform = `translateX(-${960}px)`;
    //     if(track.offsetWidth - (index * carouselWidth) < carouselWidth) {
    //       next.classList.add('hide');
    //     }
    //
    // }
    // function prevClick(prev, next, index, track, carouselWidth) {
    //     index--;
    //     console.log(index);
    //     next.classList.remove('hide');
    //     if (index === 0) {
    //         prev.classList.remove('show');
    //     }
    //     track.style.transform = `translateX(-${index * carouselWidth}px)`;
    //     track.style.transform = `translateX(-${0}px)`;
    // }
    // next1.addEventListener('click', function (){
    //     nextClick(prev1, next1, track1, index1, carouselWidth1);
    // });
    // prev1.addEventListener('click', function () {
    //     prevClick(prev1, next1, track1, index1, carouselWidth1);
    // })


const prev2 = document.getElementById('prev2');
const next2 = document.getElementById('next2');
const track2 = document.getElementById('track2');
const carouselWidth2 = document.getElementById("carousel2").offsetWidth;
let index2 = 0;

next2.addEventListener('click', () => {
    index2++;
    prev2.classList.add('show');
    // track.style.transform = `translateX(-${index * carouselWidth}px)`;
    track2.style.transform = `translateX(-${960}px)`;
    if(track2.offsetWidth - (index2 * carouselWidth2) < carouselWidth2) {
        next2.classList.add('hide');
        }
    });

prev2.addEventListener('click', ()=> {
    index2--;
    next2.classList.remove('hide');
    if (index2 === 0) {
        prev2.classList.remove('show');
        }
    track2.style.transform = `translateX(-${index2 * carouselWidth2}px)`;
    track2.style.transform = `translateX(-${0}px)`;
});

const prev3 = document.getElementById('prev3');
const next3 = document.getElementById('next3');
const track3 = document.getElementById('track3');
const carouselWidth3 = document.getElementById("carousel3").offsetWidth;
let index3 = 0;

next3.addEventListener('click', () => {
    index3++;
    prev3.classList.add('show');
    // track.style.transform = `translateX(-${index * carouselWidth}px)`;
    track3.style.transform = `translateX(-${960}px)`;
    if(track3.offsetWidth - (index3 * carouselWidth3) < carouselWidth3) {
        next3.classList.add('hide');
        }
    });

prev3.addEventListener('click', ()=> {
    index3--;
    next3.classList.remove('hide');
    if (index3 === 0) {
        prev3.classList.remove('show');
        }
    track3.style.transform = `translateX(-${index3 * carouselWidth3}px)`;
    track3.style.transform = `translateX(-${0}px)`;
});

const prev4 = document.getElementById('prev4');
const next4 = document.getElementById('next4');
const track4 = document.getElementById('track4');
const carouselWidth4 = document.getElementById("carousel4").offsetWidth;
let index4 = 0;

next4.addEventListener('click', () => {
    index4++;
    prev4.classList.add('show');
    // track.style.transform = `translateX(-${index * carouselWidth}px)`;
    track4.style.transform = `translateX(-${960}px)`;
    if(track4.offsetWidth - (index4 * carouselWidth4) < carouselWidth4) {
        next4.classList.add('hide');
        }
    });

prev4.addEventListener('click', ()=> {
    index4--;
    next4.classList.remove('hide');
    if (index4 === 0) {
        prev4.classList.remove('show');
        }
    track4.style.transform = `translateX(-${index4 * carouselWidth4}px)`;
    track4.style.transform = `translateX(-${0}px)`;
});


// Get display movie
const url_bestmovie = 'http://localhost:8000/api/v1/titles/1508669';
const url_moviesimdb1 = 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score';
const url_moviesimdb2 = 'http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score';
const url_moviesthisyear1 = 'http://localhost:8000/api/v1/titles/?year=2020&sort_by=-votes';
const url_moviesthisyear2 = 'http://localhost:8000/api/v1/titles/?year=2020&sort_by=-votes&page=2';
const url_moviesvotes1 = 'http://localhost:8000/api/v1/titles/?sort_by=-votes';
const url_moviesvotes2 = 'http://localhost:8000/api/v1/titles/?sort_by=-votes&page=2';
const url_belmondo1 = 'http://localhost:8000/api/v1/titles/?actor_contains=belmondo&sort_by=-votes';
const url_belmondo2 = 'http://localhost:8000/api/v1/titles/?actor_contains=belmondo&page=2&sort_by=-votes';

async function getFirstBestMovie() {
    try {
        await fetch(url_bestmovie).then(response => response.json())
            .then(data => {
                let affiche = '';
                affiche += `
                    <div id="bestmovie-img"
                        <a href="javascript:getInfo(${data.id});"><img src=${data.image_url}><alt=""></a>
                    </div>
                    <div id="bestmovie-text">
                        <h3>${data.original_title}</h3> 
                        <p>${data.long_description}</p>
                    </div>   
                    `;
                document.getElementById('solo').innerHTML = affiche;
            })
    } catch (e) {
        console.log(e.toString())
    }
}

async function getImgSrc(url1, url2, id) {
    try {
        Promise.all([
            await fetch(url1).then(response => response.json()),
            await fetch(url2).then(response => response.json())
        ])
            .then(data => {
                let affichage = '';
                let nb = 1;
                for (let i = 0; i < data.length; i++) {
                    for (let movie of data[i].results) {
                        if (nb < 8) {
                            nb++;
                            affichage += `<div class="card-container">
                                            <div class="card">
                                                <a href="javascript:getInfo(${movie.id});">
                                                <img src="${movie.image_url}"alt="" /></a>
                                            </div>
                                          </div>`;
                        }
                    }
                }
                document.getElementById(id).innerHTML = affichage;
            })
    } catch (e) {
        console.log(e.toString())
    }
}

async function getInfo(id) {
    try {
        let url = "http://localhost:8000/api/v1/titles/" + id.toString();
        await fetch(url).then(response => response.json())
            .then(data => {
                console.log(data);
                let modal = '';
                modal += `
                <div class ="modal-header">
                    <h2>${data.original_title}</h2>
                </div>
                <div class="modal-body">
                    <div class="modal-image">
                        <img src=${data.image_url}>
                    </div>
                    <div class="modal-text">
                        <p><strong>Genre:</strong> ${data.genres}</p>
                        <p><strong>Date de publication:</strong> ${data.date_published}</p>
                        <p><strong>Classification :</strong> ${data.rated}</p> 
                        <p><strong>Note IMDB :</strong> ${data.imdb_score}</p>
                        <p><strong>Réalisateur(s) :</strong> ${data.directors}</p>
                        <p><strong>Acteurs :</strong> ${data.actors}</p>
                        <p><strong>Pays :</strong> ${data.countries}</p>
                        <p><strong>Durée du film :</strong> ${data.duration} mn</p>
                        <p><strong>Recettes :</strong> ${data.worldwide_gross_income} $</p>
                        <p><strong>Description :</strong> ${data.description}</p>
                    </div>
                </div>`

                document.getElementById('modal-inner').innerHTML = modal;
                document.getElementById('my-modal').style.display = "block";

            })
    } catch (e) {
        console.log(e.toString())
    }
}

// Get the modal
let modal = document.getElementById("my-modal");

// Get close the modal
let close = document.getElementById("close");

let btn = document.getElementById("info");
let bestmovie = getFirstBestMovie();
let modal_bestmovie = getInfo(1508669);
let hide = modal.style.display = "none";
let movies_imdb = getImgSrc(url_moviesimdb1, url_moviesimdb2, "track1");
let movies_2020 = getImgSrc(url_moviesthisyear1, url_moviesthisyear2, "track2");
let movies_voted = getImgSrc(url_moviesvotes1, url_moviesvotes2, "track3");
let movies_belmondo = getImgSrc(url_belmondo1, url_belmondo2, "track4");
let best_movie = getFirstBestMovie();



// close the modal
close.onclick = function() {
  modal.style.display = "none";
}

btn.addEventListener('click', function () {
    getInfo(1508669);
})