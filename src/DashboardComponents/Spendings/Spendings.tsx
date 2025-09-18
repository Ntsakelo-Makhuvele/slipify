import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';

const data2 = [
  { month: 'Jan', spend: 2500 },
  { month: 'Feb', spend: 3200 },
  { month: 'Mar', spend: 4100 },
  { month: 'Apr', spend: 5000 },
  { month: 'May', spend: 6200 },
  { month: 'Jun', spend: 5900 },
  { month: 'Jul', spend: 7200 },
  { month: 'Aug', spend: 8100 },
  { month: 'Sep', spend: 7600 },
  { month: 'Oct', spend: 8800 },
];


const data = [{merchant:'Spar',spending:4000},{merchant:'Shoprite',spending:4000},{merchant:'Checkers',spending:5000},{merchant:'Woolies',spending:1500}]
const chartSetting = {
  yAxis: [
    {
      label: 'Spending (In Rands)',
      width: 60,
    },
  ],
  series: [{ dataKey: 'spending', label: 'Top Merchants By Spend' }],
  height: 250,
  margin: { left: 0 },
};


const Spendings = () => {
    return (
        <div className="p-5">
            <div className="md:flex gap-4">
               <div className="flex-6 shadow-sm h-70 mb-5 md:mb-0">
                  <BarChart
        dataset={data}
        xAxis={[{ dataKey: 'merchant' }]}
        {...chartSetting}
      />
               </div>
               <div className="flex-6 shadow-sm h-70">
                <div className='grid items-center h-[100%]'>
                <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'Groceries',color:'black' },
            { id: 1, value: 15, label: 'Takeaways',color:'#7c86ff' },
            { id: 2, value: 20, label: 'Household',color:'#432dd7' },
            { id: 2, value: 20, label: 'Clothing',color:'#1e1a4d' },
          ],
        },
      ]}
      width={200}
      height={200}
    />

                </div>
               </div>
            </div>
            <div className='md:flex gap-4 mt-5'>
               <div className='md:flex-6 shadow-sm h-70'>
   <LineChart
      dataset={data2}
      xAxis={[{ scaleType: 'point', dataKey: 'month' }]}
      series={[
        {
          dataKey: 'spend',
          label: 'Monthly Spending',
          showMark: ({ index }) => index % 2 === 0,
        },
      ]}
      height={250}
    />
               </div>
            </div>
        </div>
    )
}

export default Spendings;