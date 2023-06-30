// --- core
import { useState } from "react";

// --- components
import { Default, SectionCarousel } from "presentation/component";

// --- hooks

// --- models

// --- widgets
import WidgetPersonalInformation from "infrastucture/widget/WidgetPersonalInformation";
import WidgetPosts from "infrastucture/widget/WidgetPosts";

// --- state
import useCart from "core/state/cart";

import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

const Home = () => {
	const { totalCart, handleIncrement, handleDecrement } = useCart();

	const [startDate, setStartDate] = useState(new Date());

	return (
		<>
			<Default>
				<div className="container">
					<SectionCarousel />
					<div>
						<h2>Datepicker</h2>
						<DatePicker
							selected={startDate}
							onChange={(date) => setStartDate(date)}
						/>
						<p>{moment(startDate).format("MMM Do YY")}</p>
					</div>
					<WidgetPersonalInformation />
					<div>
						<h2>{totalCart}</h2>
						<button type="button" onClick={handleDecrement}>
							-
						</button>
						<button type="button" onClick={handleIncrement}>
							+
						</button>
					</div>
					<WidgetPosts />
				</div>
			</Default>
		</>
	);
};

export default Home;
