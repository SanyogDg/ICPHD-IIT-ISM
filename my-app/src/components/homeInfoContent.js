import ismLogo from '../images/ism_logo.png'

export default function HomeInfoContent() {
    return (
        <div className=" w-[100vw] px-[200px] pb-[3rem]">

            


            <div className="w-[100%] bg-[#FFF] rounded-xl p-[1rem] shadow-md mt-[6rem]">
                <h1 className="text-[2rem] font-bold text-center mb-[2rem]">About IIT (ISM)  Dhanbad </h1>

                <img className="float-right" src={ismLogo} />

                <p className="text-justify">

                    Known as the Indian School of Mines till 2016, this institute was established in 1926 on the lines of The Royal School of Mines, London. Presently the
                    Indian Institute of Technology (Indian School of Mines) is a multi-disciplinary institute catering to a wide range of engineering and scientific
                    disciplines and is considered among the best engineering institutes in the country.
                    The Department of Petroleum Engineering at Indian Institute of Technology (Indian School of Mines), Dhanbad was established in the year 1957 to
                    make its mark in the Oil and Gas Industry in the country. Subsequent developments, under the guidance of a series of distinguished educators,
                    renowned personalities from the oil and gas industry and scientists, have led the department to the forefront of research and teaching in Petroleum
                    Engineering. The Department offers B. Tech, M. Tech and PhD programs.
                    Blended with the best quality teaching in Petroleum Engineering, the Department offers excellent R & D facilities competitive with the best
                    academic/research institute of global repute. Department has established its collaboration in various industry and academic institutions throughout
                    the globe and faculty members are actively involved in quality R&D in various fields of the petroleum industry including EOR, Unconventional
                    hydrocarbons like CBM, Gas Hydrates, Shale Gas, Reservoir Simulation, Data Analytics, Reservoir Characterization, Geothermal, Geo-mechanics. R&D
                    projects include both fundamental research as well as technology ready for field applications.
                    UG/PG students are well connected to the E & P industry through guest lectures by various domain experts from Industry and academia across the
                    globe, organized by the Department as well as students’ chapters of SPE, FIPI and others
                </p>

            </div>


            <div className="w-[100%] bg-[#FFF] rounded-xl p-[2rem] shadow-md mt-[6rem] mb-[3rem]">
                <h1 className="text-[2rem] font-bold text-center mb-[2rem]">About Conference </h1>

                <img className="float-right" src={ismLogo} />

                <p className="text-justify">

                    Energy security of a country ensures the continuous supply of affordable energy, and closely tied with country's economic growth. The oil and gas
                    industry plays the most significant role in economic development through energy sustainability, without compromising the future generation ability.
                    To achieve this, the industry is facing setbacks in terms of cost reduction, optimizing the performance of its industrial assets, and minimizing its
                    environmental impact. These challenges are due to increasing global demand, fluctuating pricing dynamics, and the imposition of stricter
                    environmental regulations.
                    The petroleum industries and academia must strive for enhanced operational efficiency, process optimization and leverage technological
                    advancements to bestow sustainability. Therefore, new ideas had to be formed to address these complexities.
                    International Conference Petroleum, Hydrogen and Decarburization (ICPHD) 2024 welcome participants, presenters, and exhibitors from across the
                    globe to gather at IIT(ISM) Dhanbad. It is our utmost pleasure to extend an invitation to each one of you, urging you to join us and secure your
                    registration for this conference.

                </p>

            </div>

        </div>
    );
}