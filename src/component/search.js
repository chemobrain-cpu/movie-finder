import React,{useState} from 'react';
import styles from './search.module.css'

function Search(props) {

    const {filterMovie} = props

    const findMovie = (e)=>{
        filterMovie(e.target.value)
    }



    return (<div class={styles.searchSection}>
        <h2>Search</h2>
        <input onChange={findMovie}  />
    </div>
);
}

export default Search;