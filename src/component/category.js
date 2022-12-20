import React from 'react';
import styles from './category.module.css'
import Empty from "./empty"

function Category(props) {
    const {collection,title,type} = props
   
    return (<div className={styles.videoSection}>
        <h2>{title}</h2>
        <div class={styles.cardSection}>
            {collection.length===0?<Empty/>:collection.map(data => {
                if (data.Type === type) {
                    return <div className={styles.card}>
                        <img src={data.Poster} className={styles.cardImage} alt={`${data.Title}`} />
                        <div className={styles.description}>
                            <h2>
                                {data.Title}
                            </h2>

                        </div>


                    </div>
                }
            })}


        </div>
    </div>)
}

export default Category;