import { FormEvent, useState, } from 'react';
import { Container,  TransactionTypeContainer, RadioBox} from './styles';
import { useTransactions } from '../../hooks/useTransactions';


import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg';



interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

const customStyles = {
    overlay:{
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)', 
    },
};

export function NewTransactionModal( {isOpen, onRequestClose}: NewTransactionModalProps) {
    const {createTransaction} =  useTransactions();


    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState ('deposit');

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type, 
            createdAt:''
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }
  

    return(
       <Modal 
            isOpen={isOpen}
            onRequestClose={ onRequestClose}
            style={customStyles}
    
       > 
            <button 
               type='button' 
               onClick={onRequestClose} 
               className="react-modal-close"
            >
                <img src={closeImg} alt='Fechar modal' />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastra transação</h2>

                <input
                    placeholder='Titulo'
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}  
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type='button'
                        onClick={()=>{setType('deposit');}}
                        isActive={type == 'deposit'}
                        activeColor="green"
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </RadioBox>

                    <RadioBox
                        type='button'
                        onClick={()=>{setType('withdraw');}}
                        isActive={type == 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcomeImg} alt="Saida" />
                        <span>Saida</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                placeholder='categoria'
                value={category}
                onChange={event => setCategory(event.target.value)}   
                />

                <button type='submit'>
                    cadastrar
                </button>
            </Container>

        </Modal>
    );
}