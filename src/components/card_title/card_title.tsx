import cl from './card_title.module.scss';

interface ICardTitle {
    companyName: string;
    dynamicColor?: string;
}

const CardTitle = ({companyName, dynamicColor}: ICardTitle): JSX.Element => {
    const inlineStyle = dynamicColor ? { color: dynamicColor } : {};
    return (
        <h2 className={cl.cardTitle} style={inlineStyle}>{companyName}</h2>
    )
};

export default CardTitle;