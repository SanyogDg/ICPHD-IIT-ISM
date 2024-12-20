import React, { useState } from 'react'
import styles from './Oth_Committee.module.css'
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link>

function Oth_Committee() {
    // const [isHovered, setIsHovered] = useState(false);
    const combinedAdvisory = [
        {
            Iadvisory: "Prof. Akhil Dutta Gupta",
            Nadvisory: "Rabi Bastia, OilMax",
            Iadvisoryd: `Regents Professor, University Distinguished Professor and Peterson ‘36 Chair
            Interim Head, Petroleum Engineering, Texas A&M U.`,
            Nadvisoryd: `CEO-Exploration & Production,
            Oilmax Energy Private Limited`
        },
        {
            Iadvisory: "Prof. Japan Tridevi",
            Nadvisory: "Sanjay Kumar",
            Iadvisoryd: ` PhD. P.Eng
Professor, Faculty of Engineering - Civil and Environmental Engineering Dept,  university of alberta`,
            Nadvisoryd: `Director (Production),
Essar oil and gas exploration and production limited`
        },
        {
            Iadvisory: "Prof. Stefan Iglauer", Nadvisory: "Anand Gupta",
            Iadvisoryd: `Professor, Professor of Energy and Resource Engineering, research leader of the Energy and Resources discipline, and Director of the Centre for Sustainable Energy, Edith Cowan University`,
            Nadvisoryd: `Executive Director at Oil and Natural Gas Corporation Ltd and ADG (Dev) DGH`
        },

        {
            Iadvisory: "Prof. Derek Elsworth", Nadvisory: "Shashank S Jha", Iadvisoryd: `G. Albert Shoemaker Chair and Professor of Energy and Mineral Engineering and Geosciences at Penn State.`,
            Nadvisoryd: `CEO Artson Engineering Ltd.`
        },
        {
            Iadvisory: "Prof. Professor Ali Saeedi", Nadvisory: "Kallol Saha", Iadvisoryd: `Minerals, Energy and Chemical Engineering,
            Faculty of Science and Engineering,
            Curtin University`,
            Nadvisoryd: `Director - Upstream and Low-carbon M&A,
S&P Global Commodity Insights`},
        {
            Iadvisory: "Dr. Srikanta Mishra", Nadvisory: "Prof. Jitendra Sangwai", Iadvisoryd: `Research Professor, Texas A&M University`,
            Nadvisoryd: `Professor, Chemical Engineering, IIT Madras`
        },
        {
            Iadvisory: "Prof. Thomas A. Blasingame", Nadvisory: "Niladri K Mitra",
            Iadvisoryd: `Department Head, Petroleum Engineering
            Robert L. Whiting Professor
            Texas A&M University`,
            Nadvisoryd: `Ex-Director Offshore(ONGC),
Chief Adviser
McDermott International, Ltd` },
        {
            Iadvisory: "Prof. Praveen Linga, NUS", Nadvisory: "Prof. Anugrah Singh, IITG", Iadvisoryd: `Professor of Chemical and Biomolecular Engineering,
National University of Singapore`,
            Nadvisoryd: `Department of Chemical Engineering,
            IIT Guwahati` },
        {
            Iadvisory: "Prof. Prem Bikkina, Ph.D.", Nadvisory: "Prof. Uttam Kumar Bhui",
            Iadvisoryd: `Harold Courson Chair in Petroleum Engineering
            Petroleum Program Director
            School of Chemical Engineering
            Oklahoma State University`,
            Nadvisoryd: `Professor PDEU`
        },
        {
            Iadvisory: "Tayfun Babadagli, Professor", Nadvisory: "Prof. Samarth Dilip Patawadhan, MIT", Iadvisoryd: `Professor, Faculty of Engineering,
Civil and Environmental Engineering,
University of Alberta`,
            Nadvisoryd: `Professor & Director - R&D
            MIT Pune` },
        {
            Iadvisory: "_____", Nadvisory: "Prof. G.D.Yadav", 
            Nadvisoryd: `Emeritus Professor of Eminence`
        },
        { Iadvisory: "_____", Nadvisory: "Shri Amitabh Ranjan", Iadvisoryd: "_____", Nadvisoryd: `Registrar, IIPA` },
        { Iadvisory: "_____", Nadvisory: "Mr. Aditya Johri", Iadvisoryd: "_____", Nadvisoryd: `GGM-Asset Manger, ONGC, CBM Asset, Bokaro` },
        { Iadvisory: "_____", Nadvisory: "Pulkit Goel", Iadvisoryd: "_____", Nadvisoryd: `Founder and Director ANP Geo Energy` },
        {
            Iadvisory: "_____", Nadvisory: "Dr. KAUSTAV NAG", Iadvisoryd: "_____", Nadvisoryd: `Additional Director General (Exploration)
            DGH`},
        { Iadvisory: "_____", Nadvisory: "Rakesh Godawat, SunPetro", Iadvisoryd: "_____", Nadvisoryd: `AVP - G & G and Reservoir at Sun Petrochemicals Pvt. Ltd.` }
    ];


    return (
        <>
            <div>
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

                            <tr className={styles.Ctr}  >

                                
                                <td className={styles.Ctd} >
                                    {name.Iadvisory}
                                    <div className={styles.det}>{name.Iadvisoryd}</div>
                                </td>

                                <td className={styles.Ctd}>{name.Nadvisory}
                                    <div className={styles.det}>{name.Nadvisoryd}</div>
                                </td>

                            
                            </tr>
                        ))}
                    </table>
                </div>


            </div>
        </>
    )
}

export default Oth_Committee