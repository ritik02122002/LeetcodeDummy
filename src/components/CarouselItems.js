
const CarouselItems = (props) => {
    const { name, displayTitle, subheading, imageLink, targetLink } = props.carouselData;
    return (

        <a href={targetLink}><img src={imageLink} title={name} className="h-40 w-80 m-3 hover:shadow-gray-500 hover:shadow-lg"></img></a>

    )
}
export default CarouselItems;