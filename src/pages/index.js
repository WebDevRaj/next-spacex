import Head from 'next/head'
import axios from 'axios';

import Card from "../components/Card";
import Loader from "../components/Loader";
import Filters from '../components/Filters';

const url = "https://api.spaceXdata.com/v3/launches";

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			data: this.props.data || [],
			filters: {
				year: null,
				sLaunch: null,
				sLand: null,
			},
		};
		this.getData = this.getData.bind(this)
		this.handleFilterChange = this.handleFilterChange.bind(this)
	}

	getData() {
		this.setState({ isLoading: true });
		let qs = "?limit=100";
		if (this.state.filters.sLaunch !== null) {
			qs += `&launch_success=${this.state.filters.sLaunch}`;
		}
		if (this.state.filters.sLand !== null) {
			qs += `&land_success=${this.state.filters.sLand}`;
		}
		if (this.state.filters.year !== null) {
			qs += `&launch_year=${this.state.filters.year}`;
		}

		axios.get(url + qs)
			.then((result) => {
				this.setState((prevState) => ({
					data: result.data,
					isLoading: false,
				}));
			})
			.catch((err) => {
				console.log(err);
				this.setState({ isLoading: false });
			});
	};

	handleFilterChange(filter, value) {
		switch (filter) {
			case "year":
				this.setState((prevState) => {
					return {
						filters: {
							...prevState.filters,
							year: value === prevState.filters.year ? null : value,
						},
					};
				}, this.getData);
				break;
			case "launch":
				this.setState((prevState) => {
					return {
						filters: {
							...prevState.filters,
							sLaunch: value === prevState.filters.sLaunch ? null : value,
						},
					};
				}, this.getData);
				break;
			case "land":
				this.setState((prevState) => {
					return {
						filters: {
							...prevState.filters,
							sLand: value === prevState.filters.sLand ? null : value,
						},
					};
				}, this.getData);
				break;
			default:
				break;
		}
	};

	render() {
		return (
			<>
				<Head>
					<title>SpaceX</title>
				</Head>
				<div className="App">
					<h1 className="app_header">SpacEx Launch programs</h1>
					<div className="rowFlex main_container">
						<Filters applied={this.state.filters} handleChange={this.handleFilterChange} />
						<section className="right_section">
							<div className="rowFlex cards_wrapper">
								{this.state.isLoading ? (
									<Loader />
								) : (
										this.state.data.map((d) => (
											<Card key={d.flight_number} launch={d} />
										))
									)}
								{this.state.data.length === 0 && !this.state.isLoading && (
									<div className="rowFlex no_data">No data found!</div>
								)}
							</div>
							<h4 className="dev_name">Developed by: Rajesh Sharma</h4>
						</section>
					</div>
				</div>
			</>
		);
	}
}

export default Main;

export async function getStaticProps() {
	const res = await axios.get(`${url}?limit=100`)
	return {
		props: {
			data: res.data,
		},
	}
}