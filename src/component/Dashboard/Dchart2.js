import React from 'react'
import { PieChart,Pie,CartesianGrid,Tooltip,ResponsiveContainer } from 'recharts'
import { Grid,Card } from '@material-ui/core'
import { green } from '@material-ui/core/colors';
import { MenuBook } from '@material-ui/icons';
import MenuIcon from '@mui/icons-material/Menu';

const data = [
  {
      name: 'Page A',
      uv: 100,
      pv: 200,
      amt: 100
  },
  {
      name: 'Page B',
      uv: 300,
      pv: 100,
      amt: 150
  },
  {
      name: 'Page C',
      uv: 400,
      pv: 240,
      amt: 340
  },
  {
      name: 'Page D',
      uv: 200,
      pv: 242,
      amt: 250
  }, {
      name: 'Page E',
      uv: 100,
      pv: 240,
      amt: 240
  }, {
      name: 'Page F',
      uv: 400,
      pv: 245,
      amt: 540
  }
];

const fill1=['red','green','orange']

function Dchart2() {
  return (
    
    <ResponsiveContainer width="100%" height="100%" >
    <PieChart width={400} height={400}>
      <Pie
        dataKey="uv"
        isAnimationActive={false}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill1="#8884d8"
        label
      />
       <Pie
        dataKey="pv"
        isAnimationActive={false}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      />
       <Pie
        dataKey="amt"
        isAnimationActive={false}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      />
     
      <Tooltip />
    </PieChart>
  
  </ResponsiveContainer>
  )
}

export default Dchart2
