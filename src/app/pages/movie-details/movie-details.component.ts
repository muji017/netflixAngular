import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { ActorCast, MovieInfoExtended } from 'src/app/movie';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

    getMovieDetails!:MovieInfoExtended
    getMovieVideo!:string
    getMovieCast!:ActorCast[]

    constructor(private service:MovieApiServiceService,private router:ActivatedRoute){
      let paramsId=router.snapshot.paramMap.get('id')
      this.getMovie(paramsId)
      this.getVideo(paramsId)
      this.getCast(paramsId)
    }

    getMovie(id:any){
       this.service.getMovieDetails(id).subscribe((result)=>{
         console.log(result,'inside getmovie ');
        this.getMovieDetails=result 
       })
    }
     
    getVideo(id:any){
      this.service.getMovieVideo(id).subscribe((result)=>{
          console.log(result);
          result.results.forEach((element:any) => {
            if(element.type=="Trailer")
            {
              this.getMovieVideo = element.key;
            }
        });
      })
    }

    getCast(id:any){
      this.service.getMovieCast(id).subscribe((result)=>{
        console.log(result,'movieCast#')
        this.getMovieCast=result.cast
      })
    }
  
}
