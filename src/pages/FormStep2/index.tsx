import { useHistory, Link } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';
import { SelectOption } from '../../components/SelectOption';
import InputMask from 'react-input-mask';

export const FormStep2 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        if(state.name === '') {
            history.push('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 2
            });
        }
    }, []);

    const handleNextStep = () => {
        if(state.name !== '') {
            history.push('/step3');
        } else {
            alert("Preencha os dados.");
        }
    }

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        });
    }

    return (
        <Theme>
            <C.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, qual a categoria é a sua habilitação?</h1>
                <p>Escolha a opção que pretende trabalhar conosco.</p>

                <hr/>
                <SelectOption
                    title="Categoria A"
                    description="Tenho apenas Carteira Provisória"
                    icon="🏍️"
                    selected={state.level === 0}
                    onClick={()=>setLevel(0)}
                />

                <SelectOption
                    title="Categoria B"
                    description="Tenho apenas Carteira Provisória"
                    icon="🚗"
                    selected={state.level === 1}
                    onClick={()=>setLevel(1)}
                />

                <SelectOption
                    title="Categoria C"
                    description="Tenho apenas Carteira Provisória"
                    icon="🛻"
                    selected={state.level === 2}
                    onClick={()=>setLevel(2)}
                />

<SelectOption
                    title="Categoria D"
                    description="Tenho apenas Carteira Provisória"
                    icon="🚚"
                    selected={state.level === 3}
                    onClick={()=>setLevel(3)}
                />

<SelectOption
                    title="Categoria E"
                    description="Tenho apenas Carteira Provisória"
                    icon="🚛"
                    selected={state.level === 4}
                    onClick={()=>setLevel(4)}
                />

                <label>
                    Digite o número da sua CNH
                    <input
                        type="number"
                        autoFocus
                    />
                </label>

                <label>
                    Digite o número do seu CPF
                    <InputMask  placeholder="Digite o seu CPF"
                    mask="999.999.999-99"
                     />
                </label>


                <Link to="/" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </C.Container>


        </Theme>
        

    );

}