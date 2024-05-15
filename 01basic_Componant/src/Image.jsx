// Way-1 to define props

// function Image(props) {
//     return (
//         <div>
//             <img src= {props.src} width={props.width} height={props.height} />
//         </div>
//     )
// }

// Way-2

function Image( {src, width, height}) {
    return (
        <>
            <img src={src} width={width} height={height} />
        </>
    )
}

export default Image;