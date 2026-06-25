"use client";

import { DarkModeContext } from "../../context/DarkModeProvider";
import { useContext } from "react";

import styles from "./songsList.module.css"

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

function SongsList({ songs, setSelectedSong }) {
    const { darkMode } = useContext(DarkModeContext);

    function handleSongClicked(song) {
        setSelectedSong(song);
    }

    return (
        <div className={styles.songsList}>
            <p className={darkMode ? `${styles.title} ${styles.titleDark}` : `${styles.title} ${styles.titleLight}`}>Sonnerie : Refuge</p>

            <div className={darkMode ? `${styles.container} ${styles.containerDark}` : `${styles.container} ${styles.containerLight}`}>
                <ul className={darkMode ? `${styles.list} ${styles.listDark}` : `${styles.list} ${styles.listLight}`}>
                    {
                        // Transformation d'un tableau de Json en éléments JSX
                        songs.map((song) => {
                            return (<li className={darkMode ? `${styles.songContainer} ${styles.songContainerDark}` : `${styles.songContainer} ${styles.songContainerLight}`}
                                        onClick={() => handleSongClicked(song)}
                                        key={song["name"]}>
                                        <img src={`${basePath}/images/${song["img_file_name"]}`} className={styles.image} alt={`Image de la chason ${song["name"]}`} />
                                        <div>
                                            <p className={darkMode ? `${styles.songTitle} ${styles.songTitleDark}` : `${styles.songTitle} ${styles.songTitleLight}`}>{song["name"]}</p>
                                            <p className={darkMode ? `${styles.songAuthor} ${styles.songAuthorDark}` : `${styles.songAuthor} ${styles.songAuthorLight}`}>{song["artist"]}</p>
                                        </div>
                                    </li>)
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default SongsList;