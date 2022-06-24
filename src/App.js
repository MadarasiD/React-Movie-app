import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox'
import AddFavorites from './components/AddFavorites'

function App() {

  const [ movies,setMovies] = useState([
   { "Title": "Star Wars",
    "Year": "1977",
    "imdbID": "tt0076759",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"
},
{
    "Title": "Star Wars: Episode V - The Empire Strikes Back",
    "Year": "1980",
    "imdbID": "tt0080684",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
},
{
    "Title": "Star Wars: Episode VI - Return of the Jedi",
    "Year": "1983",
    "imdbID": "tt0086190",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
},
{
    "Title": "Star Wars: Episode VII - The Force Awakens",
    "Year": "2015",
    "imdbID": "tt2488496",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg"
},
{
    "Title": "Star Wars: Episode I - The Phantom Menace",
    "Year": "1999",
    "imdbID": "tt0120915",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
},
{
    "Title": "Star Wars: Episode III - Revenge of the Sith",
    "Year": "2005",
    "imdbID": "tt0121766",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg"
},
{
    "Title": "Star Wars: Episode II - Attack of the Clones",
    "Year": "2002",
    "imdbID": "tt0121765",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg"
},
{
    "Title": "Star Wars: Episode VIII - The Last Jedi",
    "Year": "2017",
    "imdbID": "tt2527336",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg"
},
{
    "Title": "Rogue One: A Star Wars Story",
    "Year": "2016",
    "imdbID": "tt3748528",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg"
},
{
  "Title": "Star Wars: Episode IX - The Rise of Skywalker",
  "Year": "2019",
  "imdbID": "tt2527338",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMDljNTQ5ODItZmQwMy00M2ExLTljOTQtZTVjNGE2NTg0NGIxXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg"
},
{
  "Title": "The Avengers",
  "Year": "2012",
  "imdbID": "tt0848228",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
},
{
  "Title": "Avengers: Endgame",
  "Year": "2019",
  "imdbID": "tt4154796",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
},
{
  "Title": "Avengers: Infinity War",
  "Year": "2018",
  "imdbID": "tt4154756",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
},
{
  "Title": "Avengers: Age of Ultron",
  "Year": "2015",
  "imdbID": "tt2395427",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg"
},
{
  "Title": "The Avengers",
  "Year": "1998",
  "imdbID": "tt0118661",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
},
{
  "Title": "The Avengers: Earth's Mightiest Heroes",
  "Year": "2010–2012",
  "imdbID": "tt1626038",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYzA4ZjVhYzctZmI0NC00ZmIxLWFmYTgtOGIxMDYxODhmMGQ2XkEyXkFqcGdeQXVyNjExODE1MDc@._V1_SX300.jpg"
},
{
  "Title": "Ultimate Avengers: The Movie",
  "Year": "2006",
  "imdbID": "tt0491703",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg"
},
{
  "Title": "Ultimate Avengers II",
  "Year": "2006",
  "imdbID": "tt0803093",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZjI3MTI5ZTYtZmNmNy00OGZmLTlhNWMtNjZiYmYzNDhlOGRkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
},
{
  "Title": "The Avengers",
  "Year": "1961–1969",
  "imdbID": "tt0054518",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZWQwZTdjMDUtNTY1YS00MDI0LWFkNjYtZDA4MDdmZjdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
},
{
  "Title": "Avengers Assemble",
  "Year": "2012–2019",
  "imdbID": "tt2455546",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg"
},
{
  "Title": "John Wick",
  "Year": "2014",
  "imdbID": "tt2911666",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
},
{
  "Title": "John Wick: Chapter 2",
  "Year": "2017",
  "imdbID": "tt4425200",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjE2NDkxNTY2M15BMl5BanBnXkFtZTgwMDc2NzE0MTI@._V1_SX300.jpg"
},
{
  "Title": "John Wick: Chapter 3 - Parabellum",
  "Year": "2019",
  "imdbID": "tt6146586",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMDg2YzI0ODctYjliMy00NTU0LTkxODYtYTNkNjQwMzVmOTcxXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg"
},
{
  "Title": "John Wick: Chapter 3 - Parabellum: HBO First Look",
  "Year": "2019",
  "imdbID": "tt10275370",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYTE0MTE2ZDAtNDNlOC00OGQwLTkxOTUtNzhlMjA1MWJkZWEyXkEyXkFqcGdeQXVyOTkwMTc4ODQ@._V1_SX300.jpg"
},
{
  "Title": "John Wick Chapter 2: Wick-vizzed",
  "Year": "2017",
  "imdbID": "tt7161870",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BM2I0YWM3Y2EtYzU1YS00MWE1LTg0YjUtNWQ2YTBjZWQ5Mzc1XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
},
{
  "Title": "John Wick: Don't F*#% with John Wick",
  "Year": "2015",
  "imdbID": "tt5278630",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ2YzgxNDUtMmM1NS00MzI1LWI1NjYtZjUyYjBhZjQ5MDdmXkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_SX300.jpg"
},
{
  "Title": "John Wick: Kill Count",
  "Year": "2017",
  "imdbID": "tt7161942",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjcyM2UzMGQtYzkzYy00MGQ3LWE0MTAtNjIzNzk5MTBhNGQ3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
},
{
  "Title": "John Wick: The Assassin's Code",
  "Year": "2015",
  "imdbID": "tt5278698",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZmQyNDM5OWEtMTliMS00MDIzLWJlZDAtZDYwNTg2YzJkNzFlXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
},
{
  "Title": "John Wick: Car Fu Ride-Along",
  "Year": "2017",
  "imdbID": "tt7161902",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYzllZGEwODUtZDE1ZS00ODA4LTljNTItZjRiMzI2NGNhMjg3XkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
},
{
  "Title": "Retro Wick: Exploring the Unexpected Success of 'John Wick'",
  "Year": "2017",
  "imdbID": "tt7161846",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNTZiMGM5MjItY2VjMi00NmE0LWFlMDItYjA4MzEzMjI4Y2Y2XkEyXkFqcGdeQXVyODA1NjQ0OTY@._V1_SX300.jpg"
},
{
  "Title": "Police Story",
  "Year": "1985",
  "imdbID": "tt0089374",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMWJhZmI5ZWUtYjgyNy00NTk1LWIzODktYTE3NzQzNzJlOTgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
},
{
  "Title": "New Police Story",
  "Year": "2004",
  "imdbID": "tt0386005",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMGRjYjFmYjAtNDExMy00NTRkLTgwMTAtYjI1ZGY1NTYxMjNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
},
{
  "Title": "Police Story 2",
  "Year": "1988",
  "imdbID": "tt0095403",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZDZjOTYwMjAtOWQ5YS00MjVhLTlkMmEtMjUyYTczYTk1YjkyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
},
{
  "Title": "Police Story: Lockdown",
  "Year": "2013",
  "imdbID": "tt2599716",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTUwODUyNDM3NV5BMl5BanBnXkFtZTgwNzk0MzA2NTE@._V1_SX300.jpg"
},
{
  "Title": "Police Story",
  "Year": "1973–1987",
  "imdbID": "tt0069620",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNDcyNzhkOGEtOTY3MC00MDdhLWE2YjAtNzgwZjczMWIwNTRlXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_SX300.jpg"
},
{
  "Title": "Police Force: An Inside Story",
  "Year": "2004",
  "imdbID": "tt0416120",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMDQxMWVlODktMGZlOC00YTc4LWI0NzYtNDFmNDZiODIwMzUzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
},
{
  "Title": "Police Story: The Freeway Killings",
  "Year": "1987",
  "imdbID": "tt0093757",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BM2VmZjA2ZmEtOTU4OS00OTY1LWFiOGQtODg2MGFiNjFiMjFmXkEyXkFqcGdeQXVyMzU0NzkwMDg@._V1_SX300.jpg"
},
{
  "Title": "Police Story: Gladiator School",
  "Year": "1988",
  "imdbID": "tt0095885",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZjY5ZjdjMDgtZjk0MC00NWE2LWIyYzAtMzk4YjlmMzY1ZmZlXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_SX300.jpg"
},
{
  "Title": "Police Story: Burnout",
  "Year": "1988",
  "imdbID": "tt0095883",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMzFjMGMzODctZTU2OC00YjUxLTljNmEtYjg0NGJlM2VjZWMzXkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_SX300.jpg"
},
{
  "Title": "Police Dog Story",
  "Year": "1961",
  "imdbID": "tt0055316",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BM2EzYjVjM2ItN2ZlOC00M2FmLWJlOTktMDFkMjE5ZTZlY2QzXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"
},
{
  "Title": "Max Payne",
  "Year": "2008",
  "imdbID": "tt0467197",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNzM5OTAxYmQtODRkZC00ZGZlLTlhNzYtNzFiODVjMTY4MWU2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
},
{
  "Title": "Max Payne",
  "Year": "2001",
  "imdbID": "tt0291337",
  "Type": "game",
  "Poster": "https://m.media-amazon.com/images/M/MV5BY2Q3YTI0OGUtZmFlNi00ZTEzLTkzYTMtNWFhMWJhODNlODQ1XkEyXkFqcGdeQXVyNzU3Nzk4MDQ@._V1_SX300.jpg"
},
{
  "Title": "Max Payne 2: The Fall of Max Payne",
  "Year": "2003",
  "imdbID": "tt0366758",
  "Type": "game",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYTFhNWRmZDgtZDUzZC00NDVmLWE3NzgtMTdkMDcxMDBmMTdmXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
},
{
  "Title": "Max Payne 3",
  "Year": "2012",
  "imdbID": "tt1407064",
  "Type": "game",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxMjY1OTAyOF5BMl5BanBnXkFtZTcwNTMxMjU2Ng@@._V1_SX300.jpg"
},
{
  "Title": "Max Payne: Hero",
  "Year": "2003",
  "imdbID": "tt0473507",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYjM1ODFlZGItMTI2MC00MzY1LTk3MjQtOTIyNWU5ZWE5ZWI0XkEyXkFqcGdeQXVyMzYzNzc1NjY@._V1_SX300.jpg"
},
{
  "Title": "Max Payne: Retribution",
  "Year": "2017",
  "imdbID": "tt4581198",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMGEyYWQ2YmUtZDY3Yi00ODBmLWE3YTAtYjI2ODgyZGMzODVjXkEyXkFqcGdeQXVyNDg0MTgzMzk@._V1_SX300.jpg"
},
{
  "Title": "Max Payne: Valhalla",
  "Year": "2012",
  "imdbID": "tt2150820",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNWY1NDZmZTAtMDRkMS00MzJiLWE5ZDktZjgxN2Y5M2Q3ZjAxXkEyXkFqcGdeQXVyMzYzNzc1NjY@._V1_SX300.jpg"
},
{
  "Title": "Max Payne: Movie Special",
  "Year": "2008",
  "imdbID": "tt1323600",
  "Type": "movie",
  "Poster": "N/A"
},
{
  "Title": "Mad Max Payne",
  "Year": "2015",
  "imdbID": "tt5008002",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYjI1MTUxYjktZjI4Yi00MzExLTkyOWQtMzZmYjY5OTZkNjA4XkEyXkFqcGdeQXVyMzExODcwMTk@._V1_SX300.jpg"
},
{
  "Title": "Max Payne: Days of Revenge",
  "Year": "2009",
  "imdbID": "tt1964911",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTQ2NjQyNDctNTZlNi00ZjU0LWExNTMtZjNlODEwYjM3NDlhXkEyXkFqcGdeQXVyMjQzNjg5MjQ@._V1_SX300.jpg"
},
{
  "Title": "The Fast and the Furious",
  "Year": "2001",
  "imdbID": "tt0232500",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
},
{
  "Title": "The Fast and the Furious: Tokyo Drift",
  "Year": "2006",
  "imdbID": "tt0463985",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"
},
{
  "Title": "The Fast and the Furious",
  "Year": "1954",
  "imdbID": "tt0046969",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZmI3YmNhNzktOTMzNC00ODg4LTk3YmQtMGI2ZGQzNzcwZmRkXkEyXkFqcGdeQXVyMTQ2MjQyNDc@._V1_SX300.jpg"
},
{
  "Title": "Fast and the Furious: Tokyo Drift - The Japanese Way",
  "Year": "2006",
  "imdbID": "tt0878117",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg"
},
{
  "Title": "Fast and Furious 6: The Game",
  "Year": "2013",
  "imdbID": "tt4106374",
  "Type": "game",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNGFiNjYzOTQtMzAyYS00OTUwLWIxMGUtZGQ5NjI2YjgzMGJmXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg"
},
{
  "Title": "Tasmanian Devil: The Fast and Furious Life of Errol Flynn",
  "Year": "2007",
  "imdbID": "tt1008725",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZjFjYTQxNWUtNTQ5Yy00ZjA3LTllMTYtM2UxYjM3MGNkM2NhXkEyXkFqcGdeQXVyNzQzNTcwMTU@._V1_SX300.jpg"
},
{
  "Title": "The Fast and the Furious",
  "Year": "2006",
  "imdbID": "tt2353948",
  "Type": "game",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYWIyZTE1YjctYzRlNy00MTllLWEzZDUtMzMyMzgyODc2Mjg2XkEyXkFqcGdeQXVyNjc3NTE3NTM@._V1_SX300.jpg"
},
{
  "Title": "Fast and the Furious: Tokyo Drift Peek Performance",
  "Year": "2006",
  "imdbID": "tt0843849",
  "Type": "movie",
  "Poster": "N/A"
},
{
  "Title": "The Fast and the Furious: Editing for the MPAA",
  "Year": "2002",
  "imdbID": "tt0781022",
  "Type": "movie",
  "Poster": "N/A"
},
{
  "Title": "The Fast and the Furious: Visual Effects Montage",
  "Year": "2002",
  "imdbID": "tt0781023",
  "Type": "movie",
  "Poster": "N/A"
},
  ]);
  const [searchValue,setSearchValue] = useState('');
  const [ favorites,setFavorites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=79555010`;

    const responce = await fetch(url);
    const responceJson = await responce.json();

    if (responceJson.Search){
      setMovies(responceJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  },   [searchValue]);

  const AddFavoriteMovie = (movie) => {
    const newFavoriteList = [...AddFavorites, movie];
    setFavorites(newFavoriteList);
  }
  

  return (
    <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4 ">
          <MovieListHeading heading="Movies"/>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>

        <div className="row pb-5">
          <MovieList
            movies={movies}
            handleFavoriteClick={AddFavoriteMovie}
            favoriteComponent={AddFavorites}
           />
        </div>

        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Favorites" />
        </div>

        <div className="row">
          <MovieList
          movies={favorites}
          />
        </div>

    </div>
  );
}

export default App;
