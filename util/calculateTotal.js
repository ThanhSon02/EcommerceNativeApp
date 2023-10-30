export const caculateTotal = (list) => {
    return list.reduce((accumulator, currentvalue) => {
        return (
            accumulator +
            Math.ceil(
                currentvalue.product.price *
                    (1 - currentvalue.product.discount / 100) *
                    currentvalue.quantity
            )
        );
    }, 0);
};
