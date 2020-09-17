import React from 'react';

const Filters = ({applied, handleChange}) => {
    function renderYears() {
        let years = [];
        for (let y = 2006; y <= 2020; y++) {
            years.push(
                <button
                    key={y}
                    onClick={() => handleChange("year", y)}
                    className={`btn ${applied.year === y ? "active" : ""}`}
                >
                    {y}
                </button>
            );
        }
        return years;
    };
    return (
        <section className="colFlex filters">
            <h2>Filters</h2>
            <h5 className="filter_head">Launch Year</h5>
            <div className="rowFlex filter_block">{renderYears()}</div>
            <h5 className="filter_head">Successful Launch</h5>

            <div className="rowFlex filter_block">
                <button
                    className={`btn ${applied.sLaunch ? "active" : ""}`}
                    onClick={() => handleChange("launch", true)}
                >
                    True
                </button>
                <button
                    className={`btn ${applied.sLaunch === false ? "active" : ""}`}
                    onClick={() => handleChange("launch", false)}
                >
                    False
                </button>
            </div>
            <h5 className="filter_head">Successful Landing</h5>
            <div className="rowFlex filter_block">
                <button
                    className={`btn ${applied.sLand ? "active" : ""}`}
                    onClick={() => handleChange("land", true)}
                >
                    True
                </button>
                <button
                    className={`btn ${applied.sLand === false ? "active" : ""}`}
                    onClick={() => handleChange("land", false)}
                >
                    False
                </button>
            </div>
        </section>
    )
}

export default Filters;