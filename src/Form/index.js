import "./style.css";

const Form = () => (

    <form className="form">
        <h1 className="form__title">Konwerter walut</h1>
        <fieldset className="form__fieldset">
            <legend className="form__legent">Przelicz z EUR na inne waluty.</legend>
            <p>
                <label>
                    <span className="form__innerText">Wpisz kwotę EUR *:</span> <input required className="form__field"
                        type="number" min="1" name="wpisz-kwote" />
                </label>
            </p>
            <p>
                <label>
                    PLN: <strong className="js-pln"></strong>
                </label>
            </p>
            <p>
                <label>
                    USD: <strong className="js-usd"></strong>
                </label>
            </p>
            <p>
                <label>
                    GBP: <strong className="js-gbp"></strong>
                </label>
            </p>
        </fieldset>
        <p>
            <button className="form__button" type="reset">Wyczyść</button>
        </p>
    </form>
);

export default Form;