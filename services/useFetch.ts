import { useEffect, useState } from 'react';

export const useFetch = <T> (fetchFunction: () => Promise<T>, autofetch = true)  => {

const [data, setData] = useState<T | null>(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState<Error | null>(null);

const fetchData = async () => {
    try {
         setLoading(true);
         setError(null);

         const result = await fetchFunction();
         setData(result);
         
          return result;
    }
    catch(err) {
        setError(err instanceof Error ? err : new Error('An error occured'));
    }
    finally {
        setLoading(false);
    }
};

const reset = () => {
    setData(null);
    setLoading(false);
    setError(null);
}
// only if autofetch is true then only fetch movies => if passed false then no movies
   useEffect(() => {

      if(autofetch) {
        fetchData();
      }
   
    }, []);

   return {data, loading, error, fetchData,reset};


};