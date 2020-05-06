import React from 'react'
import { observer } from 'mobx-react'

function SearchHistory({ historyData, resetHistory }) {

    return (
        <div className='history-list'>
            <div className='history-content'>
                <h2>Search history</h2>
                <ul>
                    {historyData && historyData.slice().reverse().map((search, index) =>
                        <li key={index}>{search}</li>
                    )}
                </ul>
            </div>
            <button onClick={() => resetHistory()}>Reset history</button>
        </div>
    )
}

export default observer(SearchHistory)