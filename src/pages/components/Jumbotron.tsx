import './Jumbotron.scss';


export default function Jumbotron() {
    return (
        <div className="jumbotron">
            <h1>Amazyno</h1>
            <div className='slogan'>
                Mettiti comodo ed ordina ciò che preferisci
            </div>
            <button className='amazyno-button'>Acquista Ora</button>
            <img src="/assets/jumbotron.jpg" alt="jumbotron" />
        </div>
    )
}