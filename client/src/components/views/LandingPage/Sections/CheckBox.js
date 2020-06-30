import React, { useState } from 'react';
import { Collapse, Checkbox } from 'antd';
const { Panel } = Collapse;
function CheckBox(props) {
	const [Checked, setChecked] = useState([]);

	const handleToggle = (value) => {
		// 누른 것의 Index를 구하고
		// 전체 checked된 State에서 현재 누른 Checkbox가 이미 있다면, 빼주고
		// State에 넣어준다.
		//.indexOf() - 없는 값을 넣으면 -1을 리턴해줌 - checked가 안 된 것.
		const currentIndex = Checked.indexOf(value);
		const newChecked = [...Checked];

		if (currentIndex === -1) {
			newChecked.push(value);
		} else {
			newChecked.splice(currentIndex, 1);
		}

		setChecked(newChecked);
		props.handleFilters(newChecked);
	};
	const renderCheckboxLists = () =>
		props.list &&
		props.list.map((value, index) => (
			<React.Fragment key={index}>
				<Checkbox
					style={{ marginLeft: '5px' }}
					onChange={() => handleToggle(value._id)}
					checked={Checked.indexOf(value._id) === -1 ? false : true}
				/>
				<span>{value.name}</span>
			</React.Fragment>
		));
	return (
		<div>
			<Collapse defaultActiveKey={['1']}>
				<Panel header="Continents">{renderCheckboxLists()}</Panel>
			</Collapse>
		</div>
	);
}

export default CheckBox;
