import React, { memo } from 'react';
import { Card, Typography, MenuItem, Select, Button } from '../../../components/';
import { CardPanelContentStyled, ItemStyled } from "./style";
import COUNTRIES from '../../../commons/constants/countries';
import RefreshIcon from '../../../assets/images/refresh.svg';

const navigatorHasShare = navigator.share;

function Panel({ updateAt, onChange, data, country, getCoviddata }) {
    const { cases, todayDeaths, recovered, deaths, todayCases } = data

    const renderCountries = (country, index) => (
        <MenuItem key={`country - ${index}`} value={country.value} >
            <ItemStyled>
                <div>{country.label}</div>
                <img src={country.flag} alt={`País - ${country.label}`} />
            </ItemStyled>
        </MenuItem >
    )

    const textCovid19 = `País ${country} - Recuperados - ${recovered}`

    const shareInfo = () => {
        navigator.share({
            title: `Dados do covid - 19 ${country}`,
            text: textCovid19,
            url: 'https://covid-19.vercel.app'
        })
    }

    const copyInfo = () => (
        navigator.clipboard.writeText(textCovid19)
    )

    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    )

    const renderCopyButton = (
        <div>
            <Button variant="contained" color="primary" onClick={copyInfo}>
                Copiar
            </Button>
        </div>
    )

    return (
        <Card>
            <CardPanelContentStyled>
                <div>
                    <Typography variant="h5" component="span" color="primary">COVID - 19</Typography>
                    <br />
                    <Typography variant="body-2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
                    <div className="pt-2">
                        <Select onChange={onChange} value={country}>
                            {COUNTRIES.map(renderCountries)}
                        </Select>
                    </div>
                </div>
                {navigatorHasShare ? renderShareButton : renderCopyButton}
            </CardPanelContentStyled>
        </Card >
    )
}

export default memo(Panel)