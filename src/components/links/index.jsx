import './styles.css'
 
const SocialLinks = (props) => {
    let {linkObj} = props

    return (
        <div className='socialLink'>
            <span> - {linkObj.name}</span>
            <a href={linkObj.link}> {linkObj.link}</a>
        </div>
    )
}



export default SocialLinks