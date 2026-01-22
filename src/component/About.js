import {LANG} from './util/lang';
const About = ({lang}) => {
    const data = LANG[lang];
    return (
        <div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
        </div>
    )
}
export default About;