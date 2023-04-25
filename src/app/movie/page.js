import React from 'react';
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css"
import axios  from 'axios'

const Movie = async () => {

    await new Promise(resolve => setTimeout(resolve, 2000));


    const url = process.env.RAPID_KEY;
    
    
    const options = {
        method: 'GET',
        headers: {
          'content-type': 'application/octet-stream',
          'X-RapidAPI-Key': '5ec5eeb711msh8497b6d93141a80p173c80jsn9028150ca114',
          'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
      };
      
     const res = await fetch(url, options);
    
    const data = await res.json();
    const main_data = data.titles;
    console.log(main_data.jawSummary)

    
    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Series & Movie</h1>
                    <div className={styles.card_section}>
                        {
                            main_data.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Movie;