import Layout from '../components/Layout'
import SearchHistory from '../components/SearchHistory'
import React, { useContext } from 'react'
import Store from './Store'
import { observer } from 'mobx-react'

function History() {
    const store = useContext(Store)
    return (
        <Layout>
            <div>
                <SearchHistory historyData={store.items} resetHistory={store.resetHistory} />
            </div>
        </Layout>
    )
}

export default observer(History)