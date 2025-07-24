import { BarChart } from '@mui/x-charts';


export const HistoricalProgressChart = () => {
    return (
       
    
            <BarChart
              xAxis={[
                {
                  id: 'week',
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                  scaleType: 'band',
                },
              ]}
              series={[
                {
                  data: [12, 19, 9, 14, 18, 10, 7],
                  color: '#5386F4',
                  label: 'Sets',
                },
              ]}
              width={500}
              height={300}
              sx={{
                '.MuiChartsAxis-tickLabel': {
                  fontSize: 12,
                  fill: '#4B5563',
                },
                '.MuiChartsLegend-root': {
                  fontSize: 14,
                },
              }}
            />
      );
}
