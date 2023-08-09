import { Component,OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Title } from '@angular/platform-browser';
import { MovieInfo } from 'src/app/movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
   
    constructor(private service:MovieApiServiceService,private title:Title){
      this.title.setTitle('Home - Netflix');
    }

     ngOnInit(): void{
      this.bannerData()
      this.trendingData()
      this.actionMovie();
      this.adventureMovie();
      this.comedyMovie();
      this.animationMovie();
      this.documentaryMovie();
      this.sciencefictionMovie();
      this.thrillerMovie();
     }
    bannerResult!:MovieInfo[];
    trendingResult!:MovieInfo[];
    actionMovieResult!:MovieInfo[];
    adventureMovieResult!:MovieInfo[];
    animationMovieResult!:MovieInfo[];
    comedyMovieResult!:MovieInfo[];
    documentaryMovieResult!:MovieInfo[];
    sciencefictionMovieResult!:MovieInfo[];
    thrillerMovieResult!:MovieInfo[];
    
    // bannerdata

    bannerData(){
      this.service.bannerApiData().subscribe((result)=>{
        console.log(result,'bannerresult#');
        this.bannerResult=result.results
      })
    }

    // trendingData

    trendingData(){
      this.service.trendingApiData().subscribe((result)=>{
        console.log(result,'Trendingresult#');
        this.trendingResult=result.results
      })
    }
    
  // action 
  actionMovie() {
    this.service.fetchActionMovies().subscribe((result) => {
      this.actionMovieResult = result.results;
    });
  }




  // adventure 
  adventureMovie() {
    this.service.fetchAdventureMovies().subscribe((result) => {
      this.adventureMovieResult = result.results;
    });
  }


  // animation 
  animationMovie() {
    this.service.fetchAnimationMovies().subscribe((result) => {
      this.animationMovieResult = result.results;
    });
  }


  // comedy 
  comedyMovie() {
    this.service.fetchComedyMovies().subscribe((result) => {
      this.comedyMovieResult = result.results;
    });
  }

  // documentary 
  documentaryMovie() {
    this.service.fetchDocumentaryMovies().subscribe((result) => {
      this.documentaryMovieResult = result.results;
    });
  }


  // science-fiction 
  sciencefictionMovie() {
    this.service.fetchScienceFictionMovies().subscribe((result) => {
      this.sciencefictionMovieResult = result.results;
    });
  }

  // thriller
  thrillerMovie() {
    this.service.fetchThrillerMovies().subscribe((result) => {
      this.thrillerMovieResult = result.results;
    });
  }



}
