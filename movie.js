/**
 * Movie Parameterized Constructor.
 * Creates a movie object for Ticket Direct's movies.
 * @param {string} name 
 * @param {int} date 
 * @param {string} rating 
 * @param {string} duration 
 * @param {string} genre 
 * @param {string} description 
 * @param {string} poster poster file located within the Ticket Direct Folder
 * @param {string} trailer embedded YouTube file of the movie's trailer
 * @param {boolean} preSale 
 */
function Movie(name, date, rating, duration, genre, description, poster, trailer, preSale) {
    this.name = name;
    this.date = date;
    this.rating = rating;
    this.duration = duration;
    this.genre = genre;
    this.description = description;
    this.poster = poster;
    this.trailer = trailer;
    this.preSale = preSale;
}

// now playing movie objects
const avatar = new Movie("Avatar", 2009, "PG-13", "2 hrs 42 mins", "Action, Adventure, Fantasy",
    "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "MoviePoster/avatar.jpg", "https://www.youtube.com/embed/5PSNL1qE6VY", false);
const titanic = new Movie("Titanic", 1997, "PG-13", "3 hrs 14 mins", "Drama, Romance",
    "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S.",
    "MoviePoster/titanic.jpg", "https://www.youtube.com/embed/tXbGHqiAmME", false);
const starWars = new Movie("Star Wars: The Force Awakens", 2015, "PG-13", "2 hrs 16 mins", "Action, Adventure, Fantasy",
    "Three decades after the Empire's defeat, a new threat arises in the militant First Order. Stormtrooper defector Finn and the scavenger Rey are caught up in the Resistance's search for the missing Luke Skywalker.",
    "MoviePoster/star-wars.jpg", "https://www.youtube.com/embed/sGbxmsDFVnE", false);
const avengers = new Movie("Avengers: Infinity War", 2018, "PG-13", "2 hrs 29 mins", "Action, Adventure, Fantasy",
    "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    "MoviePoster/avengers.jpg", "https://www.youtube.com/embed/6ZfuNTqbHE8", false);
const jurassic = new Movie("Jurassic World", 2015, "PG-13", "2 hrs 4 mins", "Action, Adventure, Sci-Fi",
    "A new theme park, built on the original site of Jurassic Park, creates a genetically modified hybrid dinosaur, which escapes containment and goes on a killing spree.",
    "MoviePoster/jurassic_world.jpg", "https://www.youtube.com/embed/RFinNxS5KN4", false);
const furious = new Movie("Furious 7", 2015, "PG-13", "2 hrs 17 mins", "Action, Crime, Thriller",
    "Deckard Shaw seeks revenge against Dominic Toretto and his family for his comatose brother.",
    "MoviePoster/furious7.jpg", "https://www.youtube.com/embed/Skpu5HaVkOc", false);
const blackPanther = new Movie("Black Panther", 2018, "PG-13", "2 hrs 14 mins", "Action, Adventure, Sci-Fi",
    "After the death of his father, Prince T'Challa ascends to the throne of the small African country of Wakanda. T'Challa is also Black Panther, superhero. Now not only must he govern his country, but defeat a dangerous adversary.",
    "MoviePoster/black_panther.jpg", "https://www.youtube.com/embed/xjDjIWPwcPU", false);
const harryPotter = new Movie("Harry Potter and the Deathly Hallows: Part 2", 2011, "PG-13", "2 hrs 10 mins", "Adventure, Drama, Fantasy",
    "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    "MoviePoster/harry_potter.jpg", "https://www.youtube.com/embed/mObK5XD8udk", false);
const frozen = new Movie("Frozen", 2013, "PG", "1 hr 42 mins", "Animation, Adventure, Comedy",
    "When the newly-crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
    "MoviePoster/frozen.jpg", "https://www.youtube.com/embed/TbQm5doF_Uc", false);
const beauty = new Movie("Beauty and the Beast", 2017, "PG", "2 hrs 9 mins", "Family, Fantasy, Musical",
    "A selfish prince is cursed to become a monster for the rest of his life, unless he learns to fall in love with a beautiful young woman he keeps prisoner.",
    "MoviePoster/beauty&beast.jpg", "https://www.youtube.com/embed/OvW_L8sTu5E", false);
const incredibles = new Movie("Incredibles 2", 2018, "PG", "1 hr 58 mins", "Animation, Action, Adventure",
    "Bob Parr (Mr. Incredible) is left to care for the kids while Helen (Elastigirl) is out saving the world.",
    "MoviePoster/incredibles2.jpg", "https://www.youtube.com/embed/i5qOzqD9Rms", false);
const minions = new Movie("Minions", 2015, "PG", "1 hr 31 mins", "Animation, Action, Adventure",
    "Minions Stuart, Kevin, and Bob are recruited by Scarlet Overkill, a supervillain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
    "MoviePoster/minions.jpg", "https://www.youtube.com/embed/eisKxhjBnZ0", false);
const transformers = new Movie("Transformers: Dark of the Moon", 2011, "PG-13", "2 hrs 34 mins", "Action, Adventure, Sci-Fi",
    "The Autobots learn of a Cybertronian spacecraft hidden on the moon, and race against the Decepticons to reach it and to learn its secrets.",
    "MoviePoster/transformers.jpg", "https://www.youtube.com/embed/kHRf01Gjosk", false);
const skyfall = new Movie("Skyfall", 2012, "PG-13", "2 hrs 23 mins", "Action, Adventure, Thriller",
    "Bond's loyalty to M is tested when her past comes back to haunt her. When MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost.",
    "MoviePoster/skyfall.jpg", "https://www.youtube.com/embed/6kw1UVovByw", false);
const darkKnight = new Movie("The Dark Knight Rises", 2012, "PG-13", "2 hrs 44 mins", "Action, Thriller",
    "Eight years after the Joker's reign of anarchy, Batman, with the help of the enigmatic Catwoman, is forced from his exile to save Gotham City, now on the edge of total annihilation, from the brutal guerrilla terrorist Bane.",
    "MoviePoster/dark_knight.jpg", "https://www.youtube.com/embed/g8evyE9TuYk", false);
const toyStory3 = new Movie("Toy Story 3", 2010, "G", "1 hr 43 mins", "Animation, Adventure, Comedy",
    "The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.",
    "MoviePoster/toy_story_3.jpg", "https://www.youtube.com/embed/TNMpa5yBf5o", false);
const pirates = new Movie("Pirates of the Caribbean: Dead Man's Chest", 2006, "PG-13", "2 hrs 31 mins", "Action, Adventure, Fantasy",
    "Jack Sparrow races to recover the heart of Davy Jones to avoid enslaving his soul to Jones' service, as other friends and foes seek the heart for their own agenda as well.",
    "MoviePoster/pirates.jpg", "https://www.youtube.com/embed/MzIEHvsb1gU", false);
const despicable = new Movie("Despicable Me 3", 2017, "PG", "1 hr 29 mins", "Animation, Action, Adventure",
    "Gru meets his long-lost charming, cheerful, and more successful twin brother Dru who wants to team up with him for one last criminal heist.",
    "MoviePoster/despicable_me3.jpg", "https://www.youtube.com/embed/6DBi41reeF0", false);
const findingDory = new Movie("Finding Dory", 2016, "PG", "1 hr 37 mins", "Animation, Adventure, Comedy",
    "The friendly but forgetful blue tang fish, Dory, begins a search for her long-lost parents, and everyone learns a few things about the real meaning of family along the way.",
    "MoviePoster/finding_dory.jpg", "https://www.youtube.com/embed/3JNLwlcPBPI", false);
const alice = new Movie("Alice in Wonderland", 2010, "PG", "1 hr 49 mins", "Adventure, Family, Fantasy",
    "Nineteen-year-old Alice returns to the magical world from her childhood adventure, where she reunites with her old friends and learns of her true destiny: to end the Red Queen's reign of terror.",
    "MoviePoster/alice.jpg", "https://www.youtube.com/embed/KOZ9wy-j9P8", false);

// pre-sale movie objects
const lego = new Movie("The Lego Movie 2: The Second Part", "February 8th 2019", "", "", "Animation, Action, Adventure",
    "It's been five years since everything was awesome and the citizens are facing a huge new threat: LEGO DUPLO® invaders from outer space, wrecking everything faster than they can rebuild.",
    "MoviePoster/lego_movie.jpg", "https://www.youtube.com/embed/XvHSlHhh1gk", true);
const trainYourDragon = new Movie("How to Train Your Dragon: The Hidden World", "February 22nd 2019", "", "", "Animation, Action, Adventure",
    "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless' discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup's reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",
    "MoviePoster/train_your_dragon.jpg", "https://www.youtube.com/embed/SkcucKDrbOI", true);
const dumbo = new Movie("Dumbo", "March 29th 2019", "", "", "Family, Fantasy",
    "A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.",
    "MoviePoster/dumbo.jpg", "https://www.youtube.com/embed/-QPdRfqTnt4", true);
const aladdin = new Movie("Aladdin", "May 24th 2019", "", "", "Adventure, Family, Fantasy ",
    "A live-action retelling of the 1992 Disney film of the same name.",
    "MoviePoster/aladdin.jpg", "https://www.youtube.com/embed/9g5knnlF7Zo", true);
const godzilla = new Movie("Godzilla: King of the Monsters", "May 31st 2019", "", "", "Action, Adventure, Fantasy",
    "The crypto-zoological agency Monarch faces off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah.",
    "MoviePoster/godzilla.jpg", "https://www.youtube.com/embed/wVDtmouV9kM", true);
const darkPhoenix = new Movie("Dark Phoenix", "June 7th 2019", "", "", "Action, Adventure, Sci-Fi",
    "Jean Grey begins to develop incredible powers that corrupt and turn her into a Dark Phoenix. Now the X-Men will have to decide if the life of a team member is worth more than all the people living in the world.",
    "MoviePoster/dark_phoenix.jpg", "https://www.youtube.com/embed/QWbMckU3AOQ", true);
const toyStory4 = new Movie("Toy Story 4", "June 21st 2019", "", "", "Animation, Adventure, Comedy",
    "When a new toy called \"Forky\" joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.",
    "MoviePoster/toy_story_4.jpg", "https://www.youtube.com/embed/LDXYRzerjzU", true);
const spiderman = new Movie("Spider-Man: Far From Home", "July 5th 2019", "", "", "Action, Adventure, Comedy ",
    "After the events of the untitled Avengers film Peter Parker and his friends go on summer vacation to Europe and there Peter finds himself trying to save his friends against a villain known as Mysterio.",
    "MoviePoster/spider-man.png", "https://www.youtube.com/embed/nQGKjlTbIWg", true);
const it = new Movie("It: Chapter Two", "September 6th 2019", "", "", "Horror, Thriller",
    "27 years later, the Losers Club have grown up and moved away, until a devastating phone call brings them back.",
    "MoviePoster/it.jpg", "https://www.youtube.com/embed/TYUUp-4C0PI", true);
const starWars9 = new Movie("Star Wars: Episode IX", "December 20th 2019", "", "", "Action, Adventure, Fantasy ",
    "The conclusion of the new 'Star Wars' trilogy.",
    "MoviePoster/star_wars9.png", "https://www.youtube.com/embed/1TtqCD87GTI", true);

let movieList = [avatar, titanic, starWars, avengers, jurassic, furious, blackPanther, harryPotter, frozen, beauty,
    incredibles, minions, transformers, skyfall, darkKnight, toyStory3, pirates, despicable, findingDory, alice,
    lego, trainYourDragon, dumbo, aladdin, godzilla, darkPhoenix, toyStory4, spiderman, it, starWars9];

// movie selection by user from homepage
let selected = localStorage.getItem("movie");

// elements from the movieinfo page
let movieName = document.getElementById("movie_name");
let movieYear = document.getElementById("movie_year");
let movieRating = document.getElementById("movie_rating");
let movieDuration = document.getElementById("movie_duration");
let movieGenre = document.getElementById("movie_genre");
let movieDescription = document.getElementById("movie_description");
let moviePoster = document.getElementById("movie_poster");
let movieTrailer = document.getElementById("movie_trailer");
let movieReleaseDate = document.getElementById("movie_release_date");

// elements get correct movie info
for (let i = 0; i < movieList.length; i++) {
    if (selected == movieList[i].name) {
        movieName.innerHTML = movieList[i].name;
        movieGenre.innerHTML = movieList[i].genre;
        movieDescription.innerHTML = movieList[i].description;
        moviePoster.setAttribute("src", movieList[i].poster);
        movieTrailer.setAttribute("src", movieList[i].trailer);

        if (!movieList[i].preSale) {
            movieYear.innerHTML = " (" + movieList[i].date + ")";
            movieRating.innerHTML = movieList[i].rating + ", ";
            movieDuration.innerHTML = movieList[i].duration;
        }
        else {
            movieReleaseDate.innerHTML = "Release Date: " + movieList[i].date;
        }
        break;
    }
}

/**
 * movieChoice function.
 * locally stores the selected movie from index.html or movies.html.
 * @param {string} movieTitle the selected movie by the user
 */
function movieChoice(movieTitle) {
    localStorage.setItem("movie", movieTitle);
}

/**
 * getPoster function.
 * goes through the list of movies to find the poster file of the selected movie
 * adds the file to display the movie poster on the page
 * @param {string} movieId the selected movie by the user
 */
function getPoster(movieId) {
    let movieSelection = document.getElementById(movieId);
    for (let i = 0; i < movieList.length; i++) {
        if (selected == movieList[i].name) {
            movieSelection.setAttribute("src", movieList[i].poster);
        }
    }
}

/**
 * getPreSale function.
 * goes through the list of movies to determine if the selected movie is a pre-sale movie or not
 * @param {string} movieId the selected movie by the user
 * @return {boolean} if movie is a pre-sale movie or not 
 */
function getPreSale(movieId) {
    let movieSelection = document.getElementById(movieId);
    for (let i = 0; i < movieList.length; i++) {
        if (selected == movieList[i].name) {
            return movieList[i].preSale;
        }
    }
    return false;
}

/**
 * getPreSaleDate function.
 * for those movies that are pre-sale, find its date
 * @param {string} movieId the selected movie by the user
 * @return {string} date property of the movie object
 */
function getPreSaleDate(movieId) {
    let movieSelection = document.getElementById(movieId);
    for (let i = 0; i < movieList.length; i++) {
        if (selected == movieList[i].name & movieList[i].preSale) {
            return movieList[i].date;
        }
    }
}
