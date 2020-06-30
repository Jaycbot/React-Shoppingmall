import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import { Row, Col } from 'antd';
function DetailProductPage(props) {
	const productId = props.match.params.productId;
	const [Product, setProduct] = useState({});
	useEffect(() => {
		//&type=single - 하나만 가져옴.
		// ?id = ...  ...을 변수로 넘겨주겠다는 의미 - 'Query String'
		axios
			.get(`/api/product/products_by_id?id=${productId}&type=single`)
			.then((response) => {
				setProduct(response.data[0]);
			})
			.catch((err) => alert(err));
	}, []);
	return (
		<div style={{ width: '100%', padding: '3rem 4rem' }}>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<h1>{Product.title}</h1>
			</div>
			<br />
			<Row gutter={[16, 16]}>
				<Col lg={12} sm={24}>
					<ProductImage detail={Product} />
				</Col>
				<Col lg={12} sm={24}>
					<ProductInfo detail={Product} />
				</Col>
			</Row>
		</div>
	);
}

export default DetailProductPage;
