import React, { Component } from 'react'
import { Container, Content, Tabs } from 'native-base'

import TabOne from './Book'
import TabTwo from './Article'


export default class index extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Tabs>
                        <TabOne tabLabel='หนังสือ' />
                        <TabTwo tabLabel='บทความ' />
                    </Tabs>
                </Content>
            </Container>
        );
    }
}