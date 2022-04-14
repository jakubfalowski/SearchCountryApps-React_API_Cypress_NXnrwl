import React, {useMemo} from 'react'
import { useTable } from 'react-table'
import { COLUMNS } from './columns'
import {MOCK_DATA} from './MOCK_DATA' 

export const BasicTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    useTable({
        columns,
        data
    })
}
// https://www.youtube.com/watch?v=hson9BXU9F8