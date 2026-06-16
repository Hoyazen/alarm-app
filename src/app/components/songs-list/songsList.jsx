"use client";

import { DarkModeContext } from "../../context/DarkModeProvider";
import { useContext } from "react";

import styles from "./songsList.module.css"

function SongsList() {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className={styles.songsList}>
            <p className={darkMode ? `${styles.title} ${styles.titleDark}` : `${styles.title} ${styles.titleLight}`}>Sonnerie : Refuge</p>

            <div className={darkMode ? `${styles.container} ${styles.containerDark}` : `${styles.container} ${styles.containerLight}`}>
                <ul className={darkMode ? `${styles.list} ${styles.listDark}` : `${styles.list} ${styles.listLight}`}>
                    <li className={darkMode ? `${styles.songContainer} ${styles.songContainerDark}` : `${styles.songContainer} ${styles.songContainerLight}`}>
                        <img src="/images/album.jpg" className={styles.image} alt="test" />
                        <div>
                            <p className={darkMode ? `${styles.songTitle} ${styles.songTitleDark}` : `${styles.songTitle} ${styles.songTitleLight}`}>Refuge</p>
                            <p className={darkMode ? `${styles.songAuthor} ${styles.songAuthorDark}` : `${styles.songAuthor} ${styles.songAuthorLight}`}>Auteur de la chanson</p>
                        </div>
                    </li>
                    <li className={darkMode ? `${styles.songContainer} ${styles.songContainerDark}` : `${styles.songContainer} ${styles.songContainerLight}`}>
                        <img src="/images/album.jpg" className={styles.image} alt="test" />
                        <div>
                            <p className={darkMode ? `${styles.songTitle} ${styles.songTitleDark}` : `${styles.songTitle} ${styles.songTitleLight}`}>Refuge</p>
                            <p className={darkMode ? `${styles.songAuthor} ${styles.songAuthorDark}` : `${styles.songAuthor} ${styles.songAuthorLight}`}>Auteur de la chanson</p>
                        </div>
                    </li>
                    <li className={darkMode ? `${styles.songContainer} ${styles.songContainerDark}` : `${styles.songContainer} ${styles.songContainerLight}`}>
                        <img src="/images/album.jpg" className={styles.image} alt="test" />
                        <div>
                            <p className={darkMode ? `${styles.songTitle} ${styles.songTitleDark}` : `${styles.songTitle} ${styles.songTitleLight}`}>Refuge</p>
                            <p className={darkMode ? `${styles.songAuthor} ${styles.songAuthorDark}` : `${styles.songAuthor} ${styles.songAuthorLight}`}>Auteur de la chanson</p>
                        </div>
                    </li>
                    <li className={darkMode ? `${styles.songContainer} ${styles.songContainerDark}` : `${styles.songContainer} ${styles.songContainerLight}`}>
                        <img src="/images/album.jpg" className={styles.image} alt="test" />
                        <div>
                            <p className={darkMode ? `${styles.songTitle} ${styles.songTitleDark}` : `${styles.songTitle} ${styles.songTitleLight}`}>Refuge</p>
                            <p className={darkMode ? `${styles.songAuthor} ${styles.songAuthorDark}` : `${styles.songAuthor} ${styles.songAuthorLight}`}>Auteur de la chanson</p>
                        </div>
                    </li>
                    <li className={darkMode ? `${styles.songContainer} ${styles.songContainerDark}` : `${styles.songContainer} ${styles.songContainerLight}`}>
                        <img src="/images/album.jpg" className={styles.image} alt="test" />
                        <div>
                            <p className={darkMode ? `${styles.songTitle} ${styles.songTitleDark}` : `${styles.songTitle} ${styles.songTitleLight}`}>Refuge</p>
                            <p className={darkMode ? `${styles.songAuthor} ${styles.songAuthorDark}` : `${styles.songAuthor} ${styles.songAuthorLight}`}>Auteur de la chanson</p>
                        </div>
                    </li>
                    <li className={darkMode ? `${styles.songContainer} ${styles.songContainerDark}` : `${styles.songContainer} ${styles.songContainerLight}`}>
                        <img src="/images/album.jpg" className={styles.image} alt="test" />
                        <div>
                            <p className={darkMode ? `${styles.songTitle} ${styles.songTitleDark}` : `${styles.songTitle} ${styles.songTitleLight}`}>Refuge</p>
                            <p className={darkMode ? `${styles.songAuthor} ${styles.songAuthorDark}` : `${styles.songAuthor} ${styles.songAuthorLight}`}>Auteur de la chanson</p>
                        </div>
                    </li>
                    <li className={darkMode ? `${styles.songContainer} ${styles.songContainerDark}` : `${styles.songContainer} ${styles.songContainerLight}`}>
                        <img src="/images/album.jpg" className={styles.image} alt="test" />
                        <div>
                            <p className={darkMode ? `${styles.songTitle} ${styles.songTitleDark}` : `${styles.songTitle} ${styles.songTitleLight}`}>Refuge</p>
                            <p className={darkMode ? `${styles.songAuthor} ${styles.songAuthorDark}` : `${styles.songAuthor} ${styles.songAuthorLight}`}>Auteur de la chanson</p>
                        </div>
                    </li>
                    <li className={darkMode ? `${styles.songContainer} ${styles.songContainerDark}` : `${styles.songContainer} ${styles.songContainerLight}`}>
                        <img src="/images/album.jpg" className={styles.image} alt="test" />
                        <div>
                            <p className={darkMode ? `${styles.songTitle} ${styles.songTitleDark}` : `${styles.songTitle} ${styles.songTitleLight}`}>Refuge</p>
                            <p className={darkMode ? `${styles.songAuthor} ${styles.songAuthorDark}` : `${styles.songAuthor} ${styles.songAuthorLight}`}>Auteur de la chanson</p>
                        </div>
                    </li>
                    <li className={darkMode ? `${styles.songContainer} ${styles.songContainerDark}` : `${styles.songContainer} ${styles.songContainerLight}`}>
                        <img src="/images/album.jpg" className={styles.image} alt="test" />
                        <div>
                            <p className={darkMode ? `${styles.songTitle} ${styles.songTitleDark}` : `${styles.songTitle} ${styles.songTitleLight}`}>Refuge</p>
                            <p className={darkMode ? `${styles.songAuthor} ${styles.songAuthorDark}` : `${styles.songAuthor} ${styles.songAuthorLight}`}>Auteur de la chanson</p>
                        </div>
                    </li>
                    <li className={darkMode ? `${styles.songContainer} ${styles.songContainerDark}` : `${styles.songContainer} ${styles.songContainerLight}`}>
                        <img src="/images/album.jpg" className={styles.image} alt="test" />
                        <div>
                            <p className={darkMode ? `${styles.songTitle} ${styles.songTitleDark}` : `${styles.songTitle} ${styles.songTitleLight}`}>Refuge</p>
                            <p className={darkMode ? `${styles.songAuthor} ${styles.songAuthorDark}` : `${styles.songAuthor} ${styles.songAuthorLight}`}>Auteur de la chanson</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SongsList;