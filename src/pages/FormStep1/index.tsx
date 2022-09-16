import { useHistory } from 'react-router-dom';
import * as C from './styles';
import { useForm, FormActions } from '../../contexts/FormContext';
import { Theme } from '../../components/Theme';
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {
    const history = useHistory();
    const { state, dispatch } = useForm();

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    const handleNextStep = () => {
        if(state.birthdate && state.name !== '')  {
            history.push('/step2');
        } else {
            alert("Preencha os dados.");
        }
    }
    

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    const handleBithdateChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setbirthDate,
            payload: e.target.value
        });
    }

    return (
        <Theme>
            <C.Container>
                <div>
                <p>Passo 1/3</p>
                <h1>Vamos começar com seu nome</h1>
                <p>Preencha os campos abaixo.</p>

                <hr/>

                <label>
                    Seu nome completo
                    <input
                        type="text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <div className="App">
      <h3>Qual sua data de nascimento?</h3>
      {/* <iframe  width="100%" height="100%" src="https://ciot.truckpadpay.com.br/#/cadastro"></iframe> */}
    </div>
                

                {/* <label>
                   Data de Nascimento
                    <input
                        type="text"
                        autoFocus
                        value={state.date}
                    />
                </label> */}

                <label>
                   Data de Nascimento
                    <input
                        type="date"
                        autoFocus
                        value={state.birthdate}
                        onChange={handleBithdateChange}
                    />
                </label>

                <button className="button2" onClick={handleNextStep}>Próximo</button>
                </div>
            </C.Container>
        </Theme>
    );
}