import './styles.css'
 
const SocialLinks = (props) => {
    let {linkObj} = props

    return (
        <div className='socialLink'>
            <span className='socialLink__name' > - {linkObj.name}</span>
            <div className='socialLink__link'>
                <a href={linkObj.link} target='_blank' rel="noreferrer"> {linkObj.link}</a>
            </div>

        </div>
    )
}



export default SocialLinks