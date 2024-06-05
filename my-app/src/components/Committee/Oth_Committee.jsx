import React from 'react'
import styles from './Oth_Committee.module.css'
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link>

function Oth_Committee() {

    let combinedAdvisory = [
        {
            Iadvisory: "G.C. Thakur",
            Nadvisory: "A.K. Singh, CMD: ONGC"
        },
        {
            Iadvisory: "Hemanta Sharma",
            Nadvisory: "CEO, EOGEPL"
        },
        {
            Iadvisory: "Akhil Dutta Gupta",
            Nadvisory: "RIL: Vice President"
        },
        {
            Iadvisory: "Hussein: Kaust",
            Nadvisory: "India in Charge: Exxon Mobil"
        },
        {
            Iadvisory: "Japan Tridevi",
            Nadvisory: "CMD: GAIL"
        },
        {
            Iadvisory: "Stefan Luglar",
            Nadvisory: "CMD: IOCL"
        },
        {
            Iadvisory: "Derek Elsworth: Pennstate University",
            Nadvisory: "CMD: OIL"
        },
        {
            Iadvisory: "Ali Seidi: Curtin University",
            Nadvisory: "CMD: Cairn"
        },
        {
            Iadvisory: "Dr. Sanjay Srinivasan",
            Nadvisory: "DG: DGH"
        },
        {
            Iadvisory: "Dr. Srikanta Mishra",
            Nadvisory: "CEO: Sunpetro"
        },
        {
            Iadvisory: "SPE, Dubai section (Khusboo Rajwan)",
            Nadvisory: "DG: FIPI"
        },
        {
            Iadvisory: "ARMA Society",
            Nadvisory: "OilMax"
        },
        {
            Iadvisory: "IADC",
            Nadvisory: "Amitabh Pandey, EOR"
        },
        {
            Iadvisory: "Dr. Vijay Srivastava",
            Nadvisory: "Prakh Vajpai"
        },
        {
            Iadvisory: "Promod Jain, CEO, CMG",
            Nadvisory: "T.K. Sengupta"
        },
        {
            Iadvisory: "Raja V Mani",
            Nadvisory: "Ashok Kumar"
        },
        {
            Iadvisory: "James Sheng (Texas Tech)",
            Nadvisory: "Mahendra Kumar"
        },
        {
            Iadvisory: "Tom Blessing (SPE & TAMU)",
            Nadvisory: "Anand Gupta"
        },
        {
            Iadvisory: "Amir H Mahmadi, South Africa",
            Nadvisory: "S. Rai Chaudhary"
        },
        {
            Iadvisory: "Dr. Subash Ariala-Saudi Aramco",
            Nadvisory: "Arun Mittal"
        }
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