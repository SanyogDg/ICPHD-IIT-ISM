import React from 'react'
import { FaOilWell } from "react-icons/fa6";
import { GiOilPump } from "react-icons/gi";
import '../Themes/Themes.css';
export default function Themes() {
    return (
        <div>
            <div className='navcolor'></div>

            <div className='allbdy'>
                <div className='headinghd'>Major Themes</div>
                <div className='mt-5 flex align-center justify-center'>
                    <table className='tablecs'>
                        <tr className='oddrow'>
                            <td className=''><FaOilWell /></td>
                            <td>Advancement in Drilling Technology</td>
                        </tr>
                        <tr className='evenrow'>
                            <td><GiOilPump /></td>
                            <td> Production/Reservoir Management </td>
                        </tr>
                        <tr className='oddrow'>
                            <td><FaOilWell /></td>
                            <td>Latest Development in Enhanced Oil
                                Recovery (EOR) </td>
                        </tr>
                        <tr className='evenrow'>
                            <td><GiOilPump /></td>
                            <td> Reservoir Simulation and Geomechanics</td>
                        </tr>
                        <tr className='oddrow'>
                            <td><FaOilWell /></td>
                            <td>  Unconventional Hydrocarbon Resources</td>
                        </tr>
                        <tr className='evenrow'>
                            <td><GiOilPump /></td>
                            <td>Flow Assurance </td>
                        </tr>
                        <tr className='oddrow'>
                            <td><FaOilWell /></td>
                            <td>Carbon Capture Utilization and Storage
                                (CCUS) </td>
                        </tr>
                        <tr className='evenrow'>
                            <td><GiOilPump /></td>
                            <td>Health, Safety, Security, Environment
                                and Well Control </td>
                        </tr>
                        <tr className='oddrow'>
                            <td><FaOilWell /></td>
                            <td>Development in AI/ML, optimization
                                algorithms and digitalization in
                                Petroleum Industry</td>
                        </tr>
                        <tr className='evenrow'>
                            <td><GiOilPump /></td>
                            <td>Geothermal energy harvesting</td>
                        </tr>
                        <tr className='oddrow'>
                            <td><FaOilWell /></td>
                            <td>Geological storage development</td>
                        </tr>
                        <tr className='evenrow'>
                            <td><GiOilPump /></td>
                            <td>Optimization of petroleum production
                                operation</td>
                        </tr>
                        <tr className='oddrow'>
                            <td><FaOilWell /></td>
                            <td>Field case studies</td>
                        </tr>
                        <tr className='evenrow'>
                            <td><GiOilPump /></td>
                            <td>Pipeline Engineering in oil & gas
                                transportation</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
