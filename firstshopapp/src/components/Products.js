import React from 'react';

import ProductItem from './ProductItem';
import Card from './Card';

import './Products.css';

const Products = (props) => {
    return (
        <Card className="products">
            <ProductItem
            title={props.item[0].title}
            amount={props.item[0].amount}
            date={props.items[0].date}
            />
            <ProductItem
            title={props.item[1].title}
            amount={props.item[1].amount}
            date={props.items[1].date}
            />
            <ProductItem
            title={props.item[2].title}
            amount={props.item[2].amount}
            date={props.items[2].date}
            />
            <ProductItem
            title={props.item[3].title}
            amount={props.item[3].amount}
            date={props.items[3].date}
            />
        </Card>
    );
};

export default Products;