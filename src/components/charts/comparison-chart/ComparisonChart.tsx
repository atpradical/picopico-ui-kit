import { useState } from 'react'
import { DateRange } from 'react-day-picker'

import { DatePickerRange, Typography } from '@/components'
import clsx from 'clsx'
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import s from './ComparisonChart.module.scss'

type Props<T> = {
  chartTitle: string
  data: T[]
  onDateSelect: (date: DateRange | undefined) => void
  primaryLegendText: string
  primaryLineColor: string
  secondaryLegendText: string
  secondaryLineColor: string
  selectedDate: DateRange | undefined
}

const ComparisonChart = <T,>({
  chartTitle,
  data,
  onDateSelect,
  primaryLegendText,
  primaryLineColor,
  secondaryLegendText,
  secondaryLineColor,
  selectedDate,
}: Props<T>) => {
  // Example: https://recharts.org/en-US/storybook
  const [activeSeries, setActiveSeries] = useState<string[]>([])

  const handleLegendClick = (dataKey: string) => {
    if (activeSeries.includes(dataKey)) {
      setActiveSeries(activeSeries.filter(el => el !== dataKey))
    } else {
      setActiveSeries(prev => [...prev, dataKey])
    }
  }

  const renderLegendText = (value: string, entry: any) => {
    const { inactive } = entry

    return (
      <Typography
        as={'span'}
        className={clsx(s.legend, inactive ? s.inactiveLegend : s.activeLegend)}
        variant={'regular_14'}
      >
        {value}
      </Typography>
    )
  }

  return (
    <div className={s.chartContainer}>
      <div className={s.chartTitleContainer}>
        <Typography className={s.chartTitle} variant={'h1'}>
          {chartTitle}
        </Typography>
        <DatePickerRange
          classNameContainer={s.dateRangeContainer}
          onSelect={onDateSelect}
          selected={selectedDate}
        />
      </div>
      <ResponsiveContainer>
        <LineChart data={data}>
          <Line
            activeDot={{
              fill: primaryLineColor,
              stroke: primaryLineColor,
            }}
            dataKey={'param1'}
            dot={false}
            hide={activeSeries.includes(primaryLegendText)}
            stroke={primaryLineColor}
            strokeOpacity={0.9}
            strokeWidth={3}
            type={'monotone'}
          />
          <Line
            activeDot={{
              fill: secondaryLineColor,
              stroke: secondaryLineColor,
            }}
            dataKey={'param2'}
            dot={false}
            hide={activeSeries.includes(secondaryLegendText)}
            stroke={secondaryLineColor}
            strokeOpacity={0.9}
            strokeWidth={2}
            type={'monotone'}
          />
          <XAxis
            axisLine={{ stroke: Colors.Dark100, strokeWidth: 1 }}
            dataKey={'name'}
            padding={{ right: 20 }}
            tick={{ fill: Colors.Light100, fontSize: 14, textAnchor: 'start' }}
            tickLine={false}
            tickMargin={10}
          />
          <YAxis
            axisLine={false}
            tick={{ fill: Colors.Light100, fontSize: 14 }}
            tickLine={false}
            tickMargin={28}
            width={80}
          />
          <Legend
            formatter={renderLegendText}
            height={36}
            iconSize={12}
            iconType={'circle'}
            inactiveColor={Colors.Dark100}
            onClick={props => {
              handleLegendClick(props.value)
            }}
            payload={[
              {
                color: secondaryLineColor,
                inactive: activeSeries.includes(secondaryLegendText),
                value: secondaryLegendText,
              },
              {
                color: primaryLineColor,
                inactive: activeSeries.includes(primaryLegendText),
                value: primaryLegendText,
              },
            ]}
            verticalAlign={'top'}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: Colors.Dark500,
              border: 'none',
              borderRadius: '6px',
              color: Colors.Light100,
            }}
            cursor={{ stroke: Colors.Danger900 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

enum Colors {
  Accent100 = '#73A5FF',
  Accent500 = '#397DF6',
  Accent900 = '#234E99',
  Danger100 = '#FF8099',
  Danger500 = '#CC1439',
  Danger900 = '#660A1D',
  Dark100 = '#4C4C4C',
  Dark500 = '#171717',
  Dark900 = '#000000',
  Light100 = '#FFFFFF',
  Light500 = '#EDF3FA',
  Light900 = '#8D9094',
  Success100 = '#80FFBF',
  Success500 = '#14CC70',
  Success900 = '#0A6638',
  Warning100 = '#FFD073',
  Warning500 = '#D99000',
  Warning900 = '#664400',
}

const mockdata = [
  { amt: 2400, name: '01', param1: 2400, param2: 400 },
  { amt: 1500, name: '02', param1: 1398, param2: 800 },
  { amt: 3200, name: '03', param1: 9800, param2: 908 },
  { amt: 2780, name: '04', param1: 3908, param2: 680 },
  { amt: 1890, name: '05', param1: 4800, param2: 1500 },
  { amt: 2390, name: '06', param1: 3800, param2: 1200 },
  { amt: 3490, name: '07', param1: 4300, param2: 2100 },
  { amt: 2100, name: '08', param1: 3900, param2: 1800 },
  { amt: 2800, name: '09', param1: 4200, param2: 1600 },
  { amt: 3100, name: '10', param1: 3600, param2: 1900 },
  { amt: 2600, name: '11', param1: 4100, param2: 1700 },
  { amt: 2900, name: '12', param1: 3700, param2: 2000 },
  { amt: 3300, name: '13', param1: 4500, param2: 1400 },
  { amt: 2200, name: '14', param1: 3200, param2: 1300 },
  { amt: 2700, name: '15', param1: 4700, param2: 1100 },
  { amt: 3000, name: '16', param1: 3500, param2: 1800 },
  { amt: 2500, name: '17', param1: 4100, param2: 1600 },
  { amt: 2800, name: '18', param1: 3800, param2: 1900 },
  { amt: 3200, name: '19', param1: 4300, param2: 1700 },
  { amt: 2400, name: '20', param1: 3600, param2: 1500 },
  { amt: 2900, name: '21', param1: 4200, param2: 1400 },
  { amt: 3100, name: '22', param1: 3900, param2: 1800 },
  { amt: 2600, name: '23', param1: 4400, param2: 1600 },
  { amt: 2800, name: '24', param1: 3700, param2: 1900 },
  { amt: 3300, name: '25', param1: 4600, param2: 1700 },
  { amt: 2500, name: '26', param1: 3400, param2: 1500 },
  { amt: 2700, name: '27', param1: 4800, param2: 1400 },
  { amt: 3000, name: '28', param1: 3800, param2: 1800 },
  { amt: 2800, name: '29', param1: 4200, param2: 1600 },
  { amt: 3200, name: '30', param1: 3900, param2: 1900 },
]

export { Colors, ComparisonChart, mockdata }
