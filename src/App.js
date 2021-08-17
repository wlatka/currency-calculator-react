import { useState } from "react";
import "./style.css";



function App() {

    const [name, setName] = useState("");

    const pln = 4.5577 * name;
    const usd = 0.83 * name;
    const gbp = 0.87 * name;

    const removeName = () => (
        name
    );

    return (

        <form className="form">
            <h1 className="form__title">Konwerter walut</h1>
            <fieldset className="form__fieldset">
                <legend className="form__legent">Przelicz z EUR na inne waluty.</legend>
                <p>
                    <label>
                        <span className="form__innerText">Wpisz kwotę EUR *:</span>
                        <input
                            required
                            className="form__field"
                            type="number"
                            min="1"
                            onChange={({ target }) => setName(target.value)}
                            value={name} />
                    </label>
                </p>
                <p>
                    <label>
                        PLN: <strong>{pln.toFixed(2)} zł</strong>
                    </label>
                </p>
                <p>
                    <label>
                        USD: <strong>{usd.toFixed(2)} $</strong>
                    </label>
                </p>
                <p>
                    <label>
                        GBP: <strong>{gbp.toFixed(2)} £</strong>
                    </label>
                </p>
            </fieldset>
            <p>
                <button className="form__button" type={removeName}>Wyczyść</button>
            </p>
        </form>


    );
};

export default App;