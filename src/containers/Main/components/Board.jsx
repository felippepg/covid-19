import React, { memo } from 'react';
import { Grid, Skeleton } from '../../../components';
import Card from './Card';

function Board({ data }) {
    const { cases, todayDeaths, recovered, deaths, todayCases } = data

    const getValue = (value) => {
        if (value >= 0) {
            return value
        } else {
            return (
                <Skeleton variant="text" width={182} height={60} />
            )
        }
    }

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={getValue(cases)} label="Total de casos" color="#5df8ff" />
            </Grid>

            <Grid item xs={12} md={3}>
                <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#F7b829" />
            </Grid>

            <Grid item xs={12} md={3}>
                <Card value={getValue(todayCases)} label="Casos hoje" color="#000" />
            </Grid>

            <Grid item xs={12} md={3}>
                <Card value={getValue(deaths)} label="Total de mortos" color="#E95078" />
            </Grid>

            <Grid item xs={12} md={3}>
                <Card value={getValue(recovered)} label="Total de recuperados" color="#67c887" />
            </Grid>

        </Grid>
    )
}

export default Board;