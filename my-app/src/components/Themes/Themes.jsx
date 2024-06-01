import React from 'react'
import { FaOilWell } from "react-icons/fa6";
import { GiOilPump } from "react-icons/gi";
import '../Themes/Themes.css';
import Footer from '../Footer/Footer';
export default function Themes() {
    return (
        <div>
            <div className='navcolor'></div>

            <div className='allbdy'>
                <div className='headinghd'>Major Themes</div>
                <div className='m-5 flex align-center justify-center mb-5'>
                    <table className='tablecs'>
                        <tr className='oddrow'>
                            <td><GiOilPump /> </td>
                            <td>Advancement in Drilling Technology</td>
                        </tr>
                        <tr className='evenrow'>
                            <td><FaOilWell /> </td>
                            <td> Production/Reservoir Management </td>
                        </tr>
                        <tr className='oddrow'>
                            <td><GiOilPump /></td>
                            <td>Latest Development in Enhanced Oil
                                Recovery (EOR) </td>
                        </tr>
                        <tr className='evenrow'>
                            <td><FaOilWell /></td>
                            <td> Reservoir Simulation and Geomechanics</td>
                        </tr>
                        <tr className='oddrow'>
                            <td><GiOilPump /></td>
                            <td>  Unconventional Hydrocarbon Resources</td>
                        </tr>
                        <tr className='evenrow'>
                            <td><FaOilWell /></td>
                            <td>Flow Assurance </td>
                        </tr>
                        <tr className='oddrow'>
                            <td><GiOilPump /></td>
                            <td>Carbon Capture Utilization and Storage
                                (CCUS) </td>
                        </tr>
                        <tr className='evenrow'>
                            <td><FaOilWell /></td>
                            <td>Health, Safety, Security, Environment
                                and Well Control </td>
                        </tr>
                        <tr className='oddrow'>
                            <td><GiOilPump /></td>
                            <td>Development in AI/ML, optimization
                                algorithms and digitalization in
                                Petroleum Industry</td>
                        </tr>
                        <tr className='evenrow'>
                            <td><FaOilWell /></td>
                            <td>Geothermal energy harvesting</td>
                        </tr>
                        <tr className='oddrow'>
                            <td><GiOilPump /></td>
                            <td>Geological storage development</td>
                        </tr>
                        <tr className='evenrow'>
                            <td><FaOilWell /></td>
                            <td>Optimization of petroleum production
                                operation</td>
                        </tr>
                        <tr className='oddrow'>
                            <td><GiOilPump /></td>
                            <td>Field case studies</td>
                        </tr>
                        <tr className='evenrow'>
                            <td><FaOilWell /></td>
                            <td>Pipeline Engineering in oil & gas
                                transportation</td>
                        </tr>
                    </table>
                </div>
            </div>

        </div>
    )
}
