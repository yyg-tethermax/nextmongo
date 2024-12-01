import mongoose from "mongoose";


interface IMovie {
  _id: mongoose.Schema.Types.ObjectId;
  title: string;
  plot: string;
  genres: string[];
  runtime: number;
  cast: string[];
  poster: string;
  fullplot: string;
  languages: string[];
  released: Date;
  directors: string[];
  rated: string;
  awards: {
    wins: number;
    nominations: number;
    text: string;
  };
  lastupdated: Date;
  year: number;
  imdb: {
    rating: number;
    votes: number;
    id: number;
  };
  countries: string[];
  type: string;
  tomatoes: {
    viewer: {
      rating: number;
    };
  };
  num_mflix_comments: number;
}

const MovieSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
  plot: { type: String, required: true },
  genres: { type: [String], required: true },
  runtime: { type: Number, required: true },
  cast: { type: [String], required: true },
  poster: { type: String, required: true },
  fullplot: { type: String, required: true },
  languages: { type: [String], required: true },
  released: { type: Date, required: true },
  directors: { type: [String], required: true },
  rated: { type: String, required: true },
  awards: { type: Object, required: true },
  lastupdated: { type: Date, required: true },
  year: { type: Number, required: true },
  imdb: { type: Object, required: true },
  countries: { type: [String], required: true },
  type: { type: String, required: true },
  tomatoes: { type: Object, required: true },
  num_mflix_comments: { type: Number, required: true, default: 0 },
});

const Movie = mongoose.models.Movie || mongoose.model<IMovie>("Movie", MovieSchema);

export default Movie;
