import styled from 'styled-components';

export const Form = styled.div`
    width: 320px;
    height: fit-content;
    background: #fff;
    padding: 30px 20px;
    border-radius: 5px;

    strong {
        margin-bottom: 30px;
        font-size: 22px;
        display: block;
        text-align: center;
    }

    form {
        label {
            display: block;

            color: #ACACAC;
            font-size: 14px;
            font-weight: bold;
        }

        input {
            width: 100%;
            border: 0;
            height: 32px;
            border-bottom: 1px solid #eee;
        }

        .input-block + .input-block {
            margin-top: 20px;
        }

        .input-group {
            margin-top: 20px;

            display: grid;
            grid-template-columns: repeat(2, 1fr);
            column-gap: 10px;

            .input-block {
                margin-top: 0
            }
        }

        button[type='submit'] {
            background: #7d40e7;
            color: #fff;
            
            font-size: 18px;
            margin-top: 30px;
            padding: 15px 20px;
            border-radius: 2px;

            transition: background 0.5s;
        }

        button[type='submit']:hover {
            background: #6931ca;
        }
    }
`
