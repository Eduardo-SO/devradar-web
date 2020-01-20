import styled from 'styled-components';

export const List = styled.div`
    flex: 1;
    margin-left: 30px;

    ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;

        @media(max-width: 600px) {
            grid-template-columns: 1fr;
        }
    
    li.dev-item {
        background: #fff;
        box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
        border-radius: 2px;
        padding: 20px;
        display: flex;
        flex-direction: column;

            header {
                display: flex;
                flex-direction: row;
                align-items: center;

                img {
                    width: 54px;
                    height: 54px;
                    border-radius: 50%;
                }

                .dev-info {
                    margin-left: 10px;

                    span {
                        font-size: 13px;
                        color: #999;
                        margin-top: 2px;
                    }

                    strong {
                        display: block;
                        font-size: 16px;
                        color: #333;
                    }
                }
            }
        }

        p {
            color: #666;
            font-size: 14px;
            line-height: 20px;
            margin: 10px 0;   
            flex: 1
        }

        a {
            color: #8e4dff;
            font-size: 14px;
            text-decoration: none;
            align-self: flex-end;

            &:hover {
                color: #5a2ea6;
            }
        }
    }

    @media(max-width: 1000px) {
        flex-direction: column;
        padding: 20px;

        margin-left: 0;
        margin-top: 20px;
    }
`;
