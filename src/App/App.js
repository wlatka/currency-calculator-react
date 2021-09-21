import { useState } from "react";
import { StyledForm, Title, Fieldset, Legend, Span, Input, Button } from "./styled";
import Clock from "./Clock";

function App() {

    const [name, setName] = useState("");

    const pln = 4.5577 * name;
    const usd = 1.18 * name;
    const gbp = 0.86 * name;

    const removeName = () => (
        name
    );

    return (
        <>
            <Clock />
            <StyledForm>
                <Title>Konwerter walut</Title>
                <Fieldset>
                    <Legend>Przelicz z EUR na inne waluty.</Legend>
                    <p>
                        <label>
                            <Span>Wpisz kwotę EUR *:</Span>
                            <Input
                                required
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
                </Fieldset>
                <p>
                    <Button type={removeName}>Wyczyść</Button>
                </p>
            </StyledForm>
        </>
    );
};

export default App;