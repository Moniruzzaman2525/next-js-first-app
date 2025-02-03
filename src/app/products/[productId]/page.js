const ProductDetails = async ({params, searchParams}) => {
    const productId = await params.productId
    console.log(await searchParams)
    return (
        <div>
            <h1>Dynamic product page {productId}</h1>
        </div>
    );
};

export default ProductDetails;