import { Movie, TrendingMovie } from "@/interfaces/interface";
import { Client, ID, Query, TablesDB } from "react-native-appwrite";

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!

const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!)

const database = new TablesDB(client);

export const updateSearchCount = async (query: string, movie: Movie) => {
 
    if (!movie || !query) {
    console.log("Search update skipped: Movie or Query is undefined");
    return;
  }
 
    try {
    
 const result = await database.listRows({
    databaseId: DATABASE_ID,
    tableId: COLLECTION_ID,
    queries: [
     Query.equal('movie_id', movie.id)
    ],
});

if(result.rows.length > 0) {

    const existingMovie = result.rows[0];

     await database.updateRow({
        databaseId: DATABASE_ID,
        tableId: COLLECTION_ID,
        rowId: existingMovie.$id,
        data: {
          count: existingMovie.count + 1,
        },
      });

}
else {
      await database.createRow({
        databaseId: DATABASE_ID,
        tableId: COLLECTION_ID,
        rowId: ID.unique(), 
        data: {
          SearchTerm: query,
          count: 1,
          title: movie.title,
          movie_title: movie.title,
          movie_id: movie.id,
          poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        },
      });
}

  }

  catch(error) {
     console.error("Appwrite error:", error);
  }

};

export const getTrendingMovies = async (): Promise<TrendingMovie[] | undefined> => {
  try {
     const result = await database.listRows({
        databaseId: DATABASE_ID,
        tableId: COLLECTION_ID,
        queries: [
            Query.limit(5),
            Query.orderDesc('count'),
        ]
     });
     return result.rows as unknown as TrendingMovie[];
  }
  catch(error) {
    console.log(error);
    return undefined;
  }
};
