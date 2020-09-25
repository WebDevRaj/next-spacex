import React from 'react';
import { shallow } from 'enzyme';

import Card from './index';

describe('Card component', () => {
	const props = {
		"flight_number": 6,
		"mission_name": "Falcon 9 Test Flight",
		"mission_id": [
			"EE86F74"
		],
		"launch_year": "2010",
		"launch_date_unix": 1275677100,
		"launch_date_utc": "2010-06-04T18:45:00.000Z",
		"launch_date_local": "2010-06-04T14:45:00-04:00",
		"is_tentative": false,
		"tentative_max_precision": "hour",
		"tbd": false,
		"launch_window": 0,
		"rocket": {
			"rocket_id": "falcon9",
			"rocket_name": "Falcon 9",
			"rocket_type": "v1.0",
			"first_stage": {
				"cores": [
					{
						"core_serial": "B0003",
						"flight": 1,
						"block": 1,
						"gridfins": false,
						"legs": false,
						"reused": false,
						"land_success": null,
						"landing_intent": false,
						"landing_type": null,
						"landing_vehicle": null
					}
				]
			},
			"second_stage": {
				"block": 1,
				"payloads": [
					{
						"payload_id": "Dragon Qualification Unit",
						"norad_id": [
							36595
						],
						"reused": false,
						"customers": [
							"SpaceX"
						],
						"nationality": "United States",
						"manufacturer": "SpaceX",
						"payload_type": "Dragon Boilerplate",
						"payload_mass_kg": null,
						"payload_mass_lbs": null,
						"orbit": "LEO",
						"orbit_params": {
							"reference_system": "geocentric",
							"regime": "low-earth",
							"longitude": null,
							"semi_major_axis_km": 6634.458,
							"eccentricity": 0.0030715,
							"periapsis_km": 235.945,
							"apoapsis_km": 276.701,
							"inclination_deg": 34.5005,
							"period_min": 89.632,
							"lifespan_years": null,
							"epoch": "2010-06-04T20:04:51.000Z",
							"mean_motion": 16.06552645,
							"raan": 41.2862,
							"arg_of_pericenter": 213.759,
							"mean_anomaly": 146.1185
						}
					}
				]
			},
			"fairings": null
		},
		"ships": [],
		"telemetry": {
			"flight_club": null
		},
		"launch_site": {
			"site_id": "ccafs_slc_40",
			"site_name": "CCAFS SLC 40",
			"site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
		},
		"launch_success": true,
		"links": {
			"mission_patch": "https://images2.imgbox.com/d6/12/yxne8mMD_o.png",
			"mission_patch_small": "https://images2.imgbox.com/5c/36/gbDKf6Y7_o.png",
			"reddit_campaign": null,
			"reddit_launch": null,
			"reddit_recovery": null,
			"reddit_media": null,
			"presskit": "http://forum.nasaspaceflight.com/index.php?action=dlattach;topic=21869.0;attach=230821",
			"article_link": "http://www.spacex.com/news/2013/02/12/falcon-9-flight-1",
			"wikipedia": "https://en.wikipedia.org/wiki/Dragon_Spacecraft_Qualification_Unit",
			"video_link": "https://www.youtube.com/watch?v=nxSxgBKlYws",
			"youtube_id": "nxSxgBKlYws",
			"flickr_images": []
		},
		"details": null,
		"upcoming": false,
		"static_fire_date_utc": "2010-03-13T00:00:00.000Z",
		"static_fire_date_unix": 1268438400,
		"timeline": {
			"webcast_liftoff": 123,
			"go_for_prop_loading": -2280,
			"rp1_loading": -2100,
			"stage1_lox_loading": -2100,
			"stage2_lox_loading": -960,
			"engine_chill": -420,
			"prelaunch_checks": -60,
			"propellant_pressurization": -60,
			"go_for_launch": -45,
			"ignition": -3,
			"liftoff": 0,
			"maxq": 76,
			"meco": 174,
			"stage_sep": 176,
			"second_stage_ignition": 179,
			"seco-1": 476
		},
		"crew": null
	}

	const wrapper = shallow(<Card launch={props} />);
	it('renders card component', () => {
		expect(wrapper.find('.card')).toHaveLength(1);
	});

	it('renders mission image', () => {
		expect(wrapper.find('img').prop("src")).toEqual(props.links.mission_patch)
	})

	it('renders mission name', () => {
		expect(wrapper.find('.card_head').text()).toEqual(props.mission_name)
	});

	it('renders mission ids', () => {
		expect(wrapper.find('.card_ids li').text()).toEqual(props.mission_id[0])
	});
	
	it('renders launch year', () => {
		expect(wrapper.find('[data-test-id="launch_year"]').text()).toEqual(props.launch_year)
	});

	it('renders launch success', () => {
		expect(wrapper.find('[data-test-id="launch_success"]').text()).toEqual(props.launch_success +'')
	});

	it('renders land success', () => {
		expect(wrapper.find('[data-test-id="launch_land"]').text()).toEqual(props.rocket.first_stage.cores[0].land_success + '')
	});
});