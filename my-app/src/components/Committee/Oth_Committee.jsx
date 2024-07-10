import React from 'react'
import styles from './Oth_Committee.module.css'
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link>

function Oth_Committee() {

    const combinedAdvisory = [
        { Iadvisory: "Akhil Dutta Gupta", Nadvisory: "Rabi Bastia, OilMax" },
        { Iadvisory: "Japan Tridevi", Nadvisory: "Sanjay Kumar" },
        { Iadvisory: "Stefan Iglauer", Nadvisory: "Anand Gupta" },
        { Iadvisory: "Derek Elsworth", Nadvisory: "Shashank S Jha" },
        { Iadvisory: "Professor Ali Saeedi", Nadvisory: "Kallol Saha" },
        { Iadvisory: "Dr. Srikanta Mishra", Nadvisory: "Jitendra Sangwai" },
        { Iadvisory: "Thomas A. Blasingame", Nadvisory: "Niladri K Mitra" },
        { Iadvisory: "Prof. Praveen Linga, NUS", Nadvisory: "Prof. Anugrah Singh, IITG" },
        { Iadvisory: "Prem Bikkina, Ph.D.", Nadvisory: "Prof. Uttam Kumar Bhui" },
        { Iadvisory: "Tayfun Babadagli, Professor", Nadvisory: "Samarth Dilip Patawadhan, MIT" },
        { Iadvisory: "_____", Nadvisory: "Prof. G.D.Yadav" },
        { Iadvisory: "_____", Nadvisory: "Shri Amitabh Ranjan" },
        { Iadvisory: "_____", Nadvisory: "Mr. Aditya Johri" },
        { Iadvisory: "_____", Nadvisory: "Pulkit Goel" },
        { Iadvisory: "_____", Nadvisory: "Dr. KAUSTAV NAG" },
        { Iadvisory: "_____", Nadvisory: "Rakesh Godawat, SunPetro" }
      ];



    return (
        <>
            <div className={styles.container}>
                {/* <div className={styles.left}>
        <h2> International Advisory Committee</h2>
    {advisoryC.map((name)=>(
        <span>{name}</span> 
    ))}
    </div>
    <div className={styles.right}>
    <h2>National Advisory Committee</h2>
    {Nadvisory.map((name)=>(
        <span>{name}</span> 
    ))}
    </div> */}

                <table className={styles.Cmembers}>
                    <tr className={styles.Ctr}>
                        <th className={styles.Cth}>International Advisory Committee</th>
                        <th className={styles.Cth}>National Advisory Committee</th>
                    </tr>
                    {combinedAdvisory.map((name =>

                        <tr className={styles.Ctr}>
                            <td className={styles.Ctd}>{name.Iadvisory}</td>
                            <td className={styles.Ctd}>{name.Nadvisory}</td>
                        </tr>
                    ))}


                </table>
            </div>
        </>
    )
}

export default Oth_Committee