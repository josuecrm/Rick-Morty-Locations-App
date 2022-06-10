import axios from "axios";
import { useEffect, useState } from "react";

const Resident = ( {urlResident} ) => {

    const [ residentData, SetResidentData ] = useState( {} )

    useEffect(() => {
        axios.get(urlResident)
            .then( res => SetResidentData(res.data) )
    }, [urlResident] )

    return (
        <article className="card-resident">
            <div className="status">
                    <p>{residentData.status}</p>
            </div>
            <div className="image">
                <img className="image-resident" src={residentData.image} alt="resident" />
            </div>

            <div className="graphic"></div>

            <div className="info-resident">
                <h3 className="name-resident">{residentData.name}</h3>
                <p className="type-info"> Origin</p>
                <p className="info">{residentData.origin?.name}</p>
                <p className="type-info"> Episodes Where It Appears</p>
                <p className="info">{residentData.episode?.length}</p>
            </div>
        </article>
    );
};

export default Resident;