import { showNotification } from '@mantine/notifications';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from 'recharts';
import hslToColorName from './hslToColorName';

export function ReturnChart(tab:any, colors:any, query:any, totalResults:any, searchTimes:any){
    return(
    <div className="pieContainer" style={{ width: '100%', height: 300 }}>
    <ResponsiveContainer>
            <PieChart>
              <Pie dataKey="value" data={tab} label>
                {tab.map((entry: any, index: any) => 
                <Cell key={index} fill={`hsl(+${colors[index]},100%,50%`} 
                onClick={() =>
                  showNotification({
                  title: query?.employees[index].name,
                  message: `wyniki wyszukiwania: ${totalResults[index]}, czas wyszukania: ${searchTimes[index]}`,
                  color: hslToColorName(colors[index])
              })
            }/>)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          </div>)
  }