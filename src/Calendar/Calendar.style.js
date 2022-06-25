import styled from 'styled-components'

export const Frame = styled.div`
    width: 500px;
    border-radius: 10px;
    border: 1px solid lightgrey;
    background-color: ${({ theme }) => theme.backgroundColor };;
`

export const Header = styled.div`
    border-radius: 10px 10px 0 0;
    font-size: 10px;
    font-weight: bold;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:${({ theme }) => theme.fontColor };
    background-color: ${({ theme }) => theme.backgroundColor2 };
`

export const Button = styled.div`
    cursor: pointer;

    &:hover {
        color:${({ theme }) => theme.activeColor };
    }
`

export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

export const Day = styled.div`
    color: ${({ theme }) => theme.fontColor };
    width: 14.2%;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

export const DayNumber = styled(Day)`
    display: flex;
    align-items: center;
    justify-content: center;
    
    p {
        border: ${({ isToday }) => ( isToday ? ({ theme }) => `${theme.fontColor} 3px solid`  : 'none')};
        border-radius: 50%;
        background-color: ${({ isSelected }) => ( isSelected ? ({ theme }) => theme.dayHighlight : 'none')};
        padding: .75em;
        width: 1em;
        height: 1em;
    }

    p:hover {
        color: ${({ theme }) => theme.fontHover };
        cursor: pointer;
    }
`