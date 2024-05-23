import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {clearCart} from "../../../redux/thunks/cart-thunks";
import {AppStateType} from "../../../redux/reducers/root-reducer";
import {Order} from "../../../types/types";

const OrderFinalize: FC = () => {
    const dispatch = useDispatch();
    const order: Partial<Order> = useSelector((state: AppStateType) => state.order.order);

    useEffect(() => {
        dispatch(clearCart());
    }, []);

    return (
        <div className="container text-center mt-5">
            <h2>Cảm ơn bạn đã đặt hàng!</h2>
            <p>Mã số đơn hàng của bạn là: <span>{order.id}</span></p>
        </div>
    );
};

export default OrderFinalize;
