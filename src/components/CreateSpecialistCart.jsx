import React from "react";

const CreateSpecialistCart = ({dataSpec}) => {
    return (
        <section className="specialist-cart">
            {dataSpec.map((data) => (
                <section key={data.id} className="specialist-cart__description">
                    <section className="desctiption-tex-box">
                        <h3 className="description-title">{data.name}</h3>
                        <p className="description-speciality">{data.speciality}</p>
                        <p className="description-exp">{data.exp}</p>
                    </section>
                    <section className="description-img-box">
                        <img src={data.img} alt="Фото врача" className="description-img"/>
                    </section>
                </section>
            ))}
        </section>
    )
}

export default CreateSpecialistCart;