import React, { useContext } from 'react'
import { observer } from 'mobx-react'
import Store from './Store'
import Layout from '../components/Layout'
import Weather from '../components/Weather'

const Home = () => {
    const store = useContext(Store)
    return (
        <Layout>
            <Weather location='Göteborg' addSearch={store.addLocation} />
        </Layout>
    )
}

export default observer(Home)


