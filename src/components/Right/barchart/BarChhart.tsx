import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  {
    name: 'January',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'February',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'August',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'September',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'October',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'November',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'December',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function BarChhart(){
 
    return (
      <ResponsiveContainer className='myownchart' width="100%" height="100%">
        <BarChart width={150} height={40} data={data}>
          <Bar dataKey="uv" fill="#8884d8" />
          <XAxis tick={true} dataKey="name" />
          <Tooltip/>
        </BarChart>
      </ResponsiveContainer>
    );
}
