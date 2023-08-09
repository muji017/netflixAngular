export interface MovieInfo {
    title: string;
    original_title: string;
    release_date: string;
    original_language: string;
    overview: string;
    popularity: number;
    vote_average: number;
    vote_count: number;
    media_type: string;
    poster_path: string;
    backdrop_path: string;
    genre_ids: number[];
    video: boolean;
    id:string;
  }
  
 export interface Genre {
    id: number;
    name: string;
  }
  
 export interface ProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }
  
 export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
  }
  
export  interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
  }
  
 export interface MovieInfoExtended {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null | any;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  

  export interface ActorCast {
    adult: boolean;
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    order: number;
    original_name: string;
    popularity: number;
    profile_path: string | null;
  }
  