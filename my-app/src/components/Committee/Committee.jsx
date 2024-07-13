import React from 'react'
import Org_Committee from './Org_Committee'
import Oth_Committee from './Oth_Committee'
import "../Committee/Committee.css"
function Hello() {
  return (
    <div className='flex justify-center items-center flex-col'>

    <Oth_Committee/>
    <Org_Committee/>
   

    </div>
    // </>
  )
}

export default Hello
// function Oth_Committee() {
//   const [isHovered, setIsHovered] = useState(false);
//   const combinedAdvisory = [
//       {
//           Iadvisory: "Akhil Dutta Gupta",
//           Nadvisory: "Rabi Bastia, OilMax",
//           Iadvisoryd: `Regents Professor, University Distinguished Professor and Peterson ‘36 Chair
//           Interim Head, Petroleum Engineering, Texas A&M U.`,
//           Nadvisoryd: `CEO-Exploration & Production,
//           Oilmax Energy Private Limited`
//       },
//       {
//           Iadvisory: "Japan Tridevi",
//           Nadvisory: "Sanjay Kumar",
//           Iadvisoryd: ` PhD. P.Eng
// Professor, Faculty of Engineering - Civil and Environmental Engineering Dept,  university of alberta`,
//           Nadvisoryd: `Director (Production),
// Essar oil and gas exploration and production limited`
//       },
//       {
//           Iadvisory: "Stefan Iglauer", Nadvisory: "Anand Gupta",
//           Iadvisoryd: `Professor, Professor of Energy and Resource Engineering, research leader of the Energy and Resources discipline, and Director of the Centre for Sustainable Energy, Edith Cowan University`,
//           Nadvisoryd: `Executive Director at Oil and Natural Gas Corporation Ltd and ADG (Dev) DGH`
//       },

//       {
//           Iadvisory: "Derek Elsworth", Nadvisory: "Shashank S Jha", Iadvisoryd: `G. Albert Shoemaker Chair and Professor of Energy and Mineral Engineering and Geosciences at Penn State.`,
//           Nadvisoryd: `CEO Artson Engineering Ltd.`
//       },
//       {
//           Iadvisory: "Professor Ali Saeedi", Nadvisory: "Kallol Saha", Iadvisoryd: `G. Albert Shoemaker Chair and Professor of Energy and Mineral Engineering and Geosciences at Penn State.`,
//           Nadvisoryd: `Director - Upstream and Low-carbon M&A,
// S&P Global Commodity Insights`},
//       {
//           Iadvisory: "Dr. Srikanta Mishra", Nadvisory: "Jitendra Sangwai", Iadvisoryd: `Minerals, Energy and Chemical Engineering,
//           Faculty of Science and Engineering,
//           Curtin University`,
//           Nadvisoryd: `Professor, Chemical Engineering, IIT Madras`
//       },
//       {
//           Iadvisory: "Thomas A. Blasingame", Nadvisory: "Niladri K Mitra",
//           Iadvisoryd: `Research Professor, Texas A&M University`,
//           Nadvisoryd: `Ex-Director Offshore(ONGC),
// Chief Adviser
// McDermott International, Ltd` },
//       {
//           Iadvisory: "Prof. Praveen Linga, NUS", Nadvisory: "Prof. Anugrah Singh, IITG", Iadvisoryd: `Department Head, Petroleum Engineering
//           Robert L. Whiting Professor
//           Texas A&M University`,
//           Nadvisoryd: `Department of Chemical Engineering,
//           IIT Guwahati` },
//       {
//           Iadvisory: "Prem Bikkina, Ph.D.", Nadvisory: "Prof. Uttam Kumar Bhui",
//           Iadvisoryd: `Professor of Chemical and Biomolecular Engineering,
// National University of Singapore`,
//           Nadvisoryd: `Professor PDEU`
//       },
//       {
//           Iadvisory: "Tayfun Babadagli, Professor", Nadvisory: "Samarth Dilip Patawadhan, MIT", Iadvisoryd: `Harold Courson Chair in Petroleum Engineering
//           Petroleum Program Director
//           School of Chemical Engineering
//           Oklahoma State University`,
//           Nadvisoryd: `Professor & Director - R&D
//           MIT Pune` },
//       {
//           Iadvisory: "_____", Nadvisory: "Prof. G.D.Yadav", Iadvisoryd: `Professor, Faculty of Engineering,
// Civil and Environmental Engineering,
// University of Alberta`,
//           Nadvisoryd: `Emeritus Professor of Eminence`
//       },
//       { Iadvisory: "_____", Nadvisory: "Shri Amitabh Ranjan", Iadvisoryd: "_____", Nadvisoryd: `Registrar, IIPA` },
//       { Iadvisory: "_____", Nadvisory: "Mr. Aditya Johri", Iadvisoryd: "_____", Nadvisoryd: `GGM-Asset Manger, ONGC, CBM Asset, Bokaro` },
//       { Iadvisory: "_____", Nadvisory: "Pulkit Goel", Iadvisoryd: "_____", Nadvisoryd: `Founder and Director ANP Geo Energy` },
//       {
//           Iadvisory: "_____", Nadvisory: "Dr. KAUSTAV NAG", Iadvisoryd: "_____", Nadvisoryd: `Additional Director General (Exploration)
//           DGH`},
//       { Iadvisory: "_____", Nadvisory: "Rakesh Godawat, SunPetro", Iadvisoryd: "_____", Nadvisoryd: `AVP - G & G and Reservoir at Sun Petrochemicals Pvt. Ltd.` }
//   ];
