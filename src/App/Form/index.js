import { useState } from 'react';
import { Wrapper, Fieldset, Title, Legend, Loading, Failure, Span, Input, Info, Button } from "./styled";
import { useRatesData } from "./useRatesData";
import { Result } from "../Result";

export const Form = () => {
    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];

        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        });
    }

    const [currency, setCurrency] = useState("EUR");
    const [amount, setAmount] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    };

    return (

        <Wrapper>
        <form onSubmit={onSubmit}>
            <Title>
                Konwerter walut
            </Title>
            <Fieldset>
                <Legend>Przelicz z PLN na inne waluty</Legend>
                {ratesData.state === "loading"
                    ? (
                        <Loading>
                            Chwileczkę... <br />Ładuję kursy walut z Europejskiego Banku Centralnego.
                        </Loading>
                    )
                    : (
                        ratesData.state === "error" ? (

                            <Failure>
                                Ojojoj... Coś poszło nie tak. Sprawdź czy masz połączenie z internetem.
                            </Failure>
                        ) : (
                            <>
                                <p>
                                    <label>
                                        <Span>Kwota w PLN* </Span>

                                        <Input
                                            type="number"
                                            value={amount}
                                            onChange={({ target }) => setAmount(target.value)}
                                            placeholder="Wpisz kwotę w zł"
                                            min="0.01"
                                            step="any"
                                            required
                                        />
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <Span>Waluta: </Span>
                                        <Input
                                            as="select"
                                            value={currency}
                                            onChange={({ target }) => setCurrency(target.value)}
                                        >
                                            {Object.keys(ratesData.rates).map(((currency) => (
                                                <option
                                                    key={currency}
                                                    value={currency}
                                                >
                                                    {currency}
                                                </option>
                                            )))}
                                        </Input>
                                    </label>
                                </p>
                                <p>
                                    <Button>Przelicz</Button>
                                </p>
                                <Info>
                                    Kursy walut pobierane są z Europejskiego Banku Centralnego.
                                </Info>
                                <Result result={result} />
                            </>
                        )
                    )}
            </Fieldset>
        </form>
        </Wrapper>
    );
};

export default Form;