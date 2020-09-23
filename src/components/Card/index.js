import React from "react";

const Card = ({ launch }) => {
	return (
		<div className="colFlex card">
			<img src={launch.links.mission_patch} alt={launch.mission_name} />
			<h6 className="card_head">{launch.mission_name}</h6>
			<span></span>
			<ul className="card_detail">
				{launch.mission_id.length > 0 && (
					<>
						<strong>Mission ids: </strong>
						<ul className="card_ids">
							{launch.mission_id.map((id) => (
								<li key={id}>{id}</li>
							))}
						</ul>
					</>
				)}
				<li>
					<strong>Launch Year: </strong>
					{launch.launch_year}
				</li>
				<li>
					<strong>Successful Launch: </strong>
					{launch.hasOwnProperty('launch_success') && launch.launch_success + ""}
				</li>
				<li>
					<strong>Successful Landing: </strong>
					{ launch.rocket.first_stage.cores[0].land_success + ""}
				</li>
			</ul>
		</div>
	);
};

export default Card;
